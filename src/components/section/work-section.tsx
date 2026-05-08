/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

type WorkEntry = typeof DATA.work[number];

function WorkItem({ work }: { work: WorkEntry }) {
  const [showMore, setShowMore] = useState(false);
  const hasMore = "moreDetails" in work && typeof work.moreDetails === "string" && work.moreDetails.length > 0;

  return (
    <AccordionItem
      value={work.company}
      className="w-full border-b-0 grid gap-2"
    >
      <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
        <div className="flex items-center gap-x-3 justify-between w-full text-left">
          <div className="flex items-center gap-x-3 flex-1 min-w-0">
            <LogoImage src={work.logoUrl} alt={work.company} />
            <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
              <div className="font-semibold leading-none flex items-center gap-2">
                {work.company}
                {"badges" in work && work.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="text-xs font-normal">
                    {badge}
                  </Badge>
                ))}
                {/* Mobile: always-visible static indicator */}
                <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 sm:hidden group-data-[state=open]:hidden" />
                {/* Desktop: animated indicators */}
                <span className="relative hidden sm:inline-flex items-center w-3.5 h-3.5">
                  <ChevronRight
                    className={cn(
                      "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                      "translate-x-0 opacity-0",
                      "group-hover:translate-x-1 group-hover:opacity-100",
                      "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                    )}
                  />
                  <ChevronDown
                    className={cn(
                      "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                      "opacity-0 rotate-0",
                      "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                    )}
                  />
                </span>
              </div>
              <div className="font-sans text-sm text-muted-foreground">
                {work.title}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
            <span>
              {work.start} - {work.end ?? DATA.sections.work.presentLabel}
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-0 ml-13 flex flex-col gap-3">
        <p className="text-xs sm:text-sm text-muted-foreground">{work.description}</p>
        {"skills" in work && work.skills.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {work.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        )}
        {hasMore && (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowMore((v) => !v)}
              className="self-start text-xs font-medium px-3 py-1 rounded-full border border-violet-200 bg-violet-50 hover:bg-violet-100 text-violet-700 transition-colors cursor-pointer dark:border-violet-800 dark:bg-violet-950/50 dark:hover:bg-violet-900/50 dark:text-violet-400"
            >
              {showMore ? "✨ Show less" : "✨ Say more..."}
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                showMore ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="text-xs sm:text-sm text-muted-foreground pb-1">
                  {"moreDetails" in work ? work.moreDetails : ""}
                </p>
              </div>
            </div>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <WorkItem key={work.company} work={work} />
      ))}
    </Accordion>
  );
}
