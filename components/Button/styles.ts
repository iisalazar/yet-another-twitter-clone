import { StyleSheet } from "react-native";
import { colors } from "../../styles/variables";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
const styles = StyleSheet.create({
	defaultContainer: {
		paddingVertical: 18,
		paddingHorizontal: 28,
		backgroundColor: colors.brand.primary,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},

	defaultText: {
		color: colors.white,
		fontSize: 16,
		fontFamily: "Roboto_700Bold",
	},
	ghostContainer: {
		paddingVertical: 18,
		paddingHorizontal: 28,
		backgroundColor: "transparent",
		borderColor: colors.brand.primary,
		borderWidth: 2,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	ghostText: {
		color: colors.brand.primary,
		fontSize: 16,
		fontFamily: "Roboto_700Bold",
	},
});

export default styles;
