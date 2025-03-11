import React from "react";
import { Link } from "react-router-dom";
import { User, BookOpen, Users, Globe, MessageCircle, Layers } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl">
                Empower Your Career Journey with{" "}
                <span className="text-gray-100">Narayana Career Connect</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed">
                Explore connections, share resources, find mentors, and create a
                network that helps you achieve your dreams.
              </p>
              <div className="mt-6 flex space-x-4">
                <Link
                  to="/register"
                  className="px-6 py-3 bg-white text-orange-500 rounded-md text-lg font-medium shadow hover:bg-blue-900 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/stories"
                  className="px-6 py-3 bg-orange-600 text-white rounded-md text-lg font-medium shadow hover:bg-orange-700 transition-colors"
                >
                  View Stories
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://www.insidehighered.com/sites/default/files/2024-02/GettyImages-1072191138.jpg"
                alt="Career Growth"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
            Features That Drive Your Success
          </h2>
          <p className="mt-4 text-center text-gray-600 text-lg">
            Discover the tools and resources designed to enhance your career
            journey.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={User}
              title="Mentorship"
              description="Connect with mentors who can guide you towards your goals."
              link="/connections"
            />
            <FeatureCard
              icon={BookOpen}
              title="Resources"
              description="Explore valuable resources tailored for your growth."
              link="/resources"
            />
            <FeatureCard
              icon={Users}
              title="Networking"
              description="Build meaningful connections with professionals and peers."
              link="/myconnections"
            />
             
            <FeatureCard
              icon={MessageCircle}
              title="Communication"
              description="Engage in meaningful conversations and discussions."
              link="/messages"
            />
            
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Take the Next Step?
          </h3>
          <p className="mt-4 text-lg text-white leading-relaxed">
            Join the Narayana Career Connect platform and take control of your
            future.
          </p>
          <div className="mt-6">
            <Link
              to="/register"
              className="px-6 py-3 bg-orange-500 text-white  rounded-md text-lg font-medium shadow hover:bg-orange-100 transition-colors"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, link }) => (
  <Link
    to={link}
    className="group block p-6   hover:bg-orange-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-blue-900 text-white  rounded-full">
        <Icon size={32} />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
    <p className="mt-4 text-gray-600">{description}</p>
  </Link>
);

export default Home;
