import { motion } from "framer-motion";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="lg:px-10 md:px-7 px-5 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <p className="text-lg mb-12">
          A simple and easy process to get you started on your job search.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <img
                src="https://as2.ftcdn.net/jpg/01/58/29/93/1000_F_158299334_geKdmx3GFe7JqiTmfYpkwAJubfLfEpUk.jpg"
                alt="Step 1"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold">Step 1: Register or Login</h3>
            <p className="text-gray-500 mt-2">
              Create an account or log in to start exploring job opportunities.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/393/393790.png"
                alt="Step 2"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold">Step 2: Browse Jobs</h3>
            <p className="text-gray-500 mt-2">
              Explore various job listings and learn about the companies hiring.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/13441/13441753.png"
                alt="Step 3"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold">Step 3: Apply for Jobs</h3>
            <p className="text-gray-500 mt-2">
              Apply for your desired jobs directly through the platform.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4012/4012375.png"
                alt="Step 4"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold">Step 4: Track Your Applications</h3>
            <p className="text-gray-500 mt-2">
              Manage your applications and track your job search progress.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
