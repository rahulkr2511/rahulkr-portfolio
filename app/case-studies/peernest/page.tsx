import { Metadata } from "next";
import CaseStudyView from "@/components/CaseStudyView";
import { caseStudies } from "@/lib/case-studies";

const study = caseStudies["peernest"];

export const metadata: Metadata = {
  title: `${study.name} — Case Study`,
  description: study.tagline,
};

export default function Page() {
  return <CaseStudyView study={study} />;
}
