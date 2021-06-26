import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
export interface ButtonProps {
	onPress?: () => void;
	title: string;
	variant?: "default" | "ghost";
	block?: boolean;
}

export default function Button({
	onPress,
	title,
	variant,
	block = false,
}: ButtonProps) {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={[
				variant === "ghost" ? styles.ghostContainer : styles.defaultContainer,
				{
					alignSelf: block ? "stretch" : "baseline",
				},
			]}
		>
			<Text style={variant === "ghost" ? styles.ghostText : styles.defaultText}>
				{title}
			</Text>
		</TouchableOpacity>
	);
}
