import { createContext, useState } from "react";
// context is a JS object, so we can save it to a const
// the const name begins with a capital letter as the object will contain
// a React component - so we use the component naming convention.
// createContext() accepts an initial value as an arg
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (newFavoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFav: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(newFavoriteMeetup) {
    setUserFavorites((prevFavs) => {
      // concat the newly added favorite to the userFavorites state
      return prevFavs.concat(newFavoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevFavs) => {
      return prevFavs.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFav: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
