import React from 'react';

const SupportSection = () => {
  return (
    <section id="support" className="relative space-y-12 bg-secondary-accent py-24 text-primary sm:py-32">
      <div className="container mx-auto space-y-6 px-6">
        <h1 className="text-4xl font-bold">Supporting Reactive Resume</h1>

        <p className="max-w-4xl leading-loose">
          Reactive Resume is a free and open-source project crafted mostly by me, and your support would be greatly appreciated. If you're inclined to contribute, and only if you can afford to, consider making a donation through any of the listed platforms. Additionally, donations to Reactive Resume through Open Collective are tax-exempt, as the project is fiscally hosted by Open Collective Europe.
        </p>

        <div className="flex items-center gap-x-10">
          <a href="https://github.com/GuptaRishi0070" rel="noreferrer noopener nofollow" target="_blank">
            <img
              src="/support-logos/github-sponsors-light.svg"
              className="hidden max-h-[42px] dark:block"
              alt="GitHub Sponsors"
            />
            <img
              src="/support-logos/github-sponsors-dark.svg"
              className="block max-h-[42px] dark:hidden"
              alt="GitHub Sponsors"
            />
          </a>
          <a href="https://opencollective.com/Reactive-Resume" rel="noreferrer noopener nofollow" target="_blank">
            <img
              src="/support-logos/open-collective-light.svg"
              className="hidden max-h-[38px] dark:block"
              alt="Open Collective"
            />
            <img
              src="/support-logos/open-collective-dark.svg"
              className="block max-h-[38px] dark:hidden"
              alt="Open Collective"
            />
          </a>
          <a href="https://paypal.me/amruthde" rel="noreferrer noopener nofollow" target="_blank">
            <img src="/support-logos/paypal.svg" className="max-h-[28px]" alt="PayPal" />
          </a>
        </div>

        <p className="max-w-4xl leading-loose">
          If you're multilingual, we'd love your help in bringing the app to more languages and communities. Don't worry if you don't see your language on the list - just give me a shout-out on GitHub, and I'll make sure to include it. Ready to get started? Jump into translation over at Crowdin by clicking the link below.
        </p>

        <div className="flex items-center gap-x-10">
          <img
            src="/support-logos/crowdin-light.svg"
            className="hidden max-h-[32px] dark:block"
            alt="Crowdin"
          />
          <img
            src="/support-logos/crowdin-dark.svg"
            className="block max-h-[32px] dark:hidden"
            alt="Crowdin"
          />
        </div>

        <p className="max-w-4xl leading-loose">
          Even if you're not in a position to contribute financially, you can still make a difference by giving the GitHub repository a star, spreading the word to your friends, or dropping a quick message to let me know how Reactive Resume has helped you. Your feedback and support are always welcome and much appreciated!
        </p>
      </div>
    </section>
  );
};

export default SupportSection;
