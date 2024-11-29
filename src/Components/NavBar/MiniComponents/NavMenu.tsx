import { ToolsName } from "../Config/Data";
import { NavMenuButton } from "./NavMenuButton";

const NavMenu = () => {
  return (
    <div className="CustomScrollBar w-full h-full overflow-y-auto rounded overflow-x-hidden shadow-inner">
      <div className="flex flex-col gap-2 p-2 ">
        {ToolsName.map((tool, index) => (
          <NavMenuButton key={index} BtnName={tool.btnName} to={tool.to} />
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
