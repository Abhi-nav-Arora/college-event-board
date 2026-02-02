import { Calendar, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "March 15, 2026",
    venue: "Main Auditorium, Block A",
  },
  {
    id: 2,
    title: "Cultural Fest: Spring Beats",
    date: "March 22, 2026",
    venue: "Open Air Theatre",
  },
  {
    id: 3,
    title: "Career Fair 2026",
    date: "April 5, 2026",
    venue: "Convention Center, Hall 1",
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
          College Events
        </h1>
        
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-card-foreground mb-3">
                {event.title}
              </h2>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{event.venue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
