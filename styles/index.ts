import { StyleSheet } from "react-native";
import { colors } from "./variables";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import {
	Roboto_300Light,
	Roboto_400Regular,
	Roboto_700Bold,
} from "@expo-google-fonts/roboto";
const globals = StyleSheet.create({
	app: {
		backgroundColor: colors.brand.dark,
		color: colors.white,
		flex: 1,
	},
});

const typography = StyleSheet.create({
	body: {
		color: colors.white,
		fontFamily: "Roboto_400Regular",
		fontSize: 16,
		lineHeight: 20,
	},
	link: {
		color: colors.brand.primary,
		fontFamily: "Roboto_400Regular",
		fontSize: 14,
	},
	boldText: {
		color: colors.white,
		fontFamily: "Roboto_700Bold",
		fontSize: 18,
		lineHeight: 21,
		letterSpacing: -0.54,
	},
	caption: {
		color: colors.white,
		fontFamily: "Roboto_300Light",
		fontSize: 14,
	},
	h1: {
		fontFamily: "Poppins_700Bold",
		color: colors.white,
		fontSize: 40,
		letterSpacing: -1.2,
		lineHeight: 60,
	},
	h2: {
		fontFamily: "Poppins_700Bold",
		color: colors.white,
		fontSize: 32,
		letterSpacing: -0.64,
		lineHeight: 48,
	},
	h3: {
		fontFamily: "Poppins_700Bold",
		color: colors.white,
		fontSize: 24,
		letterSpacing: -0.48,
		lineHeight: 36,
	},
	h4: {
		fontFamily: "Poppins_700Bold",
		color: colors.white,
		fontSize: 16,
		lineHeight: 24,
	},
});

const layout = StyleSheet.create({
	landingContainer: {
		padding: 40,
	},
	defaultContainer: {
		paddingHorizontal: 20,
	},
});

export { globals, typography, layout };
