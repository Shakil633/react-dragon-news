import { GrGoogle } from "react-icons/gr";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className=" text-3xl font-medium">Login</h2>
        <button className="btn btn-outline w-full mt-3">
          <GrGoogle></GrGoogle>
          Login with google
        </button>
        <button className="btn btn-outline w-full mt-3">
          <AiOutlineGithub></AiOutlineGithub>
          Login with Github
        </button>
      </div>
      <div className="p- mb-6 px-4">
        <h2 className=" text-3xl mb-4 font-medium">Find Us On</h2>
        <a className=" flex items-center gap-2 border p-3 rounded-t-lg" href="">
          <BiLogoFacebook></BiLogoFacebook>
          Facebook
        </a>
        <a className=" flex items-center gap-2 border-x p-3" href="">
          <AiOutlineTwitter></AiOutlineTwitter>
          Twitter
        </a>
        <a className=" flex items-center gap-2 border p-3 rounded-b-lg" href="">
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className=" text-3xl font-medium">Q-Zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
