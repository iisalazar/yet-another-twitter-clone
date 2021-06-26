import React from "react";

import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
import Button from "../components/Button";
import { typography } from "../styles";
import { colors } from "../styles/variables";
export default function ProfileScreen() {
	const signout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log("Logged out, bitch");
			})
			.catch((err) => console.log(err));
	};
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text style={{ ...typography.body, color: colors.brand.dark }}>
				This is the profile screen
			</Text>
			<Button
				title="Logout"
				block
				variant="default"
				onPress={() => signout()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({});
