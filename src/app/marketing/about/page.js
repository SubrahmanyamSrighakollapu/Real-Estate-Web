import MainAboutUs from './sections/MainAboutUs';
import CorePhilosophy from './sections/CorePhilosophy';
import MeetOurExpertTeam from './sections/MeetOurExpertTeam';
import QuickQuerySection from '../home/sections/QuickQuerySection';

export default function AboutPage() {
  return (
    <div>
      <MainAboutUs />
      <CorePhilosophy />
      <MeetOurExpertTeam />
      <QuickQuerySection/>
    </div>
  );
}