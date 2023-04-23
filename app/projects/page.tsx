"use client";

import { Navigation } from "../components/nav";
import { NextSeo } from "next-seo";
import { projects, featured, featured2 } from "@/src/data/Project/projects";
import { Article } from "./article";

export default function ProjectsPage() {
  return (
    <>
      <NextSeo title="Projects" />;
      <div className="relative pb-16">
        <Navigation />
        <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-2">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400">
              Some of the projects are from work and some are on my own time.
            </p>
          </div>
          <div className="w-full h-px bg-zinc-800" />

          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            <Article type={featured} disabled={"cursor-not-allowed"} />

            <div className="flex flex-col w-full gap-8  mx-auto border-t border-gray-900/10  lg:mx-0  lg:border-t-0 ">
              <Article type={featured2} />
            </div>
          </div>
          <div className="hidden w-full h-px md:block bg-zinc-800" />

          <div className="gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
              <Article type={projects} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
