'use client';

import SelectedProjects from './_components/selected-projects';
import AnimatedLayout from '@/components/animated-presence';
import JourneySection from './_components/journey';
import AchievementSection from './_components/achievements';
import HorizontalScroll from '@/components/horizontal-scroll';

function ArchivePage() {
  return (
    <>
      {/* web view */}
      <div className="hidden lg:block">
        <HorizontalScroll>
          <AnimatedLayout>
            <div className="relative flex">
              <div className="h-screen w-screen">
                <JourneySection />
              </div>
              <div className="h-screen w-screen">
                <SelectedProjects />
              </div>
              <div className="h-screen w-screen">
                <AchievementSection />
              </div>
            </div>
          </AnimatedLayout>
        </HorizontalScroll>
      </div>

      {/* mobile view */}
      <div className=" lg:hidden max-w-3xl mx-auto mt-10 px-4">
        <AnimatedLayout>
          <div className="flex flex-col gap-20">
            <div className="w-full">
              <JourneySection />
            </div>
            <div className="w-full">
              <SelectedProjects />
            </div>
            <div className="w-full">
              <AchievementSection />
            </div>
          </div>
        </AnimatedLayout>
      </div>
    </>
  );
}

export default ArchivePage;
