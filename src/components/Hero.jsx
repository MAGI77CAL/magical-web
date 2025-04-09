export default function Hero() {
  return (
    <section id="home" className="text-center py-24">
      <h1 className="text-5xl font-bold mb-4">Magical</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        사람과 가치를 잇는 <br className="md:hidden" />
        감성 콘텐츠 기업
      </p>
      <div className="space-x-4">
        <button className="border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition">
          View Projects
        </button>
        <button className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
