import React from "react";

const SponsorSection = () => {
  return (
    <div className="sponsors">
      <h3>Registered and supervised by:</h3>
      <div className="sponsor-logos">
        <img src="/assets/sponsor1.png" alt="Sponsor 1" />
        <img src="/assets/sponsor2.png" alt="Sponsor 2" />
        {/* Add more sponsors as needed */}
      </div>
    </div>
  );
};

export default SponsorSection;
