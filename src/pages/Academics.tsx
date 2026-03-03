import React from 'react';
import DSHeader from '../components/ds/DSHeader';
import AcademicsNav from '../components/academics/AcademicsNav';
import { 
  ProgramOverview,
  CourseStructure,
  TermDetails,
  AssessmentInfo,
  ExamLocations,
  FeeStructure,
  CourseDetails,
  FoundationLevel,
  DiplomaLevel,
  BScLevel,
  BSLevel
} from '../components/academics';
import SampleCertificates from '../components/academics/SampleCertificates';

const Academics = () => {
  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      <AcademicsNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <section id="overview">
            <ProgramOverview />
          </section>
          
          <section id="course-structure">
            <CourseStructure />
          </section>
          
          <section id="term-details">
            <TermDetails />
          </section>
          
          <section id="assessment-info">
            <AssessmentInfo />
          </section>
          
          <section id="exam-locations">
            <ExamLocations />
          </section>
          
          <section id="fee-structure">
            <FeeStructure />
          </section>
          
          <section id="foundation-level">
            <FoundationLevel />
          </section>
          
          <section id="diploma-level">
            <DiplomaLevel />
          </section>
          
          <section id="bsc-level">
            <BScLevel />
          </section>
          
          <section id="bs-level">
            <BSLevel />
          </section>
          
          <section id="course-details">
            <CourseDetails />
          </section>

          <section id="certificates">
            <SampleCertificates />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academics;