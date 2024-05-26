const OpenSourceHover = () => {
    return (
        <div className="container font-sans">
            <div className="space-y-6 leading-loose">
                <h2 className="text-4xl font-bold">Rich in features, not in pricing.</h2>
                <p className="max-w-4xl text-base leading-relaxed">
                    Reactive Resume is a passion project of over 3 years of hard work, and with that comes a number of re-iterated
                    ideas and features that have been built to (near) perfection.
                </p>
                <div className="!mt-12 flex flex-wrap items-center gap-4">
                    <Feature>
                        <h4 style={{ color: '#18181B',  backgroundColor:''}}>Free, forever</h4>
                    </Feature>
                    <Feature>
                        <h4>Open Source</h4>
                    </Feature>
                    <Feature>
                        <h4>MIT License</h4>
                    </Feature>
                    <Feature>
                        <h4>No user tracking or advertising</h4>
                    </Feature>
                    <Feature>
                        <h4>Self-host with Docker</h4>
                    </Feature>
                    <Feature>
                        <h4>Available in 50 languages</h4>
                    </Feature>
                    <Feature>
                        <h4>OpenAI Integration</h4>
                    </Feature>
                    <Feature>
                        <h4>Sign in with GitHub</h4>
                    </Feature>
                    <Feature>
                        <h4>Sign in with Google</h4>
                    </Feature>
                    <Feature>
                        <h4>Sign in with Email</h4>
                    </Feature>
                    <Feature>
                        <h4>Secure with two-factor authentication</h4>
                    </Feature>
                    <Feature>
                        <h4>12 resume templates to choose from</h4>
                    </Feature>
                    <Feature>
                        <h4>Design single/multi page resumes</h4>
                    </Feature>
                    <Feature>
                        <h4>Manage multiple resumes</h4>
                    </Feature>
                    <Feature>
                        <h4>Customisable colour palettes</h4>
                    </Feature>
                    <Feature>
                        <h4>Customisable layouts</h4>
                    </Feature>
                    <Feature>
                        <h4>Custom resume sections</h4>
                    </Feature>
                    <Feature>
                        <h4>Personal notes for each resume</h4>
                    </Feature>
                    <Feature>
                        <h4>Lock a resume to prevent editing</h4>
                    </Feature>
                    <Feature>
                        <h4>Supports A4/Letter page formats</h4>
                    </Feature>
                    <Feature>
                        <h4>Pick any font from Google Fonts</h4>
                    </Feature>
                    <Feature>
                        <h4>Host your resume publicly</h4>
                    </Feature>
                    <Feature>
                        <h4>Track views and downloads</h4>
                    </Feature>
                    <Feature>
                        <h4>Light or dark theme</h4>
                    </Feature>
                </div>
            </div>
        </div>
    );
};

const Feature = ({ children }) => {
    return (
        <div className="feature hover:bg-white rounded p-3 cursor-pointer transition-colors">
            {children}
        </div>
    );
};

export default OpenSourceHover;
/* 

function OpenSourceHover() {
  return (
    <div className="flex cursor-default items-center justify-center gap-x-2 rounded bg-secondary px-4 py-3 text-sm font-medium leading-none text-primary transition-colors hover:bg-primary hover:text-background" style={{ opacity: 1, transform: 'none' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256">
        <path d="M204,168a52.06,52.06,0,0,1-52,52H140v12a12,12,0,0,1-24,0V220H104a52.06,52.06,0,0,1-52-52,12,12,0,0,1,24,0,28,28,0,0,0,28,28h48a28,28,0,0,0,0-56H112a52,52,0,0,1,0-104h4V24a12,12,0,0,1,24,0V36h4a52.06,52.06,0,0,1,52,52,12,12,0,0,1-24,0,28,28,0,0,0-28-28H112a28,28,0,0,0,0,56h40A52.06,52.06,0,0,1,204,168Z"></path>
      </svg>
      <h4>Free, forever</h4>
    </div>
  );
}

export default OpenSourceHover;
 */
