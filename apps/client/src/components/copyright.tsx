import { cn } from "@reactive-resume/utils";

type Props = {
  className?: string;
  appVersion: string; // Ensure appVersion is passed as a prop
};

export const Copyright = ({ className, appVersion }: Props) => (
  <div
    className={cn(
      "prose prose-sm prose-zinc flex max-w-none flex-col gap-y-1 text-xs opacity-40 dark:prose-invert",
      className,
    )}
  >
    {/* License information */}
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="https://github.com/AmruthPillai/Reactive-Resume/blob/main/LICENSE.md"
    >
      Licensed under MIT
    </a>
    {/* Community message */}
    By the community, for the community.
    {/* Credit for the creator */}
    A passion project by <a href="https://www.amruthpillai.com/">Amruth Pillai</a>
    {/* App version */}
    Reactive Resume v{appVersion}
  </div>
);
