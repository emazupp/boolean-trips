import { Link } from "react-router-dom";

export default function Card({ trip }) {
  return (
    <>
      <div className="col m-auto mb-3 mb-lg-5">
        <div className="card">
          <img src={trip.img} className="card-img-top" alt={trip.id} />
          <div className="card-body">
            <h5 className="card-title">{trip.destinazione}</h5>
            {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
            <Link to={`/details/${trip.id}`} className="btn btn-primary">
              Vedi dettaglio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
