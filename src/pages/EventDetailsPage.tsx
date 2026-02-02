import { useParams } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-foreground">Event Details</h1>
        <p className="mt-4 text-muted-foreground">Event ID: {id}</p>
      </div>
    </div>
  );
};

export default EventDetailsPage;
