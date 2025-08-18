import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {!submitted ? (
        <>
          {/* Hero Section */}
          <section className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
              <h1 className="mb-8 text-4xl font-light text-gray-900 md:text-6xl">
                Contact Us
              </h1>
              <p className="mb-16 text-xl leading-relaxed text-gray-600">
                Ready to start your project? Let's create something beautiful
                together.
              </p>
            </div>
          </section>
          {/* Contact Form */}
          <section className="bg-white pb-24">
            <div className="mx-auto max-w-2xl px-6 lg:px-8">
              <form
                onSubmit={(e) => {
                  void handleSubmit(e);
                }}
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-xs focus:border-gray-500 focus:ring-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-xs focus:border-gray-500 focus:ring-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-xs focus:border-gray-500 focus:ring-gray-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 rounded-xl bg-gray-900 px-12 py-3 text-base text-white hover:bg-gray-800 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </section>
          {/* Contact Info */}
          <section className="bg-gray-100 py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <div className="grid gap-12 text-center md:grid-cols-3">
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900">
                    Email
                  </h3>
                  <p className="text-gray-600">hello@minimalista.com</p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900">
                    Phone
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900">
                    Location
                  </h3>
                  <p className="text-gray-600">New York, NY</p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="flex min-h-screen items-center justify-center bg-white">
            <div className="mx-auto max-w-md px-6 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="mb-4 text-2xl font-light text-gray-900">
                Message Sent
              </h1>
              <p className="mb-8 text-gray-600">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                }}
                className="rounded-xl border border-gray-400 bg-transparent px-8 py-3 text-gray-700 shadow-xs shadow-gray-400 hover:bg-gray-50"
              >
                Send Another Message
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ContactUs;
