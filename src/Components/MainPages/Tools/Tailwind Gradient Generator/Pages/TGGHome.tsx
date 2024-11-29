import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  gradientMenu,
  vaiMenu,
  tailwindColors,
  tailwindGradientsData,
} from "../Config/Data";
import { TGG_GradientOutPut } from "../MiniComponents/TGG_GradientOutPut";
import { TGG_ColorDirectionBtn } from "../MiniComponents/TGG_ColorDirectionBtn";
import { TGG_InputMenu } from "../MiniComponents/TGG_InputMenu";
import { TGG_ColorPatlett } from "../MiniComponents/TGG_ColorPatlett";

const TGGHome: React.FC = () => {
  const [DirectionLabel, setDirectionLabel] = useState(gradientMenu[0].label);
  const [DirectionClass, setDirectionClass] = useState<string | boolean>(
    gradientMenu[0].class
  );
  const [ShowDirectionMenu, setShowDirectionMenu] = useState(false);

  const [ViaLabel, setViaLabel] = useState(vaiMenu[0].label);
  const [ViaClass, setViaClass] = useState<string | boolean>(vaiMenu[0].class);
  const [ShowViaMenu, setShowViaMenu] = useState(false);

  const [currentColorBtn, setCurrentColorBtn] = useState("From Color");
  const [fromColor, setFromColor] = useState("blue-900");
  const [toColor, setToColor] = useState("green-600");
  const [viaColor, setViaColor] = useState("gray-700");
  const [colorValue, setColorValue] = useState("");

  const handleRandom = () => {
    const randomDirectionIndex = Math.floor(
      Math.random() * gradientMenu.length
    );
    const randomFromColorIndex =
      Math.floor(Math.random() * (tailwindColors.length - 1)) + 1;
    const randomToColorIndex =
      Math.floor(Math.random() * (tailwindColors.length - 1)) + 1;
    const randomViaColorIndex =
      Math.floor(Math.random() * (tailwindColors.length - 1)) + 1;

    const randomFromShadeIndex = Math.floor(Math.random() * 10);
    const randomToShadeIndex = Math.floor(Math.random() * 10);
    const randomViaShadeIndex = Math.floor(Math.random() * 10);

    setDirectionLabel(gradientMenu[randomDirectionIndex].label);
    setDirectionClass(gradientMenu[randomDirectionIndex].class);
    setFromColor(
      tailwindColors[randomFromColorIndex].ColorValues[randomFromShadeIndex]
    );
    setViaColor(
      tailwindColors[randomViaColorIndex].ColorValues[randomViaShadeIndex]
    );
    setToColor(
      tailwindColors[randomToColorIndex].ColorValues[randomToShadeIndex]
    );
  };

  useEffect(() => {
    const finalGradient =
      `bg-gradient-to-${DirectionClass} from-${fromColor}` +
      (ViaClass ? ` via-${viaColor}` : "") +
      ` to-${toColor}`;
    setColorValue(finalGradient);
  }, [DirectionClass, fromColor, viaColor, toColor, ViaClass]);

  return (
    <div className="flex flex-col w-full">
      <header className="flex flex-col items-center py-10 px-4 text-white rounded-b-lg bg-[#141414]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
            Tailwind Gradient Generator
          </h1>
        </div>
        <p className="mt-4 text-base lg:text-lg text-center px-4 max-w-2xl leading-relaxed">
          Use our Tailwind Gradient Generator to create stunning gradients with
          ease. Copy the code and incorporate it into your project.
        </p>
      </header>

      <main className="p-8 bg-gray-50 flex-grow text-black rounded-t w-full">
        <div className="GradientSelector overflow-hidden w-full lg:w-[90%] xl:w-[70%] mx-auto rounded gap-4 flex flex-col">
          <TGG_GradientOutPut
            GradientClass={colorValue}
            RandomFunction={handleRandom}
          />

          <div className="Inputs flex flex-col md:flex-row gap-6">
            <div className="h-80 w-full md:w-1/2 rounded">
              <div
                className={`GradientBox h-full w-full rounded ${colorValue}`}
              />
            </div>

            <div className="GradientInputs h-80 w-full md:w-1/2 text-black flex flex-col gap-4">
              <div className="Inputs flex w-full gap-4">
                <TGG_InputMenu
                  BtnTitle="Direction"
                  ToogleFunction={setShowDirectionMenu}
                  ToogleValue={ShowDirectionMenu}
                  LableFunction={setDirectionLabel}
                  LableValue={DirectionLabel}
                  Data={gradientMenu}
                  ClassFunction={setDirectionClass}
                  ClassValue={DirectionClass}
                />
                <TGG_InputMenu
                  BtnTitle="Via"
                  ToogleFunction={setShowViaMenu}
                  ToogleValue={ShowViaMenu}
                  LableFunction={setViaLabel}
                  LableValue={ViaLabel}
                  Data={vaiMenu}
                  ClassFunction={setViaClass}
                  ClassValue={ViaClass}
                  ActiveColorBtnFunction={setCurrentColorBtn}
                />
              </div>

              <div className="flex gap-4">
                <TGG_ColorDirectionBtn
                  setCurrentColorBtn={setCurrentColorBtn}
                  currentColorBtn={currentColorBtn}
                  btnName="From Color"
                />
                {ViaClass && (
                  <TGG_ColorDirectionBtn
                    setCurrentColorBtn={setCurrentColorBtn}
                    currentColorBtn={currentColorBtn}
                    btnName="Via Color"
                  />
                )}
                <TGG_ColorDirectionBtn
                  setCurrentColorBtn={setCurrentColorBtn}
                  currentColorBtn={currentColorBtn}
                  btnName="To Color"
                />
              </div>

              <div className="ColorPatlett mt-4 overflow-y-auto">
                <TGG_ColorPatlett
                  Data={tailwindColors}
                  FromColorFunction={setFromColor}
                  ToColorFunction={setToColor}
                  ViaColorFunction={setViaColor}
                  FromColorValue={fromColor}
                  ToColorValue={toColor}
                  ViaColorValue={viaColor}
                  ActiveColorBtnFunction={setCurrentColorBtn}
                  ActiveColorBtnValue={currentColorBtn}
                  FinalGradient={colorValue}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="RandomGradients mt-10 w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {tailwindGradientsData.map((gradient, i) => (
              <div key={i} className="flex flex-col gap-4 mx-auto w-full pb-10">
                <div
                  className={`${gradient.class} h-48 w-full rounded border`}
                />
                <TGG_GradientOutPut GradientClass={gradient.class} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Toaster position="bottom-right" />
    </div>
  );
};

export default TGGHome;
