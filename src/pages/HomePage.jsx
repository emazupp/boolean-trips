import Card from "../components/Card";
import { trips } from "../data/db";

export default function HomePage() {
  return (
    <main className="container px-4 mt-4">
      <h2 className="mb-4">I tuoi viaggi attivi</h2>
      <div className="row row-cols-auto">
        {trips.map((trip) => {
          return <Card key={trip.id} trip={trip}></Card>;
        })}
      </div>
    </main>
  );
}
