const VisionMissionSection = () => {
    return (
      <section
        className="relative min-h-screen bg-contain bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/c3.jpg)' }} // Ensure the correct image path
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-90"></div>
  
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
          
          {/* Left Column: Vision and Mission Text */}
          <div className="md:space-y-10 space-y-5 mt-5">
            <div>
              <h3 className="md:text-6xl text-3xl font-semibold leading-tight text-[#e1d3b1] ">
                Vision
              </h3>
              <p className="mt-4 md:text-xl text-gray-300">
              “Indian Music for all by being the global beacon of musical innovation, breaking barriers, embracing diversity, and enriching lives through transformative Indian Music Education and Creativity.”

</p>
            </div>
            <div>
              <h3 className="md:text-6xl text-3xl font-semibold leading-tight text-[#e1d3b1]">
                Mission
              </h3>
              <p className="mt-4 md:text-xl text-gray-300">
              “At Music Temple, our mission is to revolutionize Indian music education, empowering individuals worldwide to explore and learn through innovative tools, nurturing a culture that harmonizes tradition and innovation.”

</p>
            </div>
          </div>
  
          {/* Right Column: Image */}
          <div className="flex justify-center items-center mb-10 bg-white p-1 neon-border">
            <img
              src="/c3.jpg" // Make sure to replace with the correct path
              alt="Right Column Image"
              className="w-full h-auto object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default VisionMissionSection;
  