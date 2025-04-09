import ProjectCard from "./ProjectCard";
import tasteSpot from "../assets/taste-spot.png";
import goldenHand from "../assets/golden-hand.png";
import magicalMoment from "../assets/magical-magazine.png";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProjectCard
          title="Taste Spot"
          description="글로벌 맛집 추천 앱"
          image={tasteSpot}
        />
        <ProjectCard
          title="Golden Hands"
          description="재능 나눔 봉사 프로젝트"
          image={goldenHand}
        />
        <ProjectCard
          title="Magical Moment"
          description="감성 잡지 매거진"
          image={magicalMoment}
        />
      </div>
    </section>
  );
}
