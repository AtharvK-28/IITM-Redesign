export interface Event {
  date: string;
  time: string;
  title: string;
  link?: string;
  presenter?: string;
  organizer?: string;
}

export interface EventSection {
  upcoming: Event[];
  past: Event[];
}

export interface EventCategory {
  academic: EventSection;
  studentActivity: EventSection;
  workshops: EventSection;
  others: EventSection;
}