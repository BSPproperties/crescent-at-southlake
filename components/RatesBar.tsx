import Link from "next/link";
import { floorPlans, formatCurrency } from "@/lib/property";

const lowest = Math.min(...floorPlans.map((p) => p.rentFrom));

export function RatesBar() {
  return (
    <div className="border-b border-white/10 bg-ink">
      <Link
        href="/floor-plans"
        className="mx-auto block max-w-6xl px-4 py-2 text-center text-sm text-white/85 no-underline transition hover:text-white sm:px-6"
      >
        Homes from {formatCurrency(lowest)}/month
        <span className="ml-2 text-lagoon-soft">View floor plans →</span>
      </Link>
    </div>
  );
}
