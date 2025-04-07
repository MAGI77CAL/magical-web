// src/components/Header.jsx

const Header = () => {
    return (
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/magical-logo.png" alt="Magical Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-gray-800">Magical</h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-700 text-sm">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <a
          href="https://pf.kakao.com/_your_channel" // <-- 여기에 지훈이의 카카오톡 채널 URL 넣어줘
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700"
        >
          💬 카톡 문의하기
        </a>
      </header>
    );
  };
  
  export default Header;
  