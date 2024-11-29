import logo from "../../Common/Assets/Logo/Logo.png";
import { useRecoilState } from "recoil";
import { MenuStatus } from "../Config/Atom";
import NavMenu from "../MiniComponents/NavMenu";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useRecoilState(MenuStatus);
  const navigate = useNavigate();

  return (
    <div className="NavBar p-2 flex flex-col gap-2 ">
      <div className="flex justify-between">
        <div className="Logo">
          <img src={logo} className="h-10 w-auto"></img>
        </div>
        <div className="NavBtns  gap-5 hidden md:flex">
          <button
            onClick={() => navigate("/")}
            className="text-lg tracking-wide"
          >
            Home
          </button>
          <button className="text-lg tracking-wide">Community</button>
          <button className="text-lg tracking-wide">Blog</button>
          <button className="text-lg tracking-wide">About</button>
          <button
            onClick={() => setIsMenuActive(!isMenuActive)}
            className="text-lg tracking-wide px-4 rounded-full bg-white text-black"
          >
            Tools
          </button>
        </div>
        <button
          className="md:hidden mr-2"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          {isMenuActive ? (
            <FaCircleArrowUp size={30} />
          ) : (
            <FaCircleArrowDown size={30} />
          )}
        </button>
      </div>
      {isMenuActive && (
        <div className="  overflow-y-auto max-h-[600px] flex justify-center md:justify-end w-full rounded absolute top-14 right-0 md:right-2  ">
          <div className=" w-full md:max-w-sm rounded bg-white text-black border-2 shadow">
            <NavMenu />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
