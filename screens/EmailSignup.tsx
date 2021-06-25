import React, { useState } from "react";
import { Text, SafeAreaView, Image, View, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../styles/variables";
import { globals, layout, typography } from "../styles";
import firebase from "firebase";
import Button from "../components/Button";
import Input from "../components/Input";
import { RootStackParamList } from "../App";

type EmailPasswordSignupScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"EmailPassSignup"
>;

type Props = {
	navigation: EmailPasswordSignupScreenNavigationProp;
};

interface IState {
	email: string;
	password: string;
	confirmPass: string;
}

function EmailPasswordSignupScreen({ navigation }: Props) {
	const [state, setState] = useState<IState>({
		email: "",
		password: "",
		confirmPass: "",
	});

	const [errMsg, setErrMsg] = useState("");

	const handleChange = (
		field: "email" | "password" | "confirmPass",
		value: string
	) => {
		setState({ ...state, [field]: value });
	};

	const onSignup = () => {
		setErrMsg("");
		if (state.password !== state.confirmPass) {
			setErrMsg("Passwords do not match");
			return;
		}
		firebase
			.auth()
			.createUserWithEmailAndPassword(state.email, state.password)
			.then((userCredential) => {
				if (userCredential) {
					console.log(userCredential);
					navigation.navigate("HomeScreen");
				}
			})
			.catch((err) => {
				const { code, message } = err;
				if (message) setErrMsg(message);
				console.log(message);
			});
	};

	return (
		<SafeAreaView style={[globals.app, layout.landingContainer]}>
			<View style={{ marginVertical: 40 }}>
				<Image source={require("../assets/Logo.png")} height={40} width={40} />
			</View>
			<Text style={typography.h2}>Sign up to Mocking Tweet</Text>

			<View style={{ marginVertical: 20 }}>
				<Input
					placeholder="Email"
					onChangeText={(value) => handleChange("email", value)}
					value={state.email}
				/>
				<Input
					style={{ marginTop: 10 }}
					placeholder="Password"
					secureTextEntry={true}
					value={state.password}
					onChangeText={(value) => handleChange("password", value)}
				/>
				<Input
					style={{ marginTop: 10 }}
					placeholder="Confirm Password"
					secureTextEntry={true}
					value={state.confirmPass}
					onChangeText={(value) => handleChange("confirmPass", value)}
				/>
			</View>
			<Button title="Sign up" onPress={onSignup} variant="default" />
			<Text style={{ color: colors.red, textAlign: "center", marginTop: 10 }}>
				{errMsg}
			</Text>
		</SafeAreaView>
	);
}

export default EmailPasswordSignupScreen;
