import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-2">
          About Virtual Herbal Garden
        </h1>
        <p className="text-lg text-gray-600">
          A final-year B.Tech project created with a vision to revive the wisdom
          of traditional herbal medicine in a modern, interactive way.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            🌱 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In a world overwhelmed by synthetic solutions, our goal is to raise
            awareness about the power and purity of herbal remedies rooted in
            ancient AYUSH practices. Through a 3D interactive experience, we aim
            to reconnect people with nature and promote a sustainable, holistic
            approach to health.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Herbal plants"
          className="rounded-xl shadow-lg"
        />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          👨‍💻 Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We are a team of final-year B.Tech Computer Science students
          passionate about combining technology and tradition. Inspired by the
          healing power of herbs, we’ve developed a virtual garden using modern
          web technologies like React, Three.js, and Firebase — making learning
          about herbs not only educational but also immersive and engaging.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          🌿 Why Herbal?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Herbal remedies have fewer side effects and are naturally sourced.
          </li>
          <li>
            They form the foundation of ancient medicinal systems like Ayurveda
            and Siddha.
          </li>
          <li>
            Encourages sustainable living and self-care using nature's
            resources.
          </li>
        </ul>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-xl font-semibold text-green-700 mb-2">
          Join us in rediscovering nature’s pharmacy.
        </h2>
        <p className="text-gray-600">Explore. Learn. Heal.</p>
      </section>
    </div>
  );
};

export default About;
