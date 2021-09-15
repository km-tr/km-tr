import React, { FC } from "react";
import { Text, Box } from "ink";
import open from "open";
import SelectInput from "ink-select-input";

type Action = () => void;

type Item = {
	label: string;
	value: string | Action;
};

const handleSelect = (item: Item) => {
	if (typeof item.value === "string") {
		open(item.value, { wait: false });
	}

	if (typeof item.value === "function") {
		item.value();
	}
};

const items: Item[] = [
	{
		label: "GitHub",
		value: "https://github.com/km-tr"
	},
	{
		label: "Facebook",
		value: "https://www.facebook.com/beer.with.sushi"
	},
	{
		label: "Sketchfab",
		value: "https://sketchfab.com/kmgi"
	},
	{
		label: "???",
		value: "https://ququlo.com"
	},
	{
		label: "Quit",
		value() {
			process.exit();
		}
	}
];

const App: FC = () => (
	<Box flexDirection="column">
		<Box marginY={1}>
			<Text>I’m a Web and React Native developer.</Text>
		</Box>
		<SelectInput items={items} onSelect={handleSelect} />
	</Box>
);

module.exports = App;
export default App;
