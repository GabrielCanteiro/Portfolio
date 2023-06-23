import { BiRightArrow } from "react-icons/bi";

export const About = () => {
  const technologies = [
    "React",
    "Tailwind CSS",
    "SASS",
    "TypeScript",
    "JavaScript",
  ];

  return (
    <div className="pt-10 pb-10 border-b px-4">
      <h1 className="font-bebas_neue text-3xl">About Me</h1>
      <p>
        My journey began with my education as a Chemical Technician, an area in
        which I worked as a Chemical Analyst for four years. During this period,
        I gained solid knowledge in laboratory analysis, quality control, and
        chemical processes, which contributed to the development of my
        analytical skills and attention to detail.
        <br />
        <br />
        However, in 2020, something magical happened: my interest in the field
        of software development was sparked. Throughout this process, I focused
        intensely on Front-end, the visual and interactive part of web
        applications. I tirelessly sought out courses and training that allowed
        me to develop my skills. Immersing myself in the world of Front-end
        allowed me to combine my creativity with problem-solving abilities,
        creating attractive and intuitive interfaces for users.
        <br />
        <br />I am eager to embark on new opportunities and contribute to
        challenging projects. Whether it's developing engaging interfaces or
        solving complex problems, I am committed to delivering innovative
        technological solutions that meet user needs and exceed expectations. If
        you are looking for a dedicated, versatile, and technology-driven
        professional, I am ready to make a difference in your team. Let's build
        an amazing digital future together!
        <br />
        <br />
        Here are a few technologies I've been working with recently:
      </p>
      <div className="flex gap-4 mt-2 flex-wrap">
        {technologies.map((item) => (
          <span className="flex items-center ">
            <BiRightArrow className="text-teal-300" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
