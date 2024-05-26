import { FC } from 'react';
import { t } from '@lingui/macro';
import { Separator } from '@reactive-resume/ui';
import { Link } from 'react-router-dom';
import { Copyright } from '@/client/components/copyright';
import { LocaleSwitch } from '@/client/components/locale-switch';
import { Logo } from '@/client/components/logo';
import { ThemeSwitch } from '@/client/components/theme-switch';

// Define the type for the Footer component (Functional Component)
type FooterProps = {};

// Define the Footer component using TypeScript and FC (Function Component)
export const Footer: FC<FooterProps> = () => (
  <footer className="bg-background">
    <Separator />

    <div className="container grid py-12 sm:grid-cols-3 lg:grid-cols-4">
      {/* Logo and Description Section */}
      <div className="flex flex-col gap-y-2">
        <Logo size={96} className="-ml-2" />

        <h2 className="text-xl font-medium">{t`Reactive Resume`}</h2>

        <p className="prose prose-sm prose-zinc leading-relaxed opacity-90 dark:prose-invert hover:scale-105 hover:text-white transition-transform">
  {t`A free and open-source resume builder that simplifies the process of creating, updating, and sharing your resume.`}
</p>


        <Copyright className="mt-6" />
      </div>

      {/* DigitalOcean Sponsorship and Links */}
      <div className="relative col-start-4 flex flex-col items-end justify-end">
        <div className="mb-14 space-y-6 text-right opacity-90 dark:prose-invert hover:scale-105 hover:text-white transition-transform">
          <a
            className="block"
            href="https://www.digitalocean.com/?utm_medium=opensource&utm_source=Reactive-Resume"
          >
            <img
              src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_black.svg"
              alt="Powered by DigitalOcean"
              className="block dark:hidden"
              width="150px"
            />
            <img
              src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_white.svg"
              alt="Powered by DigitalOcean"
              className="hidden dark:block"
              width="150px"
            />
          </a>

          <Link to="/meta/privacy-policy" className="block text-sm font-medium">
            {t`Privacy Policy`}
          </Link>
        </div>

        {/* Locale and Theme Switches */}
        <div className="absolute bottom-0 right-0 lg:space-x-2">
          <LocaleSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </div>
  </footer>
);
