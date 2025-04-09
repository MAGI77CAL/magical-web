import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Magical Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-gray-900">Magical</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <a
          href="https://open.kakao.com/o/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700"
        >
          카톡 문의하기
        </a>
      </div>
    </header>
  );
}
