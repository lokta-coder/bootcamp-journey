
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <div>
//       <Navbar />
//       <h1>Menu</h1>
//       <Footer/>     
//     </div>
//   );
// }

"use client";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Counter</h1>
      <p>Jumlah: {count}</p>
      <div className="flex gap-4">
        <button onClick={() => setCount(count - 1)}>Kurang</button>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </main>
  );
}

