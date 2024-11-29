import { FaDice } from "react-icons/fa";
import { IoIosCopy } from "react-icons/io";
import toast from "react-hot-toast";
import { TGG_GradientOutPut_Prop } from "../Config/types";

export const TGG_GradientOutPut: React.FC<TGG_GradientOutPut_Prop> = ({
  GradientClass,
  RandomFunction,
}) => {
  const handleLinkCopy = (link: string) => {
    toast.success(`Link Copied Successfully \n${link}`);
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="flex gap-6 rounded w-full flex-col md:flex-row">
      <div className="text-black  flex items-center justify-center border w-full text-center rounded text-ellipsis">
        <input
          readOnly
          className=" w-full text-ellipsis p-2"
          value={GradientClass}
        ></input>
      </div>
      <div className="flex gap-2 w-full">
        <button
          onClick={() => handleLinkCopy(GradientClass)}
          className="flex items-center justify-center gap-2 w-full  p-2 rounded bg-black text-white"
        >
          <IoIosCopy size={20} />
          <span>Copy</span>
        </button>
        {RandomFunction && (
          <button
            onClick={RandomFunction}
            className="flex items-center justify-center gap-2 w-full p-2 rounded bg-black text-white"
          >
            <FaDice size={20} />
            <span>Random</span>
          </button>
        )}
      </div>
    </div>
  );
};
