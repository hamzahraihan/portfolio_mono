import ProjectHeadSection from './_components/ui/header';
import ProjectSection from './_components/project-section';

function ProjectPage() {
  return (
    <div className="gap-4 max-w-7xl lg:mx-auto px-4">
      <ProjectHeadSection />
      <div className="container max-w-full px-4 lg:px-10 flex gap-2 justify-center items-center">
        <ProjectSection />
      </div>
    </div>
  );
}

export default ProjectPage;
