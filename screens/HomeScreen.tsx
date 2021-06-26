import React from "react";
import { StyleSheet, Text, SafeAreaView, FlatList, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import firebase from "firebase";
import Button from "../components/Button";
import { RootTabParamList } from "../App";
import { globals, layout, typography } from "../styles";
import Card from "../components/Card";
import { dummyPosts } from "../dummydata";
import { colors } from "../styles/variables";
type HomeScreenNavigationProp = StackNavigationProp<RootTabParamList, "Home">;

type Props = {
	navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
	return (
		<SafeAreaView style={[globals.app]}>
			<FlatList
				data={dummyPosts}
				renderItem={({ item }) => (
					<View key={item.id}>
						<Card body={item.body} />
						<View
							style={{
								height: 1,
								backgroundColor: colors.lightGrey,
								width: "100%",
							}}
						/>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
