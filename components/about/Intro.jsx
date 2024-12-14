const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-5 sm:px-7 md:px-10 lg:px-14">
        <h2 id="#home" className="after-effect after:left-52">
          About Me
        </h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                I'm a Full-Stack Developer with a passion for creating
                innovative and efficient solutions. With extensive experience in
                the software development industry, I've honed my skills and
                expertise to deliver exceptional results.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                My technical proficiency spans multiple programming languages,
                frameworks, and tools, with deep expertise in frontend, backend,
                and blockchain development. Whether it's designing scalable
                architectures, developing robust applications, or optimizing
                performance, I thrive on solving complex challenges and
                delivering high-quality software.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                As an experienced Full-Stack Developer, I bring strong
                leadership qualities that enable me to guide and mentor junior
                team members. I'm skilled at fostering collaboration, promoting
                knowledge sharing, and inspiring a culture of continuous
                improvement. I value effective communication and actively engage
                with stakeholders to ensure project objectives are achieved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
