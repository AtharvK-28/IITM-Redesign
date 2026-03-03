import { EventSection as EventSectionType } from '../../types/events';
import EventList from './EventList';

interface EventSectionProps {
  title: string;
  section: EventSectionType;
}

const EventSection = ({ title, section }: EventSectionProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-[#800020] mb-6">{title}</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <EventList events={section.upcoming} />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Past Events</h3>
          <EventList events={section.past} />
        </div>
      </div>
    </div>
  );
};

export default EventSection;