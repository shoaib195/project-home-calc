import { redirect } from "next/navigation";

/** Public sign-in is not a product surface — redirect thin/coming-soon URLs away. */
export default function SignInPage() {
  redirect("/calculators");
}
