import Link from "next/link";
import { contact } from "@/lib/property";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-mist/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <a href={`tel:${contact.phoneTel}`} className="btn-secondary flex-1">
          Call
        </a>
        <Link href="/contact" className="btn-primary flex-1">
          Tour
        </Link>
      </div>
    </div>
  );
}
