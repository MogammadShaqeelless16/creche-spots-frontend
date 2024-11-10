import { HiSearch } from "react-icons/hi";      // For Search
import { MdCompareArrows } from "react-icons/md"; // For Compare
import { HiPencilAlt } from "react-icons/hi";     // For Apply
import { FaRegCreditCard } from "react-icons/fa";  // For Pay Securely

const data = [
  {
    icon: <HiSearch />,  // Updated icon for search
    heading: "Search",
    detail:
      "Enter your location and browse creches near you - Discover both registered and recommended options to find the best fit for your family.",
  },
  {
    icon: <MdCompareArrows />,  // Updated icon for compare
    heading: "Compare",
    detail:
      "View details on fees, services, facilities and more - Easily compare creches side-by-side to make informed choices based on what matters most to you.",
  },
  {
    icon: <HiPencilAlt />,  // Updated icon for apply
    heading: "Apply",
    detail:
      "Complete your child’s application in minutes - Save time by applying directly through the app, with no more complicated paperwork.",
  },
  {
    icon: <FaRegCreditCard />,  // Updated icon for pay securely
    heading: "Pay Securely",
    detail:
      "Manage fees and payments all in one place- Use CrecheSpots to make secure payments, anywhere, anytime, keeping you organized and worry-free.",
  },
];

export default data;
