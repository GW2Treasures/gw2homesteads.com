import { db } from "@/lib/db";
import { getGw2MeClient, getGw2meRedirectUrl } from "@/lib/gw2me";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

// TODO: handle errors
export async function GET(request: NextRequest) {
  const gw2me = getGw2MeClient();

  // parse code/state from url
  const authResponse = gw2me.parseAuthorizationResponseSearchParams(request.nextUrl.searchParams);

  // make sure state is set
  if(!authResponse.state) {
    throw new Error('State missing');
  }

  // get + delete auth request
  const authRequest = await db.authRequest.delete({
    where: { id: authResponse.state },
  });

  // make sure request is found
  if(!authRequest) {
    throw new Error('Unknown auth request');
  }

  // get token
  const token = await gw2me.getAccessToken({
    code: authResponse.code,
    redirect_uri: getGw2meRedirectUrl(),
    code_verifier: authRequest.code_verifier,
  });

  // get user data
  const identity = await gw2me.api(token.access_token).user();

  // get user
  const user = await db.user.upsert({
    where: { gw2meUserId: identity.user.id },
    select: { id: true },
    create: {
      gw2meUserId: identity.user.id,
      name: identity.user.name,
    },
    update: {
      name: identity.user.name,
    },
  });

  // create session
  const session = await db.session.create({
    data: { userId: user.id },
    select: { id: true },
  });

  // set session cookie
  const cookieStore = await cookies();
  cookieStore.set('session', session.id, {
    sameSite: 'none',
    httpOnly: true,
    priority: 'high',
    path: '/',
    secure: true
  });

  // redirect user
  redirect('/');
}
