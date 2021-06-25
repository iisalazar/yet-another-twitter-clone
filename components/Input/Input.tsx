import React from "react";
import { TextInput } from "react-native";
import styles from "./styles";
import { colors } from "../../styles/variables";
import { TextInputProps } from "react-native";
export default function Input(props: TextInputProps) {
	const { style, ...rest } = props;
	return (
		<TextInput
			style={[styles.input, style]}
			placeholderTextColor={colors.grey}
			{...rest}
		/>
	);
}
