import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";
import './App.css';

const members = [
  { id: 1, name: 'ตั้ม โซเยอร์', nickname: 'ตั้ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
  { id: 2, name: 'แหม่ม สวยมาก', nickname: 'แหม่ม',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
  { id: 3, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;