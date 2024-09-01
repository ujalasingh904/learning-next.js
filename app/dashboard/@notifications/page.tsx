import { Card } from "@/app/components/card";
import Link from "next/link";

export default function notifications() {
  return (
    <Card>
      Notifications page.tsx file
      <Link href='/dashboard/archived' className="underline ">Archived</Link>
    </Card>
  );
}
