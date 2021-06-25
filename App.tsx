import "react-native-gesture-handler";
import React, { useEffect } from "react";
import firebase from "firebase/app";
import { firebaseConfig } from "./firebase";

import AppLoading from "expo-app-loading";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
	LandingScreen,
	EmailPasswordLoginScreen,
	EmailSignupScreen,
	HomeScreen,
} from "./screens";

import {
	useFonts as usePoppinsFonts,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
	useFonts as useRobotoFonts,
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export type RootStackParamList = {
	Landing: undefined;
	EmailPassLogin: undefined;
	EmailPassSignup: undefined;
	HomeScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

export default function App() {
	const [fontPoppinsLoaded] = usePoppinsFonts({
		Poppins_700Bold,
	});
	const [fontRobotoLoaded] = useRobotoFonts({
		Roboto_300Light,
		Roboto_400Regular,
		Roboto_700Bold,
	});

	const [assets] = useAssets([require("./assets/Logo.png")]);

	if (!fontPoppinsLoaded || !fontRobotoLoaded) return <AppLoading />;
	if (!assets) return <AppLoading />;

	return (
		<NavigationContainer>
			<RootStack.Navigator initialRouteName="Landing" headerMode="none">
				<RootStack.Screen name="Landing" component={LandingScreen} />
				<RootStack.Screen
					name="EmailPassLogin"
					component={EmailPasswordLoginScreen}
					options={{
						gestureDirection: "horizontal",
					}}
				/>
				<RootStack.Screen
					name="EmailPassSignup"
					component={EmailSignupScreen}
				/>
				<RootStack.Screen name="HomeScreen" component={HomeScreen} />
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
