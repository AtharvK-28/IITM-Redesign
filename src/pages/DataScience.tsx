import DSHeader from '../components/ds/DSHeader';
import ApplicationBanner from '../components/ds/ApplicationBanner';
import DSIntro from '../components/ds/DSIntro';
import Statistics from '../components/ds/Statistics';
import ProgramFeatures from '../components/programs/ProgramFeatures';
import ContactInfo from '../components/ui/ContactInfo';
import { dataScience } from '../data/programFeatures';

export default function DataScience() {
  return (
    <div>
      <DSHeader />
      <ApplicationBanner />
      <DSIntro />
      <Statistics />
      <ProgramFeatures features={dataScience} />
      <ContactInfo />
    </div>
  );
}