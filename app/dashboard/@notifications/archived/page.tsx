import { Card } from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      Archived page.tsx file
      <Link href='/dashboard' className="underline ml-2">Default</Link>
    </Card>
  );
}
