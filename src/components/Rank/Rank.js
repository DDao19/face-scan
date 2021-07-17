import { motion } from "framer-motion";
const Rank = () => {
  return (
    <motion.div
      className="text-center rank"
      animate={{ scale: [0.2, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h3>Your Total Image Uploads...</h3>
      <h2 className="text-white">{`Rank #5`}</h2>
    </motion.div>
  );
};

export default Rank;
