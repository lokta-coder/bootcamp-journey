"use client";

import { createContext, useContext, useState } from "react"

const FavoriteContext = createContext();

export function FavoriteProvider( {children}){
    const [favorites, setFavorites] = useState([]);

    const isFavorite = (userId) => {
    return favorites.some((fav) => fav.id === userId);
    };

    const toggleFavorite = (user) => {
        if (isFavorite(user.id)){
        setFavorites((prev) => prev.filter((fav) => fav.id !== user.id));
        } else {
            setFavorites((prev) => [...prev, user]);
        }
    };

    return (
        <FavoriteContext.Provider value={{ favorites, isFavorite, toggleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}
   export function useFavorite(){
        const context = useContext(FavoriteContext);
        if(!context){
            throw new console.error("useFavorite harus dipakai di dalam FavoriteProvider");
        }
        return context;
    }