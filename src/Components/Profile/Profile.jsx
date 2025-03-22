import "./Profile.css";
const Profile = () => {
  return (
    <div id="container-profile">
      <div className="container d-flex align-items-center justify-content-center m-4 p-4 w-50">
        <img
          className="img-wrapper"
          src="https://th.bing.com/th/id/R.c40ec7f46c93ed9dbcba2c6f982986f9?rik=JpmbD23mxP332w&riu=http%3a%2f%2fwww.lovethispic.com%2fuploaded_images%2f90113-Beautiful-Waterfall.jpg&ehk=Q0YlkUWuf3%2fK%2bpZwiZmQ324Hyhe%2bb4lhdYaShARqeWA%3d&risl=&pid=ImgRaw&r=0"
        ></img>
      </div>

      <div className="container d-flex flex-column align-items-center justify-content-center m-4 p-4 w-50">
        <div className="name">Anh Khoi</div>
        <div className="intro-1">Software Engineer</div>
      </div>
    </div>
  );
};

export default Profile;
