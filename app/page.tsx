"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Nail Art Shop
          </h1>
          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">
              Accueil
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">
              Prestations
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">
              Galerie
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent"
          >
            Sublimez vos ongles
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Des créations uniques et personnalisées pour des ongles qui vous ressemblent
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Réserver un rendez-vous
          </motion.button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Pose de vernis",
              description: "Des couleurs éclatantes qui durent",
              icon: "💅",
            },
            {
              title: "Nail Art",
              description: "Des designs uniques et créatifs",
              icon: "✨",
            },
            {
              title: "Extensions",
              description: "Allongez et embellissez vos ongles",
              icon: "💎",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-20 text-center text-gray-500">
        <p>© 2025 Nail Art Shop - Tous droits réservés</p>
      </footer>
    </main>
  );
}
