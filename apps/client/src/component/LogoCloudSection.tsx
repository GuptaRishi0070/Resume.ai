
import AmazonLogo from '../assets/images/dark/amazon.svg';
import GoogleLogo from '../assets/images/dark/google.svg';
import PostmanLogo from '../assets/images/dark/postman.svg';
import TwilioLogo from '../assets/images/dark/twilio.svg';
import ZalandoLogo from '../assets/images/dark/zalando.svg';

function LogoCloudSection() {
  return (
    <section>
      <div id="logo-cloud" className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-center text-lg leading-relaxed">Reactive Resume has helped people land jobs at these great companies:</p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* Amazon Logo */}
            <div className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
              <img src={AmazonLogo} alt="amazon" width="212" height="48" />
            </div>
            {/* Google Logo */}
            <div className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
              <img src={GoogleLogo} alt="google" width="212" height="48" />
            </div>
            {/* Postman Logo */}
            <div className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
              <img src={PostmanLogo} alt="postman" width="212" height="48" />
            </div>
            {/* Twilio Logo */}
            <div className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
              <img src={TwilioLogo} alt="twilio" width="212" height="48" />
            </div>
            {/* Zalando Logo */}
            <div className="col-span-2 col-start-2 sm:col-start-auto lg:col-span-1">
              <img src={ZalandoLogo} alt="zalando" width="212" height="48" />
            </div>
          </div>
          {/* Message and contact form link */}
          <p className="mx-auto mt-8 max-w-sm text-center leading-relaxed">If this app has helped you with your job hunt, let me know by reaching out through <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.amruthpillai.com/#contact" className="inline-flex scale-100 items-center justify-center rounded-sm text-sm font-medium ring-offset-background transition-[transform,background-color] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-auto p-0">this contact form</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default LogoCloudSection;
