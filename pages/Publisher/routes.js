// import other components
import { CreditIcon, PersonIcon, BookIcon } from "./components/Icons/Icons";
import ChargeWallet from "./views/ChargeWallet";
import Books from "./views/Books";
import Profile from "@/pages/Publisher/views/Profile";

// Import Transaction after its definition
import Transaction from "@/pages/Publisher/views/Transaction";

var dashRoutes = [
  {
    path: "/Transaction",
    name: "تراکنشات اخیر",
    icon: <CreditIcon color="inherit" />,
    layout: "/Publisher/views",
  },
  {
    path: "/ChargeWallet",
    name: "شارژ کیف پول",
    icon: <CreditIcon color="inherit" />,
    layout: "/Publisher/views",
  },
  {
    path: "/Books",
    name: "کتاب ها",
    icon: <BookIcon color="inherit" />,
    layout: "/Publisher/views",
  },
  {
    path: "/Profile",
    name: "پروفایل",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    layout: "/Publisher/views",
  },
];

export default dashRoutes;
