import { useEffect } from 'react';
import { motion } from 'framer-motion';
import builderImage from '/src/assets/images/builder.jpg'; // Ensure the path is correct
// import './Basic.css'; // Import CSS file 
const ImageHoverEffect = () => {
  useEffect(() => {
    const imageContainer = document.querySelector('.image-container');
    const image = document.querySelector('.hover-effect img');

    const handleMouseMove = (e) => {
      const { offsetWidth: width, offsetHeight: height } = imageContainer;
      const { offsetX: x, offsetY: y } = e;

      const rotateX = ((y / height) - 0.5) * 30; // 30 degrees max tilt
      const rotateY = ((x / width) - 0.5) * -30; // 30 degrees max tilt

      image.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = 'scale(1) rotateX(0) rotateY(0)';
    };

    imageContainer.addEventListener('mousemove', handleMouseMove);
    imageContainer.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners on component unmount
    return () => {
      imageContainer.removeEventListener('mousemove', handleMouseMove);
      imageContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    
    <div className="mx-auto max-w-7xl px-6 lg:flex lg:h-screen lg:items-center lg:px-12 space-y-16 lg:space-y-0 lg:space-x-10">
      <motion.div
        className="flex-1 mx-auto max-w-3xl lg:max-w-xl"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="hidden items-center gap-x-4 sm:flex">
          <div className="inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold border-primary bg-primary text-primary-foreground">
            Version 4
          </div>
          <a
            href="https://docs.rxresu.me/overview/features"
            className="inline-flex items-center space-x-2 text-left text-primary underline-offset-4 hover:underline"
          >
            <p> What new in the latest version</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </a>
        </div>

        <div className="mt-10 space-y-2">
          
        <h6 className="text-base font-bold tracking-wide" style={{ marginRight: '488px' }}>
  Finally,
</h6>

<h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-left">
            A free and open-source resume <br />builder
          </h1>
        </div>

        <p className="prose prose-base prose-zinc mt-6 text-lg leading-8 dark:prose-invert">
          A free and open-source resume builder that simplifies the process of creating, updating, and sharing your resume.
        </p>

        <div className="mt-10 flex items-center gap-x-8">
          <a className="inline-flex items-center justify-center rounded-sm text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/80 h-10 px-6" href="/auth/login">
            Get Started
          </a>
          <a href="https://docs.rxresu.me" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center justify-center rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline h-auto px-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="mr-3">
              <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path>
            </svg>
            Learn more
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 mx-auto max-w-2xl lg:max-w-none lg:flex-none"
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="hover-effect image-container relative">
          <img
            width="3600"
            height="2078"
            src={builderImage}
            alt="Reactive Resume - Screenshot - Builder Screen"
            className="w-full max-w-lg rounded-lg bg-background/5 shadow-2xl ring-1 ring-foreground/10"
            style={{ height: '500px', objectFit: 'cover' }} // Adjust height and maintain aspect ratio
          />
          <div
            className="glare-wrapper"
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: '0px',
              maskImage: '-webkit-radial-gradient(center, white, black)',
              pointerEvents: 'none'
            }}
          >
            <div
              className="glare"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transformOrigin: '0% 0%',
                pointerEvents: 'none',
                width: '1200px',
                height: '1200px',
                transform: 'rotate(0deg) translate(-50%, -50%)',
                opacity: 0,
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(250, 250, 250) 100%)',
                transition: 'opacity 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s'
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageHoverEffect;
