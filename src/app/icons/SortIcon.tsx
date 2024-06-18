import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SortIconProps {
  handleSortToggle: () => void;
  isClicked: boolean;
}

const SortIcon = ({ handleSortToggle, isClicked }: SortIconProps) => {
  return (
    <motion.button
      className="mt-auto h-[24px] w-[24px] mb-1.5 cursor-pointer"
      onClick={() => handleSortToggle()}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(isClicked && "rotate-180")}
      >
        <path
          d="M6.49947 18.9996L6.49947 5"
          className="stroke-gray-400"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 15.5957L6.5 19L3 15.5957"
          className="stroke-gray-400"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.4995 5.00036L17.4995 19"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 8.4043L17.5 5.00002L14 8.4043"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
};

export default SortIcon;
