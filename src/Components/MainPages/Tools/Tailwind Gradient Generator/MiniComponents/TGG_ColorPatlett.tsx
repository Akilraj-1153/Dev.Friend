import { useEffect, useState } from "react";
import { TGG_ColorPatlett_prop } from "../Config/types";

export const TGG_ColorPatlett: React.FC<TGG_ColorPatlett_prop> = ({
  Data,
  FromColorFunction,
  ToColorFunction,
  ViaColorFunction,
  FromColorValue,
  ToColorValue,
  ViaColorValue,
  ActiveColorBtnValue,
  FinalGradient,
}) => {
  const [ActiveColor, setActivecolor] = useState("");

  useEffect(() => {
    if (ActiveColorBtnValue === "From Color") setActivecolor(FromColorValue);
    else if (ActiveColorBtnValue === "Via Color") setActivecolor(ViaColorValue);
    else setActivecolor(ToColorValue);
  }, [ActiveColorBtnValue, FinalGradient]);

  const handleColorShade = (shade: string) => {
    if (ActiveColorBtnValue === "From Color") FromColorFunction(shade);
    else if (ActiveColorBtnValue === "Via Color") ViaColorFunction(shade);
    else ToColorFunction(shade);
  };

  return (
    <div>
      {Data.map((colorItem, i) => (
        <div key={i} className="gap-2 flex flex-col">
          <h1 className="capitalize">{colorItem.label}</h1>
          <div className="flex gap-2 flex-wrap px-4 py-1">
            {colorItem.ColorValues.map((shade, j) => (
              <div
                key={j}
                className={`flex w-16 items-center flex-col rounded ${
                  ActiveColor === shade ? "scale-110 border-black border-2" : ""
                }`}
              >
                <div
                  onClick={() => handleColorShade(shade)}
                  className={`h-14 w-14 cursor-pointer border rounded bg-${shade}`}
                />
                <h1 className="text-lg capitalize text-center text-ellipsis overflow-hidden w-14">
                  {i === 0 ? shade : shade.split("-")[1]}
                </h1>
              </div>
            ))}
          </div>
          <hr className="mb-2" />
        </div>
      ))}
    </div>
  );
};
