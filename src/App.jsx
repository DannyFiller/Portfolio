import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Skill from "./Components/Skill/Skill.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Project from "./Components/Projects/Project.jsx";
import Info1 from "./Components/Info/Info.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const ref = useRef(null);
  const profileRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center p-2 my-4"
        id="navbar-container"
      >
        {/* <div className='name'>Anh Khoi</div> */}
        <div className="name-nav">Anh Khoi</div>
        <ul className="nav">
          <li className="nav-item p-2 mx-4">
            <a onClick={() => handleScroll(profileRef)}>Profile</a>
          </li>
          <li className="nav-item p-2 mx-4">
            <a onClick={() => handleScroll(skillRef)}>Skill</a>
          </li>
          <li className="nav-item p-2 mx-4">
            <a onClick={() => handleScroll(projectRef)}>Project</a>
          </li>
          <li className="nav-item p-2 mx-4">
            <a onClick={() => handleScroll(contactRef)}>Contact</a>
          </li>
          <li className="nav-item p-2 mx-4">
            <div className="github-mobile">
              <a href="https://github.com/DannyFiller">My GitHub</a>
            </div>
          </li>
        </ul>
        <div className="github">
          <a href="https://github.com/DannyFiller">My GitHub</a>
        </div>
      </div>
      ;{/* <Navbar></Navbar> */}
      <section ref={profileRef}>
        <Profile />
      </section>
      <section ref={skillRef}>
        <Info1 />
        <Skill />
      </section>
      <section ref={projectRef}>
        <Project />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
