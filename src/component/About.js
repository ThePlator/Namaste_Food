import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

const About = () => {
  return (
    <div className="mt-32" style={{ paddingTop: '100px' }}>
      <div
        className="flex flex-col-reverse md:flex-row  mx-16 justify-between"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
        }}>
        <div className="flex flex-col w-full  md:w-3/5">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 md:mt-28 mb-7 ">
            <p className="text-4xl md:text-8xl font-bold text-[#3F4255]">
              Sameer
            </p>
            <div className="flex  gap-1 md:flex-col justify-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9093A6]">
                :)
              </p>
            </div>
          </div>
          <p className="text-md text-center md:text-left w-[100%] text-[#909090]">
            I'm a frontend developer who builds large scable appilations from
            scratch.
            <br /> This application is made by me from scratch using ReactJs.
          </p>

          <div
            className="flex justify-center md:justify-start gap-5 my-4 "
            style={{ display: 'flex', gap: '10px' }}>
            <a
              href="https://www.linkedin.com/in/sameer-pce/"
              target="_blank"
              rel="noopener noreferrer">
              <BsLinkedin className="text-5xl text-[#0A66C2] hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://github.com/ThePlator"
              target="_blank"
              rel="noopener noreferrer">
              <BsGithub className="text-5xl hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            src="https://avatars.githubusercontent.com/u/121722541?v=4"
            className="w-[300px] rounded-full border-dotted border-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
