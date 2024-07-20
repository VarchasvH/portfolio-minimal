import Card from "@/components/Card";
import Image from "next/image";

const Projects = () => {
  return (
    <div className='w-full text-zinc-200'>
      <section className='flex flex-col justify-center items-center md:mt-5 space-y-5'>
        <h1 className='text-2xl md:text-4xl font-extrabold  tracking-wide text-[#fec576]'>
          Projects
        </h1>
        {/* <p className='text-base md:text-lg'>
          Here are some of my projects that showcase my skills and expertise.
        </p> */}
      </section>
      <section className='flex flex-wrap gap-10 mt-10 justify-center items-center'>
        <Card />
      </section>
    </div>
  );
};

export default Projects;
