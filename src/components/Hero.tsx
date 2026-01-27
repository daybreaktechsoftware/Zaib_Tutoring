import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Hi, I'm Zaib
                </span>
                an Adaptive Learning Support Tutor
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Supporting learners with barriers to learning through
                structured, compassionate, and individualised tutoring designed
                to help each student thrive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-32 lg:mt-8">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                Get Started Today
              </a>
              <a
                href="#about"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>

            {/* Spline 3D Viewer */}
            <div className="flex justify-center mt-12">
              {/* <spline-viewer
                url="https://prod.spline.design/QJ1V3S0pMuWBPXmX/scene.splinecode"
                className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
                style={{
                  height: "300px", // Adjust height for better responsiveness
                  borderRadius: "1rem",
                  overflow: "hidden",
                }}
              ></spline-viewer> */}
            </div>
          </div>

          {/* Photo Side */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden">
                <img
                  src="/2025-09-06%2021.43.50.jpg"
                  alt="Photo"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

