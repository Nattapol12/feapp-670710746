import React from "react";
import { Link } from "react-router-dom";
import { movies } from "../data";
import MovieCard from "../Components/MovieCard";
import MovieGallery from "../Components/MovieGallery";

function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-slate-800">🏠 หน้าแรก</h1>
      <p className="mt-2 text-slate-500">ยินดีต้อนรับสู่ MovieHub</p>
      <h2 className="mt-8 text-2xl form">
      หนังแนะนำ
      </h2>
      <div className="mx-auto mt-8 max-w-5xl">
  {movies.slice(0, 3).map((movie) => (
    <MovieCard
      key={movie.id}
      title={movie.title}
      year={movie.year}
    />
  ))}
  <h2 className="mt-8 text-2xl font-bold text-slate-800">ดูหนังเพิ่มเติม
      <div className="mt-6">
    <MovieGallery />
  </div>
  </h2>
</div>
    </div>
  );
}

export default Home;