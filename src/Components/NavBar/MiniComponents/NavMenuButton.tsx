import { useNavigate } from "react-router-dom";
import { MenuStatus, Path } from "../Config/Atom";
import { useRecoilState } from "recoil";
import { NavMenuButtonProp } from "../Config/types";

export const NavMenuButton = ({ BtnName, to }: NavMenuButtonProp) => {
  const [isMenuActive, setIsMenuActive] = useRecoilState(MenuStatus);
  const [currentPath, setCurrentPath] = useRecoilState(Path);

  const navigate = useNavigate();

  const handleMenuBtn = () => {
    navigate(to);
    setIsMenuActive(!isMenuActive);
    setCurrentPath(to);
  };

  return (
    <button
      onClick={handleMenuBtn}
      className={`text-start text-truncate whitespace-nowrap tracking-wide p-2 rounded w-full hover:bg-black hover:text-white ${
        currentPath === to ? "bg-black text-white" : ""
      }`}
    >
      {BtnName}
    </button>
  );
};
