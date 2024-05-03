import React from "react";
import htmlIcon from "../../assets/icons/Html.svg";
import css3Icon from "../../assets/icons/Css.svg";
import javascriptlIcon from "../../assets/icons/Javascript.svg";
import laravelIcon from "../../assets/icons/Laravel.svg";
import TailwindcssIcon from "../../assets/icons/Tailwindcss.svg";
import reactIcon from "../../assets/icons/Reactjs.svg";
import nodejsIcon from "../../assets/icons/Nodejs.svg";
import astroIcon from "../../assets/icons/Astro.svg";
import SkillsObject from "../SkillsObject";

function SkillsPage() {
  return (
    <>
      <div className="w-[100%] bg-green-200 h-[90vh] flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold mb-[60px]">Skills</h1>
        <div>
          <div className="grid grid-cols-3">
            <SkillsObject Image={htmlIcon} Title="HTML5" />
            <SkillsObject Image={css3Icon} Title="CSS3" />
            <SkillsObject Image={javascriptlIcon} Title="Javascript" />
            <SkillsObject Image={reactIcon} Title="Reactjs" />
            <SkillsObject Image={TailwindcssIcon} Title="TailwindCSS" />
            <SkillsObject Image={nodejsIcon} Title="Nodejs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillsPage;
