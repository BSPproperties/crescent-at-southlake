import { redirect } from "next/navigation";

/** Legacy path — qualifications content removed; leasing lives at /leasing */
export default function QualificationsRedirect() {
  redirect("/leasing");
}
