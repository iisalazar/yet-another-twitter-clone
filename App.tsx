import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { firebaseConfig } from "./firebase";
import { Image, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { StackHeaderTitleProps } from "@react-navigation/stack";
import {
	LandingScreen,
	EmailPasswordLoginScreen,
	EmailSignupScreen,
	HomeScreen,
	ProfileScreen,
	SearchScreen,
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
import { layout, typography } from "./styles";
import { colors } from "./styles/variables";

export type RootStackParamList = {
	Landing: undefined;
	EmailPassLogin: undefined;
	EmailPassSignup: undefined;
};

export type RootTabParamList = {
	Home: undefined;
	Profile: undefined;
	Search: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootTab = createBottomTabNavigator<RootTabParamList>();

const HomeStack = createStackNavigator();

function LogoTitle({ title }: { title: string }) {
	return (
		<View
			style={{
				padding: 0,
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<Image
				style={{ width: 36, height: 36, borderRadius: 50, marginRight: 15 }}
				source={{ uri: "https://picsum.photos/id/237/36/36" }}
			/>
			<Text style={typography.h3}>{title}</Text>
		</View>
	);
}

function HomeStackNavigator() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerTintColor: "#fff",
					headerStyle: {
						backgroundColor: colors.brand.dark,
						borderBottomColor: colors.lightGrey,
						borderBottomWidth: 1,
					},
					headerTitle: (props) => <LogoTitle title="Home" {...props} />,
				}}
			/>
		</HomeStack.Navigator>
	);
}

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
			{state.loggedIn ? (
				<RootTab.Navigator
					initialRouteName="Home"
					tabBarOptions={{
						tabStyle: {
							backgroundColor: colors.brand.dark,
						},
						activeTintColor: colors.brand.primary,
						inactiveTintColor: colors.lightGrey,
					}}
				>
					<RootTab.Screen
						name="Home"
						component={HomeStackNavigator}
						options={{
							title: "Home",
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="home" size={size} color={color} />
							),
						}}
					/>
					<RootTab.Screen
						name="Search"
						component={SearchScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<Ionicons name="search" size={size} color={color} />
							),
						}}
					/>
					<RootTab.Screen
						name="Profile"
						component={ProfileScreen}
						options={{
							tabBarIcon: ({ color, size }) => (
								<AntDesign name="user" size={size} color={color} />
							),
						}}
					/>
				</RootTab.Navigator>
			) : (
				<RootStack.Navigator initialRouteName="Landing" headerMode="none">
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
				</RootStack.Navigator>
			)}
		</NavigationContainer>
	);
}
