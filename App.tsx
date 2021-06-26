import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
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
	const [state, setState] = useState({ loggedIn: false });

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			console.log("Auth State Changed");

			if (user) {
				setState({ loggedIn: true });
			} else {
				setState({ loggedIn: false });
			}
		});
		return unsubscribe;
		// eslint-disable-next-line
	}, []);
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
				{state.loggedIn ? (
					<RootStack.Screen name="HomeScreen" component={HomeScreen} />
				) : (
					<>
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
					</>
				)}
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
