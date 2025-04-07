// src/components/Projects.jsx

import ProjectCard from './ProjectCard'; // ✅ 이렇게 고쳐야 해!


const Projects = () => {
  const projectList = [
    {
      image: '/taste-spot.jpg', // public 폴더에 이미지 추가 필요
      title: 'Taste Spot',
      subtitle: '글로벌 맛집 추천 앱',
      link: '#'
    },
    {
      image: '/golden-hands.jpg',
      title: 'Golden Hands',
      subtitle: '재능 나눔 봉사 프로젝트',
      link: '#'
    },
    {
      image: '/magical-moment.jpg',
      title: 'Magical Moment',
      subtitle: '감성 잡지 매거진',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
  {projectList.map((project, idx) => (
    <ProjectCard key={idx} {...project} />
  ))}
</div>

    </section>
  );
};

export default Projects;
