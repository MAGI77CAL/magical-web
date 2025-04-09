export default function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 text-center">
      <div className="w-full h-28 flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-[60%] object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <button className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition">
        더 알아보기
      </button>
    </div>
  );
}
