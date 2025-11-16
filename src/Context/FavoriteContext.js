import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext({
  favorites: {},
  addFavorite: () => {},
  removeFavorite: () => {},
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export function FavoriteProvider({ children }) {
  // Initialize from localStorage => practice purposes only
  // Ideally, this would be handled by a backend service
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored).recipes || {} : {};
  });

  // Sync to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify({ recipes: favorites }));
  }, [favorites]);

  const addFavorite = (recipeId, recipeData) => {
    setFavorites((prev) => ({
      ...prev,
      [recipeId]: recipeData,
    }));
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prev) => {
      const newFavorites = { ...prev };
      delete newFavorites[recipeId];
      return newFavorites;
    });
  };

  const toggleFavorite = (recipeId, recipeData) => {
    if (isFavorite(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId, recipeData);
    }
  };

  const isFavorite = (recipeId) => Object.hasOwn(favorites, recipeId);

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
