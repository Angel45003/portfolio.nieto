import Profile from "../../assets/profile.jpeg";
import React from "react";

function AboutPage() {
  return (
    <div className="md:flex text-center justify-center items-center h-[60vh] w-[100%]">
      <div>
        <img src={Profile} className="rounded-full text-center" alt="" />
        <h1 className="text-3xl font-semibold">About Me.</h1>
      </div>
      <div className="w-[500px] ml-[10px] flex-wrap *:mb-[6px]">
        <p>Hi there 👋!</p>
        <p>My name is Angel Nieto, or I am also known as Nieto.</p>
        <p>
          In 2021 I discovered my passion, I discovered the world of Web
          Development, and that made me more interested in the world of
          Programming.
        </p>
        <p>
          Right now I'm doing big projects for later, like SVGS App, etc....
        </p>
        <p>
          For Privacy reasons, I don't show my face and I show a Dog that I put
          on all my Networks 🤣!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
