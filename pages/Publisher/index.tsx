import { Inter } from "next/font/google";
import Publisher from "./Publisher";

// import PDFViewer from "@/components/PDFViewer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<Publisher />
		</div>
	);
}
