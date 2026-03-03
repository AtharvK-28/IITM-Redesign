import { Event } from '../../types/events';

interface EventListProps {
  events: Event[];
  emptyMessage?: string;
}

const EventList = ({ events, emptyMessage = 'No events at the moment.' }: EventListProps) => {
  if (events.length === 0) {
    return <p className="text-gray-500 italic">{emptyMessage}</p>;
  }

  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <div key={index} className="bg-[#FFF8E7] p-4 rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <p className="text-[#800020] font-medium">{event.date}</p>
            <p className="text-gray-600">{event.time}</p>
          </div>
          <h3 className="font-medium mb-2">
            {event.link ? (
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#800020] hover:text-[#B8860B]"
              >
                {event.title}
              </a>
            ) : (
              event.title
            )}
          </h3>
          {event.presenter && <p className="text-gray-600">By {event.presenter}</p>}
          {event.organizer && <p className="text-gray-600">{event.organizer}</p>}
        </div>
      ))}
    </div>
  );
};

export default EventList;