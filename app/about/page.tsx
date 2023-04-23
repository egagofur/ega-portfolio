"use client";

import { Navigation } from "@/app/components/nav";
import Introduction from "@/app/components/about/introduction";
import Education from "@/app/components/about/education";
import WorkExperience from "@/app/components/about/workexperience";
import Resume from "@/app/components/about/resume";
import { NextSeo } from "next-seo";

export default function About() {
  return (
    <>
      <NextSeo title="About Me" />
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-4 max-w-7xl lg:px-8 md:space-y-16 pb-8 lg:pt-36">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-2">
            About Me
          </h2>
          <h4 className="mt-4 text-xl text-zinc-400">Ega Gofur Triwahana</h4>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
        <Introduction />
        <Education />
        <WorkExperience />
        <Resume />
      </div>
    </>
  );
}
