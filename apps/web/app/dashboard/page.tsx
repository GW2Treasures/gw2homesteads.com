import { Button } from "@/components/Button";
import { db } from "@/lib/db";
import { requireUser } from "@/lib/session";
import Link from "next/link";

export default async function DashboardRoute() {
  const user = await requireUser();

  return (
    <div>
      <div>Hello {user.name}.</div>
    </div>
  );
}

