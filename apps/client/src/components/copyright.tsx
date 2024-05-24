import { t, Trans } from "@lingui/macro";
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
    <span>
      <Trans>
        Licensed under{" "}
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://github.com/AmruthPillai/Reactive-Resume/blob/main/LICENSE.md"
        >
          MIT
        </a>
      </Trans>
    </span>
    {/* Community message */}
    <span>{t`By the community, for the community.`}</span>
    {/* Credit for the creator */}
    <span>
      <Trans>
        A passion project by <a href="https://www.amruthpillai.com/">Amruth Pillai</a>
      </Trans>
    </span>
    {/* App version */}
    <span className="mt-4">
      {t`Reactive Resume`} {"v" + appVersion}
    </span>
  </div>
);
