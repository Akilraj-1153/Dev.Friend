import NavBar from "./Components/NavBar/Pages/NavBar";
import { useRecoilState } from "recoil";
import { Path } from "./Components/NavBar/Config/Atom";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage/Pages/HomePage";

const App = () => {
  const [, setCurrentPath] = useRecoilState(Path);

  const NavPath = useLocation();

  useEffect(() => {
    setCurrentPath(NavPath.pathname);
  }, [NavPath]);

  return (
    <div className=" bg-[#141414] text-white font-Alice">
      <div className="NavBar sticky top-0 bg-[#141414] z-40 rounded-b-lg">
        <NavBar></NavBar>
      </div>
      <div className="MainContent w-full ">
        <Routes>
          <Route path="/*" element={<HomePage></HomePage>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
