import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { Link } from "react-router-dom";
const title = "My Favorites";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <h3>
        {"You do not have any favorites, "}{" "}
        <Link to="/">{"add some now!"}</Link>
      </h3>
    );
  } else {
    content = (
      <div>
        <MeetupList meetups={favoritesCtx.favorites} />
        <h4>
          {"That's your lot, do you want to "}
          <Link to="/">{"Add More?"}</Link>
        </h4>
      </div>
    );
  }

  return (
    <section>
      <h1>{title}</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
