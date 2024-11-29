import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { TGG_InputMenu_prop } from "../Config/types";


export const TGG_InputMenu: React.FC<TGG_InputMenu_prop> = ({
  BtnTitle,
  ToogleFunction,
  ToogleValue,
  LableFunction,
  LableValue,
  Data,
  ClassFunction,
  ActiveColorBtnFunction,
}) => (
  <div className="w-1/2">
    <h1 className="tracking-wide font-bold text-lg">{BtnTitle}</h1>
    <div className="relative gap-2 flex flex-col">
      <button
        onClick={() => ToogleFunction(!ToogleValue)}
        className="w-full p-2 rounded  text-start cursor-pointer border border-black bg-transparent flex items-center justify-between"
      >
        <span className="text-ellipsis line-clamp-1">{LableValue}</span>
        <span>
          {ToogleValue ? (
            <RiArrowDropUpLine size={25} />
          ) : (
            <RiArrowDropDownLine size={25} />
          )}
        </span>
      </button>
      {ToogleValue && (
        <div className="absolute z-40 flex-col max-h-36 overflow-y-auto border rounded items-center mt-12 w-full bg-white shadow-2xl border-black p-2 flex gap-2">
          {Data.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                LableFunction(item.label);
                ClassFunction(item.class);
                ToogleFunction(false);
                if (BtnTitle === "Via") {
                  if (item.class) {
                    ActiveColorBtnFunction?.("Via Color");
                  } else {
                    ActiveColorBtnFunction?.("From Color");
                  }
                }
              }}
              className={`w-full  p-2 rounded text-start cursor-pointer ${
                LableValue == item.label ? "bg-black text-white" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  </div>
);