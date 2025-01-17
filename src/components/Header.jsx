import BackArrow from "./BackArrow";

export default function Header({ page }) {
  return (
    <>
      <header>
        {page == "trip" && <BackArrow />}
        <h2>BoolTrips!</h2>
        <span className="container-icon">
          <i class="fa-solid fa-lg fa-user"></i>
        </span>
      </header>
    </>
  );
}
