// Assets
import avatar1 from "../assets/img/avatars/avatar1.png";
import avatar2 from "../assets/img/avatars/avatar2.png";
import avatar3 from "../assets/img/avatars/avatar3.png";
import avatar4 from "../assets/img/avatars/avatar4.png";
import avatar5 from "../assets/img/avatars/avatar5.png";
import avatar7 from "../assets/img/avatars/avatar7.png";
import avatar8 from "../assets/img/avatars/avatar8.png";
import avatar9 from "../assets/img/avatars/avatar9.png";
import avatar10 from "../assets/img/avatars/avatar10.png";
// Custom icons
import {
	AdobexdLogo,
	AtlassianLogo,
	InvisionLogo,
	JiraLogo,
	SlackLogo,
	SpotifyLogo,
} from "../components/Icons/Icons.js";

export const dashboardTableData = [
	{
		logo: AdobexdLogo,
		name: "Purity UI Version",
		members: [avatar1, avatar2, avatar3, avatar4, avatar5],
		budget: "$14,000",
		progression: 60,
	},
	{
		logo: AtlassianLogo,
		name: "Add Progress Track",
		members: [avatar3, avatar2],
		budget: "$3,000",
		progression: 10,
	},
	{
		logo: SlackLogo,
		name: "Fix Platform Errors",
		members: [avatar10, avatar4],
		budget: "Not set",
		progression: 100,
	},
	{
		logo: SpotifyLogo,
		name: "Launch our Mobile App",
		members: [avatar2, avatar3, avatar7, avatar8],
		budget: "$32,000",
		progression: 100,
	},
	{
		logo: JiraLogo,
		name: "Add the New Pricing Page",
		members: [avatar10, avatar3, avatar7, avatar2, avatar8],
		budget: "$400",
		progression: 25,
	},
	{
		logo: InvisionLogo,
		name: "Redesign New Online Shop",
		members: [avatar9, avatar3, avatar2],
		budget: "$7,600",
		progression: 40,
	},
];

export const tablesTableData = [
	{
		id: 3,
		bookname: "ماجراجویی بزرگ",
		countOfSold: 10, // تعداد فروخته شده
		income: 100000,
		authorname: "جان اسمیت",
		translatorname: null,
		releaseddate: 2020,
		bookcoverimage: "http://localhost:8080/book-covers/demo-3.jpg",
		description: null,
		numberofpages: 350,
		language: "فارسی",
		bookdemofile: "path_to_demo_file3",
	},
];

export const tablesProjectData = [
	{
		logo: AdobexdLogo,
		name: "Purity UI Version",
		budget: "$14,000",
		status: "Working",
		progression: 60,
	},
	{
		logo: AtlassianLogo,
		name: "Add Progress Track",
		budget: "$3,000",
		status: "Canceled",
		progression: 10,
	},
	{
		logo: SlackLogo,
		name: "Fix Platform Errors",
		budget: "Not set",
		status: "Done",
		progression: 100,
	},
	{
		logo: SpotifyLogo,
		name: "Launch our Mobile App",
		budget: "$32,000",
		status: "Done",
		progression: 100,
	},
	{
		logo: JiraLogo,
		name: "Add the New Pricing Page",
		budget: "$400",
		status: "Working",
		progression: 25,
	},
];

export const newestTransactions = [
	{
		id: 1,
		actiontype: "Deposit",
		amount: 100.0,
		issuccessful: true,
		description: "Deposited $100",
		createddate: "2022-01-09T16:26:38",
	},
	{
		id: 3,
		actiontype: "Deposit",
		amount: 100.0,
		issuccessful: false,
		description: "Deposited $100",
		createddate: "2024-01-09T03:38:00",
	},
	{
		id: 2,
		actiontype: "Withdraw",
		amount: 15.99,
		issuccessful: true,
		description: 'Purchased "دایی جان ناپلئون"',
		createddate: "2025-01-10T20:46:50",
	},
	{
		id: 4,
		actiontype: "Withdraw",
		amount: 15.99,
		issuccessful: false,
		description: 'Purchased "The Mysterious Island"',
		createddate: "2023-01-10T08:55:39",
	},
];
