import React, { useState } from "react";
import { Text, SafeAreaView, Image, View, TextInput } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import { globals, layout, typography } from "../styles";
import { colors } from "../styles/variables";
import firebase from "firebase";
import Button from "../components/Button";
import Input from "../components/Input";
import { RootStackParamList } from "../App";

type EmailPasswordLoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	"EmailPassLogin"
>;

type Props = {
	navigation: EmailPasswordLoginScreenNavigationProp;
};

function EmailPasswordLoginScreen({ navigation }: Props) {
	const [state, setState] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});

	const [errMsg, setErrMsg] = useState("");

	const handleChange = (field: "email" | "password", value: string) => {
		setState({ ...state, [field]: value });
	};

	const onLogin = () => {
		setErrMsg("");
		firebase
			.auth()
			.signInWithEmailAndPassword(state.email, state.password)
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
				console.log(code);
			});
	};
	return (
		<SafeAreaView style={[globals.app, layout.landingContainer]}>
			<View style={{ marginVertical: 40 }}>
				<Image source={require("../assets/Logo.png")} height={40} width={40} />
			</View>
			<Text style={typography.h2}>Sign in using e-mail & password</Text>
			<View style={{ marginVertical: 20 }}>
				<Input
					placeholder="Email"
					value={state.email}
					onChangeText={(value) => handleChange("email", value)}
				/>
				<Input
					style={{ marginTop: 10 }}
					placeholder="Password"
					secureTextEntry={true}
					value={state.password}
					onChangeText={(value) => handleChange("password", value)}
				/>
			</View>
			<Button title="Sign in" onPress={() => onLogin()} variant="default" />
			<Text style={{ color: colors.red, textAlign: "center", marginTop: 10 }}>
				{errMsg}
			</Text>
		</SafeAreaView>
	);
}

export default EmailPasswordLoginScreen;
