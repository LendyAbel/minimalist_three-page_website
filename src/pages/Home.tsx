import { Link } from "react-router";
import { IoIosAnalytics } from "react-icons/io";

const Home = () => {
  const statsList = [
    {
      title: "Clean Design",
      description:
        "Every element serves a purpose. No clutter, no distractions.",
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and efficiency across all devices.",
    },
    {
      title: "User Focused",
      description: "Designed with your users' needs and experience in mind.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="mb-8 text-5xl leading-tight text-gray-900 md:text-7xl">
            Simple.
            <br />
            <span className="font-normal">Beautiful.</span>
            <br />
            <span className="font-medium">Effective.</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-gray-600">
            We create clean, modern solutions that focus on what matters most.
            Less noise, more impact.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-gray-900 px-8 py-3 text-base text-white shadow-xs shadow-gray-400 hover:bg-gray-800">
              <Link to="/about-us">Learn More</Link>
            </button>
            <button className="rounded-xl border border-gray-400 bg-transparent px-8 py-3 text-gray-700 shadow-xs shadow-gray-400 hover:bg-gray-50">
              <Link to="/contact-us">Get Started</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-3xl font-light text-gray-900 md:text-4xl">
              Why Choose Minimalism?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              In a world of complexity, we believe in the power of simplicity.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {statsList.map((feature, index) => (
              <div key={index} className="text-center">
                <IoIosAnalytics className="mx-auto mb-6 h-18 w-18" />
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
