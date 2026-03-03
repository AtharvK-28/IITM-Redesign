import DSHeader from '../components/ds/DSHeader';
import EventSection from '../components/events/EventSection';
import { events } from '../config/events';

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <DSHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-[#800020] mb-8">Events</h1>
        <p className="text-gray-700 mb-12">
          Links to view all upcoming and past live events / lectures / talks / interviews related to our program.
        </p>

        <EventSection title="Academic Events" section={events.academic} />
        <EventSection title="Student Activity Events" section={events.studentActivity} />
        <EventSection title="Workshops" section={events.workshops} />
        <EventSection title="Others" section={events.others} />
      </div>
    </div>
  );
};

export default Events;