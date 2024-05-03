import React from "react";

function SkillsObject({ Image, Title }) {
  return (
    <div className="bg-zinc-900 text-white text-center w-fit p-[10px] ml-[60px] mb-[60px] rounded-lg flex  justify-center flex-col cursor-pointer">
      <div className=" opacity-0 hover:translate-y-[-30px] hover:opacity-100 transition-all duration-100 w-[60px] h-[120px] absolute">
        <div className="absolute  translate-x-[-6px] bg-zinc-900 w-fit p-[6px] rounded-full mb-[6px]">
          <h1>{Title}</h1>
        </div>
      </div>

      <img className="w-[50px] m-0 m-auto" src={Image} alt="" />
    </div>
  );
}

export default SkillsObject;
