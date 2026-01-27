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

          {/* Support Highlights - Autism-friendly visual */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative calm background shapes */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
                <div
                  className="absolute bottom-20 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-32 left-20 w-16 h-16 bg-green-100 rounded-full opacity-40 animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
              </div>

              <div className="rounded-3xl bg-white/90 backdrop-blur-sm shadow-2xl p-8 space-y-6 border-2 border-blue-100">
                {/* Header with icon */}
                <div className="flex items-center justify-center space-x-3 pb-4 border-b-2 border-dashed border-blue-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-700">
                      Individualised
                    </p>
                    <p className="text-sm text-gray-600">
                      1:1 learning support & tutoring
                    </p>
                  </div>
                </div>

                {/* Support cards in organized grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      text: "Reading & literacy",
                      color: "from-blue-400 to-blue-500",
                      icon: "📚",
                    },
                    {
                      text: "Writing & spelling",
                      color: "from-purple-400 to-purple-500",
                      icon: "✍️",
                    },
                    {
                      text: "Maths support",
                      color: "from-green-400 to-green-500",
                      icon: "🔢",
                    },
                    {
                      text: "Attention & concentration",
                      color: "from-yellow-400 to-yellow-500",
                      icon: "🎯",
                    },
                    {
                      text: "Executive functioning",
                      color: "from-pink-400 to-pink-500",
                      icon: "🧩",
                    },
                    {
                      text: "Learning at a slower pace",
                      color: "from-cyan-400 to-cyan-500",
                      icon: "🐢",
                    },
                    {
                      text: "Homework & study skills",
                      color: "from-indigo-400 to-indigo-500",
                      icon: "📝",
                    },
                    {
                      text: "Confidence & motivation",
                      color: "from-orange-400 to-orange-500",
                      icon: "⭐",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.text}
                      className="group relative p-4 rounded-2xl bg-white shadow-md border-2 border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                      ></div>
                      <div className="text-center space-y-2">
                        <div className="text-2xl">{item.icon}</div>
                        <p className="text-xs font-semibold text-gray-700 leading-tight">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

