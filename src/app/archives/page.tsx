'use client';
// TODO MOBILE VIEW

import NoteworthySection from './_components/noteworthy-project';
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
                <NoteworthySection />
              </div>
              <div className="h-screen w-screen">
                <AchievementSection />
              </div>
            </div>
          </AnimatedLayout>
        </HorizontalScroll>
      </div>

      {/* mobile view */}
      <div className="block lg:hidden max-w-3xl mx-auto mt-10 px-4">
        <AnimatedLayout>
          <div className="w-full">
            <JourneySection />
          </div>
          <div className="w-full">
            <NoteworthySection />
          </div>
          <div className="w-full">
            <JourneySection />
          </div>
          <div className="w-full">
            <JourneySection />
          </div>
        </AnimatedLayout>
      </div>
    </>
  );
}

export default ArchivePage;
