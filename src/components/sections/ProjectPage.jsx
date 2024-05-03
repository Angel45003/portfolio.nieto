import iphoneProject from "../../assets/image/project_iphone.png";
import plantsProject from "../../assets/image/project_plants.png";
import disneyProject from "../../assets/image/project_disney.png";
import GithubIcons from "../../assets/icons/GithubIcon.svg";
import React from "react";
import ButtonIcons from "../ButtonIcons";

function CreateCard({
  Image,
  Title,
  HrefCode,
  Description,
  IconSkill1,
  IconSkill2,
}) {
  return (
    <>
      <a href={HrefCode} target="_blank">
        <div className="md:flex block justify-between items-center md:w-[800px] w-[100%] mb-[20px] border-2 border-slate-200 cursor-pointer hover:bg-slate-50 rounded-lg shadow-sm text-center">
          <div className="">
            <img className="md:w-[300px] w-[600px]" src={Image} alt="" />
          </div>
          <div className="mr-[60px]">
            <h1 className="text-2xl font-semibold">{Title}</h1>
            <p className="w-[400px] opacity-50">{Description}</p>
            <div className="text-center">
              <img src={IconSkill1} alt="" />
              <img src={IconSkill2} alt="" />
            </div>
            <div>
              <ButtonIcons Icons={GithubIcons} Title="Code" Href={HrefCode} />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

function ProjectPage() {
  return (
    <div className="flex justify-center items-center mt-[60px] text-center w-[100%]">
      <div>
        <h1 className="font-semibold text-3xl flex justify-center mb-[60px]">
          <svg
            class="size-7"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
          </svg>
          <span>Projects</span>
        </h1>
        <div>
          <CreateCard
            HrefCode="https://github.com/Angel45003/cactus-landing"
            Title="Cactus Landing"
            Image={plantsProject}
            Description="
            This is a Landing Page of a Cactus, which has no animations, but looks professional."
          />
          <CreateCard
            HrefCode="https://github.com/Angel45003/Disney-Clone"
            Title="Disney+ Clone"
            Image={disneyProject}
            Description="This is a Clone of Disney+ using Reactjs and TailwindCSS, very basic, but good."
          />
          <CreateCard
            HrefCode="https://github.com/Angel45003/iphone-website"
            Title="iPhone Landing"
            Image={iphoneProject}
            Description="
            This is a Clone (my favorite) of the official iPhone 15 page"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
