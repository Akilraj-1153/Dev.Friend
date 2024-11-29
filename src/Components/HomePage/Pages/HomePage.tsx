import { Routes, Route } from "react-router-dom";
import Home from "../../MainPages/Home/Pages/Home";
import TGGHome from "../../MainPages/Tools/Tailwind Gradient Generator/Pages/TGGHome";
import ScrollToTop from "../MiniComponents/ScrollToTop";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 CustomScrollBar">
      <main className="flex-grow bg-gray-50 text-black shadow-md w-full">
        <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/tools/TailwindGradientGenerator"
            element={<TGGHome />}
          />
        </Routes>
      </main>

      <footer className="bg-blue-600 text-white py-6 text-center">
        <p className="text-sm lg:text-base">
          &copy; 2024 Dev Friend. All rights reserved.
        </p>
        <p className="mt-3 text-sm lg:text-base">
          Follow us on{" "}
          <a
            href="#"
            className="text-blue-200 underline hover:text-white transition"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-200 underline hover:text-white transition"
          >
            LinkedIn
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
