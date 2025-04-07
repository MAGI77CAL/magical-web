// src/components/ProjectCard.jsx

const ProjectCard = ({ image, title, subtitle, description, link }) => {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 text-center">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
        <a
          href={link}
          className="inline-block mt-4 px-4 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
        >
          더 알아보기
        </a>
      </div>
    );
  };
  
  export default ProjectCard;
  