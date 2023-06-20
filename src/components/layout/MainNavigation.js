import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const favTotals = favoritesCtx.totalFavorites;
  return (
    <header className={classes.header}>
      <div className={classes.logo}>{"React Meetups"}</div>
      <nav>
        <ul>
          <li>
            <Link to="/">{"All Meetups"}</Link>
          </li>
          <li>
            <Link to="/new-meetup">{"Add New Meetup"}</Link>
          </li>
          <li>
            <Link to="/favorites">
              {"My Favorites"}
              {favTotals > 0 && (
                <span className={classes.badge}>{favTotals}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
