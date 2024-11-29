import { TGG_ColorDirectionBtn_Prop } from "../Config/types";

export const TGG_ColorDirectionBtn: React.FC<TGG_ColorDirectionBtn_Prop> = ({
  btnName,
  currentColorBtn,
  setCurrentColorBtn,
}) => (
  <button
    onClick={() => setCurrentColorBtn(btnName)}
    className={`${
      currentColorBtn === btnName ? "border-b-2 border-black font-bold" : ""
    } tracking-wide text-lg`}
  >
    {btnName}
  </button>
);
