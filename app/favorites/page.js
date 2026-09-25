"use client";

import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Favorite Users</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">Belum ada user favorite.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </main>
  );
}