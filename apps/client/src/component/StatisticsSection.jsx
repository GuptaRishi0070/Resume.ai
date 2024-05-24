import { useState, useEffect, useRef } from 'react';

const StatisticsSection = () => {
  const [githubStars, setGithubStars] = useState(0);
  const [usersSignedUp, setUsersSignedUp] = useState(0);
  const [resumesGenerated, setResumesGenerated] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
        observer.disconnect(); // Disconnect observer after animation starts
      }
    }, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    animateNumber(0, 19500, 2000, setGithubStars);
    animateNumber(0, 500000, 2000, setUsersSignedUp);
    animateNumber(0, 700000, 2000, setResumesGenerated);
  };

  const animateNumber = (start, end, duration, callback) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      callback(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section id="statistics" className="relative py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-3">
            <dt className="text-base leading-7 opacity-60">GitHub Stars</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
              <span>{githubStars.toLocaleString()}</span>+
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-3">
            <dt className="text-base leading-7 opacity-60">Users Signed Up</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
              <span>{usersSignedUp.toLocaleString()}</span>+
            </dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-3">
            <dt className="text-base leading-7 opacity-60">Resumes Generated</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
              <span>{resumesGenerated.toLocaleString()}</span>+
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default StatisticsSection;
