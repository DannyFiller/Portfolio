import "./Navbar.css";
import { useRef } from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="container justify-content-center p-2 my-4"
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
    </>
  );
};

export default Navbar;
