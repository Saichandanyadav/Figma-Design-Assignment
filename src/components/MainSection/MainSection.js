import React from "react";
import "./MainSection.css";

const MainSection = () => {
  return (
    <main className="main-section">
      <section className="intro">
        <h1>Welcome to Our Website</h1>
        <p>This is a description of what we do.</p>
      </section>
      <section className="features">
        <div className="feature">Feature 1</div>
        <div className="feature">Feature 2</div>
        <div className="feature">Feature 3</div>
      </section>
    </main>
  );
};

export default MainSection;
