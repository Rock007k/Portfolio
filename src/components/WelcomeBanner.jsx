import { motion } from "framer-motion";

export default function WelcomeBanner() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
      
      <motion.h1
        className="text-5xl md:text-6xl font-bold"
        initial={{ opacity: 0 }} // Start invisible
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1.5 }} // Over 1.5 seconds
      >
        Welcome to My Portfolio
      </motion.h1>

      <motion.p
        className="text-xl mt-6"
        initial={{ y: 30, opacity: 0 }} // Starts lower and invisible
        animate={{ y: 0, opacity: 1 }} // Moves up and fades in
        transition={{ delay: 0.8, duration: 1 }}
      >
        Building React Projects Daily 🚀
      </motion.p>
    </div>
  );
}
