const AboutUs = () => {
  const valueList = [
    {
      title: "Simplicity",
      description: "We eliminate the unnecessary to focus on what matters.",
    },
    {
      title: "Quality",
      description: "Every detail is crafted with precision and care.",
    },
    {
      title: "Innovation",
      description: "We push boundaries while maintaining elegance.",
    },
    {
      title: "Integrity",
      description: "Honest communication and transparent processes.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="mb-8 text-center text-4xl font-light text-gray-900 md:text-6xl">
            About Us
          </h1>
          <p className="mb-16 text-center text-xl leading-relaxed text-gray-600">
            We believe that great design is invisible. It just works.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-light text-gray-900">
                Our Story
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Founded on the principle that less is more, we've spent years
                perfecting the art of minimalist design. Our approach strips
                away the unnecessary to reveal what truly matters.
              </p>
              <p className="leading-relaxed text-gray-600">
                Every project we undertake is a testament to our belief that
                simplicity is the ultimate sophistication. We don't just create
                websites; we craft experiences that resonate.
              </p>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-lg bg-gray-200">
              <div className="text-center text-gray-400">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-300"></div>
                <p className="text-sm">Visual storytelling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-16 text-center text-3xl font-light text-gray-900">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valueList.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="mb-3 text-lg font-medium text-gray-900">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
