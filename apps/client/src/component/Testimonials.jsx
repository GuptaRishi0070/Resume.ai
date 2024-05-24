


const testimonialsData = [
  {
    quote: "“This is really a thank you for Reactive Resume. Drafting resumes was never a strength of mine, so your app really made the whole process easy and smooth!”",
    author: "N. Elnour"
  },
  {
    quote: "“Hi Amruth! First off, many thanks for making RxResume! This is one of the best resume-building tools I have ever found. Have also recommended it to many of my university friends...”",
    author: "S. Bhaije"
  },
  {
    quote: "“Hi, I just found your resume builder, and I just want to say, I really appreciate it! The moment I saw it was open source, I closed all the other CV sites I was considering. Thank you for your service.”",
    author: "K. Lietzau"
  },
  {
    quote: "“Hey, Just wanted to let you know you not only helped me get a job, you helped my partner and my childhood friend, who then used your site to help one of her friends get a job. I sponsored you on Github to give back a bit but I wanted to let you know you really made a difference with your resume builder.”",
    author: "R. Sinnot"
  },
  {
    quote: "“Hey, I am a Mechanical engineer, not understand coding, messy AI, and computer systems, But wait, what drags me here is your creativity, Your website RxResume is all good! using it and the efforts you made to keep this free is remarkable. keeping doing great work.”",
    author: "P. Jignesh"
  },
  {
    quote: "“Hey Amruth, I have loved your Reactive Resume Website. Thank you so much for making this kind of thing.”",
    author: "A. Rehman"
  },
  {
    quote: "“First of all, I appreciate your effort for making reactive resume a free tool for the community. Very much better than many premium resume builder...”",
    author: "S. Innocent"
  },
  {
    quote: "“Hello sir, I just wanted to write a thank you message for developing RxResume. It's easy to use, intuitive and it's much more practical than many others that made you pay up after spending an hour to create your CV. I'll be sure to buy you a coffee after I get my first job. I wish you everything best in life!”",
    author: "M. Fritza"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container relative space-y-12 py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-y-0">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="space-y-8">
            <figure className="relative overflow-hidden rounded-lg bg-secondary-accent p-5 text-primary shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 256 256" className="absolute -right-3 bottom-0 opacity-20" alt="Quote Icon">
                <path d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"></path>
              </svg>
              <blockquote className="italic leading-relaxed">{testimonial.quote}</blockquote>
              <figcaption className="mt-3 font-medium">{testimonial.author}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
