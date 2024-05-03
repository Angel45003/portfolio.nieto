import React from "react";

function ButtonIcons({ Icons, Title, Href }) {
  return (
    <a
      href={Href}
      className="flex justify-center items-center w-fit bg-zinc-900 text-white rounded-lg p-[2px] cursor-pointer hover:bg-zinc-950"
    >
      <img className="w-[30px] grayscale-[100%]" src={Icons} alt="" />
      <span className="pl-[10px]">{Title}</span>
    </a>
  );
}

export default ButtonIcons;
