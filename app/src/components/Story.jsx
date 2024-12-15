import React from "react";

const CablinkStory = () => {
  const reviews = [
    {
      text: "The best transportation app I've ever used. I look forward to using this easy-to-use app almost daily. It is quick and efficient and simple. Thank you, Transit. Well done.",
      source: "App Store review",
    },
    {
      text: "Cablink is extremely user-friendly and updates constantly to ensure it's always functioning properly. Whether you're just visiting or living here you need this app to get around 💯.",
      source: "App Store review",
    },
    {
      text: "Cablink is EXACTLY what I want from a public transit navigation app. High quality, low monetization. No complaints.",
      source: "App Store review",
    },
    {
      text: "Cablink is extremely user-friendly and updates constantly to ensure it's always functioning properly. Whether you're just visiting or living here you need this app to get around 💯.",
      source: "App Store review",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">Cablink Story</h2>
            <p className="text-gray-600">
              In a world filled with fragmented transportation options,
              navigating through multiple platforms to find the best way to get
              around is time-consuming and frustrating. Cablink transforms this
              complexity into simplicity by unifying every mode of transportation
              into a single, user-friendly platform.
            </p>
            <p className="text-gray-600">
              Cablink is built to connect you to every mode of transport, whether
              it's a TAXI, train, bus, bicycle, or e-scooter—all in one seamless
              platform.
            </p>
            <p className="text-gray-600">
              Our platform serves as more than an aggregator; Cablink is your
              ultimate gateway to smarter, more affordable, and efficient travel,
              making urban mobility accessible, sustainable, and tailored to your
              lifestyle.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/291/043/non_2x/school-bus-cartoon-hand-drawn-ai-generated-free-png.png" // Replace this with the actual image URL
              alt="Cablink illustration"
              className="w-full"
            />
          </div>
        </div>

        {/* Slider Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            What Our Users Say
          </h3>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-lg shadow-md p-6 text-center space-y-4"
                >
                  <div className="text-yellow-500 text-lg">★★★★★</div>
                  <p className="text-gray-600">{`"${review.text}"`}</p>
                  <span className="text-sm text-gray-500 font-medium">
                    {review.source}
                  </span>
                </div>
              ))}
            </div>
            {/* Slider Navigation */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md">
                &lt;
              </button>
              <button className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-md">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CablinkStory;
