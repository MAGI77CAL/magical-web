// src/components/Hero.jsx

const Hero = () => {
    return (
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white"
      >
        <img
          src="/magical-logo.png"
          alt="Magical Logo"
          className="w-24 h-24 mb-4"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Magical</h1>
        <p className="text-xl text-gray-700 mb-6">
          사람과 가치를 잇는 <br className="md:hidden" />
          감성 콘텐츠 기업
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  