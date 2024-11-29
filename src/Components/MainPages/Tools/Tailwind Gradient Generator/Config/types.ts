export type TGG_GradientOutPut_Prop = {
  GradientClass: string;
  RandomFunction?: () => void;
};
export type TGG_InputMenu_prop = {
  BtnTitle: string;
  ToogleFunction: (value: boolean) => void;
  ToogleValue: boolean;
  LableFunction: (value: string) => void;
  LableValue: string;
  Data: Array<{ label: string; class: string | boolean }>;
  ClassFunction: (value: string | boolean) => void;
  ClassValue: string | boolean;
  ActiveColorBtnFunction?: (value: string) => void;
};

export type TGG_ColorPatlett_prop = {
  Data: Array<{ label: string; ColorValues: string[] }>;
  FromColorFunction: (value: string) => void;
  ToColorFunction: (value: string) => void;
  ViaColorFunction: (value: string) => void;
  FromColorValue: string;
  ToColorValue: string;
  ViaColorValue: string;
  ActiveColorBtnFunction: (value: string) => void;
  ActiveColorBtnValue: string;
  FinalGradient: string;
};

export type TGG_ColorDirectionBtn_Prop = {
  btnName: string;
  currentColorBtn: string;
  setCurrentColorBtn: (btnName: string) => void;
};
