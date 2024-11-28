'use client';

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
      <div className="block lg:hidden">mobile</div>
    </>
  );
}

export default ArchivePage;
