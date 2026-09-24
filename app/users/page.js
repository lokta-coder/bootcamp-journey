"use client";
import { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import { Input } from "@/components/ui/input"; // Import Input dari shadcn/ui
export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  //1. menyimpan input pencarian
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  //2. filter user sesuai kata pencarian
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <p className="text-gray-600">
        Loading users...
      </p>
    </main>
  );
}

 if (error) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="font-semibold text-red-700">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      </div>
    </main>
  );
}
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">
          Users
        </h1>

        {/* 3. input Search */}
        <div className="mb-4">
          <Input type="text" placeholder="Cari nama user..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>

        {/* 4. menampilkan nama user sesuai filter */}
       {filteredUsers.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-4">User tidak ditemukan.</p>
        )}
      </div>
    </main>
  );
}