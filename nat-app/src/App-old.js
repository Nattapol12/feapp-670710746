import React from "react";
// import Header from "./components/Header";
// import MovieList from "./components/MovieList";
// import Greeting from "./components/Greeting";
// import Card from "./components/Card";
// import Footer from "./components/Footer";
 import ProfileCard from "./components/ProfileCard";
// import './App.css';
import Button from "./components/Button";

const members = [
  { id: 1, name: 'ตั้ม โซเยอร์', nickname: 'ตั้ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  { id: 2, name: 'แหม่ม สวยมาก', nickname: 'แหม่ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 3, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
];

// function App() {
//   return (
//     <div className="container">
//       <h1>สมาชิกกลุ่มของเรา</h1>
//       <div className="card-row">
//         {members.map((m) => (
//           <ProfileCard
//             key={m.id}
//             name={m.name}
//             nickname={m.nickname}
//             major={m.major}
//             favorites={m.favorites}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-slate-800 px-6 py-4">
        <span className="text-xl font-bold text-white">
          🎬 MovieHub
        </span>

        <div className="flex gap-6 text-slate-300">
          <a href="#">หน้าแรก</a>
          <a href="#">หนังใหม่</a>
          <a href="#">รายการโปรด</a>
        </div>
      </nav>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl bg-white p-4 shadow">
          การ์ด 1
        </div>
        <div className="rounded-xl bg-white p-4 shadow">
          การ์ด 2
        </div>
        <div className="rounded-xl bg-white p-4 shadow">
          การ์ด 3
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-slate-800">
          MovieHub
        </h1>
        <p className="text-lg text-slate-500">
          รวมหนังดีที่คุณห้ามพลาด
        </p>
        <p className="text-sm font-semibold uppercase text-cyan-600">
          since 2026
        </p>
      </div>

      {/* Movie Card */}
      <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-slate-800">
          Interstellar
        </h2>

        <p className="mt-2 text-slate-500">
          การเดินทางข้ามกาแล็กซีเพื่อหาบ้านใหม่ให้มนุษยชาติ
        </p>

        <span className="mt-4 inline-block rounded-full bg-cyan-50 px-3 py-1 text-sm font-semibold text-cyan-700">
          Sci-Fi
        </span>
      </div>
     <div className="flex gap-3 p-6">
  <Button>บันทึก</Button>
  <Button variant="danger">ลบ</Button>
  <Button variant="ghost">ยกเลิก</Button>
</div>
    </div>
  );
}




export default App;