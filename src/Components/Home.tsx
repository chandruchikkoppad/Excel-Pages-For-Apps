import { Link, Outlet } from "react-router-dom";
import "../index.css";
import Image from "../aseets/Image/New-Excel-Blank-Workbook.png";
import Img from "../aseets/Image/View.jpg";
const Home = () => {
  return (
    <div className="flex h-[full] bg-[#217246] gap-6">
      <div className="w-[30%] h-screen flex-cols items-center justify-center items-center gap-14 ">
        <div className="text-3xl font-bold mt-60 ml-7 text-white">
          Welcome to the Excel World!
        </div>
      </div>
      <div className="home w-[70%] flex flex-row items-center justify-center bg-[#F0F3FF]">
        <Link to="/Sheet">
          <img src={Image} alt="Create BlankWorkBook" />
        </Link>
        <Link to="/load">
          <img src={Img} alt="" />
        </Link>
      </div>
    </div>
  );
};
export default Home;
