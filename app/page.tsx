'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MentorshipPage = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const mentorshipCards = [
    {
      title: "Des propositions personnalisées",
      description: "Pour chaque backlink que vous proposez, nous vous mettons en relation avec des sites web pertinents pour votre niche.",
      imageUrl: "/images/1.png"
    },
    {
      title: "Croissance accélérée",
      description: "Avec des backlinks reconnus par Google, vous pouvez améliorer votre référencement naturel et gagner en visibilité.",
      imageUrl: "/images/2.png"
    },
    {
      title: "Un investissement rentable",
      description: "Contrairement à la publicité payante, les backlinks sont un investissement durable pour votre site web.",
      imageUrl: "/images/3.png"
    },

  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
    }
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prev) => (prev > 0 ? prev - 1 : mentorshipCards.length - 1));
  };

  const handleNext = () => {
    setCurrentCardIndex((prev) => (prev < mentorshipCards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen" style={{
      background: 'radial-gradient(circle, rgba(67, 69, 112, 1) 3%, rgba(35, 36, 57, 1) 60%)'
    }}>
      {/* Hero Section */}
      <section className="px-6 py-20 md:px-20 pt-28">
        <div className="relative grid md:grid-cols-2 gap-12 items-center overflow-hidden">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                Boostez votre visibilité
              </span>{' '}
              avec les meilleurs backlinks
            </h1>
            <p className="text-lg text-gray-300 font-bold">
              Dominez les premières positions sur Google
              <br />avec des backlinks de qualité sur mesure pour votre activité
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-4 py-2 bg-transparent border-b-2 border-blue-400 text-white focus:outline-none focus:border-green-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <span>Rechercher des backlinks</span>
            <ChevronRight className="w-4 h-4" />
          </button>
              </form>
            ) : (
              <div className="text-2xl text-green-400 font-semibold">
          Subscribed! 🎉
              </div>
            )}
          </div>

          <div className="relative">
            <Image
              src="/images/hero.png"
              alt="Illustration"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>

          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 rounded-full"
              style={{
          background: `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.4) 0%, rgba(0,0,0,0) 70%)`,
          animation: `float${i} ${8 + i * 2}s infinite linear`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
              }}
            />
          ))}
          <style jsx>{`
            @keyframes float0 { 0% { transform: translate(0, 0); } 100% { transform: translate(100px, -100px); } }
            @keyframes float1 { 0% { transform: translate(0, 0); } 100% { transform: translate(-80px, 80px); } }
            @keyframes float2 { 0% { transform: translate(0, 0); } 100% { transform: translate(120px, 50px); } }
            @keyframes float3 { 0% { transform: translate(0, 0); } 100% { transform: translate(-50px, -120px); } }
            @keyframes float4 { 0% { transform: translate(0, 0); } 100% { transform: translate(70px, 70px); } }
          `}</style>
        </div>
      </section>

      {/* Cards Section */}
      <section className="px-6 py-20 md:px-20">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300" style={{
            transform: `translateX(-${currentCardIndex * 100}%)`,
          }}>
            {mentorshipCards.map((card, index) => (
              <div
                key={index}
                className="min-w-full px-4"
              >
                <div className="max-w-md mx-auto bg-gradient-to-br from-purple-800/50 to-blue-900/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    width={300}
                    height={300}
                    className="w-full h-3/4 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-2xl font-bold text-white mb-4">{card.title}</h2>
                  <p className="text-gray-300 mb-6">{card.description}</p>
                  <Link href="/apropos" className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-800 text-white hover:opacity-90 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-800 text-white hover:opacity-90 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorshipPage;
