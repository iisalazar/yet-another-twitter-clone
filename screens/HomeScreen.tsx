import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>This is the home screen, you are authenticated</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
