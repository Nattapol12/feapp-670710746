// function Navbar() {
//   return (
//     <nav className="flex items-center justify-between bg-slate-900 px-6 py-4">
//       <span className="text-xl font-bold text-white">
//         🎬 Movie<span className="text-cyan-400">Hub</span>
//       </span>
//       <div className="hidden gap-6 text-slate-300 md:flex">
//         <a href="#" className="hover:text-cyan-400 transition">หน้าแรก</a>
//         <a href="#" className="hover:text-cyan-400 transition">หนังใหม่</a>
//         <a href="#" className="hover:text-cyan-400 transition">รายการโปรด</a>
//       </div>
//       <button className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold
//                          text-white hover:bg-cyan-700 transition">
//         เข้าสู่ระบบ
//       </button>
//     </nav>
//   );
// }

// export default Navbar;

import { NavLink } from 'react-router-dom';

const linkClass = ({ isActive }) =>
  isActive
    ? 'text-cyan-400 font-semibold underline underline-offset-4'
    : 'text-slate-300 hover:text-cyan-400 transition';

function Navbar() {
  return (
    <nav className="flex items-center bg-slate-900 px-6 py-4">

      {/* Logo ซ้าย */}
      <span className="text-xl font-bold text-white">
        🎬 Movie<span className="text-cyan-400">Hub</span>
      </span>

      {/* เมนูตรงกลาง */}
      <div className="mx-auto flex gap-8">
        <NavLink to="/" className={linkClass}>
          หน้าแรก
        </NavLink>

        <NavLink to="/movies" className={linkClass}>
          หนังทั้งหมด
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          เกี่ยวกับเรา
        </NavLink>
      </div>

      {/* ปุ่มเข้าสู่ระบบขวา */}
      <button
        className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-white
                   transition hover:bg-cyan-600"
      >
        เข้าสู่ระบบ
      </button>

    </nav>
  );
}

export default Navbar;
