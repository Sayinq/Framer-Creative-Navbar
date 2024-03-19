import { motion, AnimatePresence } from 'framer-motion';

const DropdownModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[50px] z-10 w-fit h-fit bg-white shadow-lg rounded-md p-4 mt-2"
        >
          <ul>
            <li className="cursor-pointer hover:text-gray-500">Service 1</li>
            <li className="cursor-pointer hover:text-gray-500">Service 2</li>
            <li className="cursor-pointer hover:text-gray-500">Service 3</li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownModal;