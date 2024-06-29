const MainPanel = {
	baseStyle: {
		float: "right",
		width: "1200px",
		overflow: "visible",
		transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
		transitionDuration: ".2s, .2s, .35s",
		transitionProperty: "top, bottom, width",
		transitionTimingFunction: "linear, linear, ease",
	},
};

export const MainPanelComponent = {
	components: {
		MainPanel,
	},
};
