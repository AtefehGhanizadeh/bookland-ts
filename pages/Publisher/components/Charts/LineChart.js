import React from "react";
import dynamic from "next/dynamic"; // Import dynamic from next/dynamic
import { lineChartData, lineChartOptions } from "../../variables/charts";

// Use dynamic import for ReactApexChart component
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

class LineChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: [],
			chartOptions: {},
		};
	}

	componentDidMount() {
		// Set the chartData and chartOptions in the component state
		this.setState({
			chartData: lineChartData,
			chartOptions: lineChartOptions,
		});
	}

	render() {
		return (
			<>
				{/* Use conditional check for window object before rendering ReactApexChart */}
				{typeof window !== "undefined" && (
					<ReactApexChart
						options={this.state.chartOptions}
						series={this.state.chartData}
						type="area"
						width="100%"
						height="100%"
					/>
				)}
			</>
		);
	}
}

export default LineChart;
