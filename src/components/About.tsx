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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Zaib
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a qualified Foundation Phase teacher who provides Adaptive
            Learning Support. I work with learners who face barriers to
            learning, offering calm, structured, and compassionate support that
            meets them where they are. My experience spans Grade RR to Grade 4
            across special needs settings, focusing on inclusive practices that
            help every learner progress with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">My Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              Each learner has unique strengths and abilities waiting to be
              discovered. My role is to create a safe, structured environment
              where learners feel confident to explore, learn, and grow at their
              own pace.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I build on each learner's interests and strengths while gently
              expanding their comfort zones. Through patience, consistency, and
              celebration of small wins, we create lasting positive change.
            </p>

            <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-3">
                Specializations
              </h4>
              <ul className="space-y-2">
                {[
                  "Academic learning support (reading, writing, maths)",
                  "Executive functioning & study skills (organisation, planning, task initiation)",
                  "Attention & focus support for learning",
                  "Sensory-aware learning strategies",
                  "Communication & classroom interaction skills",
                  "Learning confidence & motivation",
                  "Curriculum adaptation & scaffolded learning",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
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
                  Foundation Phase Teacher | Adaptive Learning Support
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

        <div className="mt-16 mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Reading & literacy support",
            "Writing & spelling support",
            "Maths support",
            "Attention & concentration support",
            "Executive functioning (organisation, planning, task completion)",
            "Learning at a slower pace",
            "Homework & study skills support",
            "School readiness / foundation skills",
            "Curriculum adaptation / learning support",
            "Confidence & learning motivation",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start space-x-3 p-4 rounded-2xl bg-white/80 shadow-md border border-blue-50"
            >
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500"></span>
              <p className="text-gray-700 font-semibold text-sm">{item}</p>
            </div>
          ))}
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
