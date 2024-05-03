import React from "react";

function Navbar() {
  return (
    <header className="text-white sticky top-0 bg-zinc-900 p-[6px] w-[100%] z-10">
      <nav>
        <ul className="flex justify-around items-center">
          <li>
            <p
              href="#"
              className="w-[30px] h-[30px] text-2xl flex justify-center items-center rounded-full p-[6px] border-2"
            >
              A
            </p>
          </li>
          <div className="flex *:p-[6px]">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Proyectos</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
