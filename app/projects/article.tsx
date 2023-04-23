import { GitFork, ExternalLink } from "lucide-react";
import { Card } from "../components/card";
import Image from "next/image";
import { techs } from "@/src/data/Tech/techs";
import Project from "@/src/data/Project/project";
import Tech from "@/src/data/Tech/tech";
import Link from "next/link";

type Props = {
  type: Project[];
  disabled?: string;
};

export const Article = ({ type, disabled }: Props) => {
  return (
    <>
      {type.map((project: Project) => (
        <Card key={project.name}>
          <article className={`relative h-full w-full p-4 md:p-8 ${disabled}`}>
            <div className="flex justify-between gap-2 items-center">
              <div className="text-xs text-zinc-100">
                {project.date ? project.date : <span>SOON</span>}
              </div>
              <span className="text-zinc-500 text-xs flex items-center gap-7">
                {project.link.repo && (
                  <Link target="_blank" href={project.link.repo}>
                    <GitFork className={`w-5 h-5 ${disabled}`} />
                  </Link>
                )}
                {project.link.demo && (
                  <Link target="_blank" href={project.link.demo}>
                    <ExternalLink className={`w-5 h-5 ${disabled}`} />
                  </Link>
                )}
              </span>
            </div>
            <h2
              id="featured-post"
              className="mt-4 text-3xl font-bold  text-zinc-100 group-hover:text-white sm:text-4xl font-display"
            >
              {project.name}
            </h2>
            <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
              {project.desc}
            </p>
            <div className="flex gap-2 py-2">
              {techs
                .filter((tech: Tech) => project.tech?.includes(tech.name))
                .map((tech: Tech) => (
                  <div className="relative h-6 w-6" key={tech.name}>
                    <Image
                      src={`/images/tech/${tech.icon}`}
                      alt={tech.name}
                      fill
                      sizes="(max-width: 768px) 8vw,
                        (max-width: 1200px) 16vw,
                         32vw"
                      className="object-contain"
                    />
                  </div>
                ))}
            </div>
          </article>
        </Card>
      ))}
    </>
  );
};
