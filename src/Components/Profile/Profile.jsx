import Lottie from "react-lottie";
import "./Profile.css";
import animation from "../../assets/lotties/animation.json";

const Profile = () => {
  return (
    <div id="container-profile">
      {/* <div id="lottieBackground"></div> */}
      <div className="img-container">
        {/* <img
          className="img-wrapper"
          src="https://th.bing.com/th/id/R.c40ec7f46c93ed9dbcba2c6f982986f9?rik=JpmbD23mxP332w&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2f90113-Beautiful-Waterfall.jpg&ehk=Q0YlkUWuf3%2fK%2bpZwiZmQ324Hyhe%2bb4lhdYaShARqeWA%3d&risl=&pid=ImgRaw&r=0"
        ></img> */}
        <div id="lottie1">
          <Lottie
            options={{ animationData: animation }}
            speed={0.5}
            isClickToPauseDisabled
          />
        </div>
      </div>

      <div className="name-container">
        <div className="name">Xin chào, tui là Anh Khôi</div>
        {/* <div className="intro-1">Software Engineer</div> */}
      </div>
    </div>
  );
};

export default Profile;
