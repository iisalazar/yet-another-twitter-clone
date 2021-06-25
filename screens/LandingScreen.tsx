import React from "react";
import { Text, SafeAreaView, Image, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { globals, layout, typography } from "../styles";
import Button from "../components/Button";
import { RootStackParamList } from "../App";

type LandingScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"Landing"
>;

type Props = {
	navigation: LandingScreenNavigationProp;
};

function LandingScreen({ navigation }: Props) {
	return (
		<SafeAreaView style={[globals.app, layout.landingContainer]}>
			<View style={{ marginVertical: 40 }}>
				<Image source={require("../assets/Logo.png")} height={40} width={40} />
			</View>
			<Text style={typography.h1}>See what’s happening</Text>
			<Text style={[typography.h3, { marginTop: 40 }]}>
				Join the revolution.
			</Text>
			<View style={{ marginTop: 16 }}>
				<Button
					title="Sign in with twitter"
					onPress={() => {}}
					variant="default"
					block
				/>
			</View>
			<View style={{ marginTop: 16 }}>
				<Button
					title="Sign in with e-mail and password"
					onPress={() => navigation.navigate("EmailPassLogin")}
					variant="ghost"
					block
				/>
			</View>
			<View style={{ marginTop: 25 }}>
				<Text
					style={[typography.link, { textAlign: "center" }]}
					onPress={() => navigation.navigate("EmailPassSignup")}
				>
					Don't have an account? Sign up instead
				</Text>
			</View>
		</SafeAreaView>
	);
}

export default LandingScreen;
