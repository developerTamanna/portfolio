import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.png'; // Replace with your image

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden px-6 z-10">
      {/* Left Text */}
      <div className="w-full md:w-1/2 space-y-6 text-start">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="block awesome">Transforming Ideas</span>
          <span className="block">
            <span className="awesome">Into</span>{' '}
            <span className="text-red-500">Digital Reality</span>
          </span>
        </h1>
        <p className="text-gray-300 w-full">
          I craft intuitive, high-performance web applications that turn your
          innovative ideas into digital experiences—built with modern
          technologies and real‑world impact in mind.
        </p>

        {/* My Projects Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          ➜ My Projects
        </Link>
      </div>

      {/* Right Image — hidden on small devices */}
      <div className="relative hidden md:flex w-full h-full md:w-1/2 mt-12 md:mt-0 justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="bg-transparent absolute -bottom-80 left-0"
        />
      </div>
    </div>
  );
};

export default Hero;
