import { Award, BookOpen, Clock, Users } from "lucide-react";

const Portfolio = () => {
  const credentials = [
    {
      title: "Qualified Foundation Phase Teacher",
      institution: "Adaptive Learning Support",
      year: "2023",
      icon: Award,
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Adaptive Learning Support Training",
      institution: "Inclusive Education Courses",
      year: "2024",
      icon: BookOpen,
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Experience in Special Needs Settings",
      institution: "Grade RR–4 | Individualised support",
      year: "2023",
      icon: Users,
      color: "from-purple-400 to-violet-500",
    },
    {
      title: "Individualised Tutoring & Support",
      institution: "Private sessions & school collaboration",
      year: "2023",
      icon: Clock,
      color: "from-pink-400 to-rose-500",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer K.",
      role: "Parent",
      text: "Zaib has been incredible with our son. She understands his needs and has helped him gain confidence in ways we never thought possible.",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Parent",
      text: "The personalized approach Zaib uses has made all the difference. Our daughter looks forward to every session and has made amazing progress.",
      rating: 5,
    },
    {
      name: "Lisa M.",
      role: "Parent",
      text: "Professional, caring, and incredibly knowledgeable. Zaib has become an essential part of our support team.",
      rating: 5,
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Experience & Credentials
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Committed to continuous learning and staying current with the latest
            research and best practices in inclusive, adaptive learning support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${credential.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {credential.title}
                    </h4>
                    {/* <p className="text-gray-600 mb-1">
                      {credential.institution}
                    </p>
                    <p className="text-sm text-gray-500">{credential.year}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12">
            What Parents Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            My Teaching Philosophy
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            "Every child learns differently, and that's not just okay, it's
            wonderful. My job is to discover how each learner learns best and
            create experiences that build on their natural strengths while
            gently supporting areas of growth. Progress isn't always linear, but
            with patience, understanding, and the right support, every child can
            achieve incredible things."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

