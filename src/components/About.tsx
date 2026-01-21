import { Brain, Lightbulb, Puzzle, Target } from "lucide-react";

const About = () => {
  const approaches = [
    {
      icon: Brain,
      title: "Neurodiversity Positive",
      description: "Celebrating unique thinking patterns and learning styles",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Puzzle,
      title: "Structured Learning",
      description: "Breaking down complex concepts into manageable pieces",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Creative Methods",
      description:
        "Using visual aids, hands-on activities, and special interests",
      color: "from-purple-400 to-violet-500",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Setting achievable milestones and celebrating progress",
      color: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Photo for Mobile */}
        <div className="flex lg:hidden justify-center mb-12">
          <div className="relative">
            <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden">
              <img
                src="/2025-09-06%2021.43.50.jpg" // or rename file to avoid spaces
                alt="Zaib's Photo"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Zaib
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a qualified Foundation Phase teacher and currently work as an
            ASD teacher. With 2 years of experience teaching autistic learners
            in Grade RR, R, 1, and 4 at two special needs schools, I have
            developed a deep understanding of their unique needs. I have
            completed specialized short courses and training in ASD, focusing on
            methods to enrich learning environments for autistic learners.
            Beyond the classroom, I have tutored ASD learners and continue to
            support them daily in a structured, nurturing environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">My Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              Each child with autism has unique strengths and abilities waiting
              to be discovered. My role is to create a safe, structured
              environment where learners feel confident to explore, learn, and
              grow at their own pace.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I believe in building on each learner's interests and strengths
              while gently expanding their comfort zones. Through patience,
              consistency, and celebration of small wins, we create lasting
              positive change.
            </p>

            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Specializations
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Social Communication Skills
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Academic Support (Math, Reading, Writing)
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Executive Function Skills
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Sensory Integration Strategies
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/80 rounded-3xl p-8 shadow-xl">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">ZM</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">
                  Zaib Abrahams
                </h4>
                <p className="text-gray-600">
                  Foundation Phase Teacher, ASD Specialist
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">Experience</span>
                  <span className="font-semibold text-blue-600">2 Years</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">learners Helped</span>
                  <span className="font-semibold text-green-600">20+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">Success Rate</span>
                  <span className="font-semibold text-purple-600">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div
                key={index}
                className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${approach.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {approach.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
