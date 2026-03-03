import DSHeader from '../components/ds/DSHeader';
import AdmissionsNav from '../components/admissions/AdmissionsNav';
import ImportantDates from '../components/admissions/ImportantDates';
import Requirements from '../components/admissions/Requirements';
import Eligibility from '../components/admissions/Eligibility';
import ApplicationProcess from '../components/admissions/ApplicationProcess';
import RegularEntry from '../components/admissions/RegularEntry';
import JEEEntry from '../components/admissions/JEEEntry';
import International from '../components/admissions/International';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      <AdmissionsNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <section id="important-dates">
            <ImportantDates />
          </section>
          
          <section id="requirements">
            <Requirements />
          </section>
          
          <section id="eligibility">
            <Eligibility />
          </section>
          
          <section id="application-process">
            <ApplicationProcess />
          </section>
          
          <section id="regular-entry">
            <RegularEntry />
          </section>
          
          <section id="jee-entry">
            <JEEEntry />
          </section>
          
          <section id="international">
            <International />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admissions;