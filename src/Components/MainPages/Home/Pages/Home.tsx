import logo from "../../../Common/Assets/Logo/Logo.png";

const Home = () => {
  return (
    <div className=" flex flex-col overflow-x-hidden ">
      <header className="flex flex-col items-center py-10 px-4 text-white rounded-b-lg bg-[#141414]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center">
            Welcome to
          </h1>
          <img src={logo} className="h-20 lg:h-28" alt="Dev Friend Logo" />
        </div>
        {/* <h1 className="text-3xl lg:text-4xl font-bold text-center px-5">
          {ComponentTitle}
        </h1> */}
        <p className="mt-4 text-base lg:text-lg text-center px-4 max-w-2xl leading-relaxed">
          "Your one-stop platform for Developer Tools and Resources.Empowering
          developers with the best tools and resources to enhance productivity
          and streamline workflows."
        </p>
      </header>

      <main className=" bg-gray-50 flex-grow text-black rounded-t">
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Featured Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <div className="p-6  rounded shadow-md">
              <h3 className="text-xl font-bold">Code Formatter</h3>
              <p>
                Instantly clean and format your code for better readability,
                maintaining style consistency, and reducing errors.
              </p>
            </div>
            <div className="p-6  rounded shadow-md">
              <h3 className="text-xl font-bold">Version Control Guide</h3>
              <p>
                Get comprehensive resources to learn and master version control
                systems like Git and GitHub, ensuring collaboration and code
                management.
              </p>
            </div>
            <div className="p-6  rounded shadow-md">
              <h3 className="text-xl font-bold">API Testing Suite</h3>
              <p>
                Test, debug, and optimize your APIs with built-in tools to
                ensure reliability and performance before deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">
                Interactive Coding Challenges
              </h3>
              <p>
                Sharpen your coding skills with hands-on challenges and
                tutorials on various programming languages and frameworks.
              </p>
            </div>
            <div className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold">Developer Community</h3>
              <p>
                Join a global community of developers, ask questions, share
                knowledge, and collaborate on open-source projects.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-8 bg-gray-100 p-6 rounded">
          <h2 className="text-2xl font-semibold">What Our Users Say</h2>
          <div className="mt-4">
            <p className="italic">
              "Dev. Friend has been a game-changer for my development workflow.
              The tools are so useful and easy to integrate!"
            </p>
            <p className="mt-2 font-semibold">
              - Alex Smith, Full-Stack Developer
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-lg">
            Have feedback or suggestions? Reach out to us and let us know how we
            can improve your developer experience.
          </p>
          <div className="mt-4">
            <a
              href="mailto:support@devfriend.com"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
