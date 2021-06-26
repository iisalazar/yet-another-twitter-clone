import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import firebase from "firebase";
import Button from "../components/Button";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"HomeScreen"
>;

type Props = {
	navigation: HomeScreenNavigationProp;
};
export default function HomeScreen({ navigation }: Props) {
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
			<Text>This is the home screen, you are authenticated</Text>
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
