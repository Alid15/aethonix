import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold  text-center">About Aethonix</h1>

        <p className="text-gray-700 text-lg">
          Welcome to{" "}
          <span className="font-semibold text-[#06a055]">Aethonix</span>, your
          one-stop destination for the latest and greatest in electronics. From
          cutting-edge gadgets to must-have accessories, we’re here to power up
          your tech life with premium products and unbeatable service.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#06a055]">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At Aethonix, our mission is to make innovative technology accessible
            to everyone. We’re passionate about connecting people with the tools
            and tech they need to thrive in a digital world — all at competitive
            prices and delivered with speed and care.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#06a055]">
            Why Choose Aethonix?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#06a055]">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision a future where technology elevates everyday life. At
            Aethonix, we’re committed to staying ahead of the curve, offering
            cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-[#06a055] mb-2">
            Join the Aethonix Family
          </h3>
          <p className="text-gray-700 mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking
            for something cool and functional — Aethonix has something for
            everyone.
          </p>
          <Link to={"/products"}>
            <button className="bg-[#06a055] text-white px-6 py-2 rounded-xl hover:bg-red-700 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
