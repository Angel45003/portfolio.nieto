import React from "react";
import Profile from "../../assets/profile.jpeg";
import ButtonIcons from "../ButtonIcons";
import GithubIcon from "../../assets/icons/GithubIcon.svg";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center h-[80vh] w-[100%]">
        <div>
          <img className="rounded-full shadow-md" src={Profile} alt="" />
        </div>
        <h1 className="text-3xl font-semibold">
          I'm <span>Angel Nieto.</span>
        </h1>
        <p className="p-[6px] opacity-50">I'm Developer Front-End.</p>
        <div>
          <ButtonIcons
            Icons={GithubIcon}
            Title="GitHub"
            Href="https://github.com/Angel45003"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
