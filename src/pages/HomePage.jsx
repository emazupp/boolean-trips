import Card from "../components/Card";
import Header from "../components/Header";
import { trips } from "../data/db";

export default function HomePage() {
  return (
    <>
      <Header page="home" />
      <main className="container px-4 mt-4 mb-10 h-100">
        <h1 className="mb-1 text-center fw-bold">I TUOI VIAGGI ATTIVI</h1>
        <div className="card-trip-container">
          {trips.map((trip) => {
            return <Card key={trip.id} trip={trip}></Card>;
          })}
        </div>
      </main>
    </>
  );
}
