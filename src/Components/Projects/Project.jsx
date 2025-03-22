import "./Project.css";
import ReactPlayer from "react-player";
const ProjectList = () => {
  return (
    <>
      <div className="project-title">Projects</div>
      <div className="container-list">
        <div className="project-item">
          <img className="img-wrappepr" src="./images/shoestore.jpg"></img>
          <div className="body-title">App Mobile Bán Giày</div>
          <div className="body-item">
            <div className="body-item-1">
              <a href="https://github.com/DannyFiller/Step_Up.git">
                GitHub Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img className="img-wrappepr" src="./images/bookstore.jpg"></img>
          <div className="body-title">App Mobile Bán Sách</div>
          <div className="body-item">
            <div className="body-item-1">
              <a href="https://github.com/DannyFiller/DoAnAppBanSach.git">
                GitHub Code
              </a>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img className="img-wrappepr" src="./images/CarRent.png"></img>
          <div className="body-title">App Thuê Xe</div>
          <div className="body-item">
            <div className="body-item-1">
              <a href="https://github.com/DannyFiller/App_thuexe.git">
                GitHub Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
