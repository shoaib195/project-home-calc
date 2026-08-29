import { redirect } from "next/navigation";

/** Former project-planner stub — redirect so reviewers never hit a thin page. */
export default function ProjectsPage() {
  redirect("/calculators");
}
