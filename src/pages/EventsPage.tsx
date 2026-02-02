import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { events } from "@/data/events";

const sortedEvents = [...events].sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
          College Events
        </h1>
        
        <div className="space-y-4">
          {sortedEvents.map((event) => (
            <Link
              to={`/event/${event.id}`}
              key={event.id}
              className="block bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold text-card-foreground mb-3">
                {event.title}
              </h2>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{event.venue}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
