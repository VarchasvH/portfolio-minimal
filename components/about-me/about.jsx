import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className='flex flex-col md:flex-col justify-center items-center md:mt-5 mt-10 text-white '>
      <section className='flex flex-col md:flex-col md:mx-36 justify-center items-center '>
        <h1 className='text-3xl md:text-3xl font-extrabold'>About Me</h1>
      </section>
      <section className='flex flex-col md:flex-row justify-center items-center md:mt-8 md:mx-36 leading-5 '>
        <Image
          src='/pice2.jpg'
          alt='Pic'
          width={350}
          height={350}
          className='rounded-md '
        />
        <div className='flex flex-col md:ml-20 md:mt-5 mt-5'>
          <h2 className='text-3xl md:text-5xl mx-20 md:mx-12 font-bold text-[#fec576]'>
            Varchasv Hoon
          </h2>
          <h3 className='text-base md:text-3xl mx-20 md:mx-12 md:mt-5 mt-2 '>
            Web Developer
          </h3>
          <p className=' text-xs md:text-base mx-20 md:mx-12 md:mt-5 mt-3 text-slate-200 tracking-wide'>
            Hello! My name is Varchasv Hoon and{" "}
            <span className='text-[#fec576]'>I am based in India</span>,
            enthusiastic about front-end and full-stack development. With a
            strong foundation in{" "}
            <span className='text-[#fec576]'>Next.js, React, TypeScript</span>,
            and a knack for crafting intuitive user interfaces using Tailwind
            CSS, I am eager to delve into the dynamic world of web development.
            Beyond coding, I find joy in Music, Gaming and Sports.
          </p>

          <p className='text-xs md:text-base mx-20 md:mx-12 md:mt-5 mt-5 text-slate-200 tracking-wide'>
            As a Developer, I am committed to continuous learning, eager to
            contribute effectively to innovative projects, and excited about the
            opportunities ahead in this ever-evolving field.
          </p>
          {/* <div className='flex mx-20 md:mx-12 mt-8 space-x-6 md:space-x-14'>
            <button
              className='select-none rounded-lg bg-[#fec576] py-2 px-2 md:py-3 md:px-5 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:w-36 w-28 md:mt-5'
              type='button'
            >
              Download CV
            </button>
            <button
              className='select-none rounded-lg border border-[#fec576] py-2 px-3 md:py-3 md:px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#fec576] transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:w-36 w-28 md:mt-5'
              type='button'
            >
              Hire Me
            </button>
          </div> */}
          <div className='mx-20 md:mx-12 md:mt-5 mt-5 py-4'>
            <p className='text-xl md:text-3xl font-bold text-[#fec576]'>
              Tech Stack
            </p>
            <div className='flex row-span-2 items-center md:mt-5 mt-3 gap-3 md:space-x-5 flex-wrap'>
              <Image
                src={"/next-logo.svg"}
                width={65}
                height={65}
                alt='Next Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/react-logo.svg"}
                width={65}
                height={65}
                alt='React Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/javascript-logo.svg"}
                width={65}
                height={65}
                alt='Javascript Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/typescript-logo.svg"}
                width={65}
                height={65}
                alt='Typescript Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/tailwind-logo.svg"}
                width={65}
                height={65}
                alt='Tawilind Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/nodejs-logo.svg"}
                width={65}
                height={65}
                alt='Nodejs Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/mongodb-logo.svg"}
                width={65}
                height={65}
                alt='Mongodb Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
            </div>
            <div className='flex row-span-2 items-center md:mt-5 mt-5 gap-3 md:space-x-5 flex-wrap'>
              <Image
                src={"/docker-logo.svg"}
                width={65}
                height={65}
                alt='Docker Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/kubernets-logo.svg"}
                width={65}
                height={65}
                alt='Kubernetes Logo'
                className='rounded-lg md:w-[65px] w-[50px]'
              />
              <Image
                src={"/jenkins-logo.svg"}
                width={65}
                height={65}
                alt='Jenkins Logo'
                className='rounded-lg md:w-[55px] w-[40px]'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
