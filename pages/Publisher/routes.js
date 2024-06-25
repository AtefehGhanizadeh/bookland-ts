// import other components
import {
	HomeIcon,
	CreditIcon,
	PersonIcon,
	BookIcon,
} from "./components/Icons/Icons";
import Dashboard from "./views/Dashboard";
import ChargeWallet from "./views/ChargeWallet";
import Books from "./views/Books";
import Profile from "./views/Profile";

// Import Transaction after its definition
import Transaction from "@/pages/Publisher/views/Transaction";

var dashRoutes = [
	// {
	// 	path: "/Dashboard",
	// 	name: "داشبورد",
	// 	icon: <HomeIcon color="inherit" />,
	// 	layout: "/Publisher/views",
	// },
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
