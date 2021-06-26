import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { typography } from "../../styles";
import { colors } from "../../styles/variables";
import Button from "../Button";

import { Ionicons } from "@expo/vector-icons";

interface CardProps {
	body?: string;
}

export default function Card({ body = "Card body" }: CardProps) {
	const [liked, setLiked] = useState(false);
	return (
		<View style={styles.container}>
			<Image
				style={{ width: 48, height: 48, borderRadius: 50, marginRight: 15 }}
				source={{ uri: "https://picsum.photos/id/237/48/48" }}
			/>
			<View style={styles.info}>
				{/* header */}
				<View style={styles.header}>
					<Text style={typography.boldText}>User name</Text>
					<Text
						style={[
							typography.caption,
							{ marginLeft: 5, color: colors.lightGrey },
						]}
					>
						@username
					</Text>
					<View
						style={{
							height: 3,
							width: 3,
							borderRadius: 50,
							backgroundColor: colors.lightGrey,
							marginLeft: 5,
						}}
					/>

					<Text
						style={[
							typography.caption,
							{ marginLeft: 5, color: colors.lightGrey },
						]}
					>
						12h
					</Text>
				</View>
				{/* post content */}

				<Text style={[typography.body, { marginTop: 10 }]}>{body}</Text>
				{/* footer buttons */}

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginTop: 15,
					}}
				>
					<TouchableOpacity
						style={{
							alignItems: "center",
							justifyContent: "center",
							width: "50%",
						}}
					>
						<Ionicons name="chatbubble-outline" size={24} color={colors.grey} />
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: "center",
							justifyContent: "center",
							width: "50%",
						}}
						onPress={() => setLiked(!liked)}
					>
						<Ionicons
							name={liked ? "heart" : "heart-outline"}
							size={24}
							color={liked ? colors.red : colors.grey}
						/>
					</TouchableOpacity>
					{/* <Button title="Comment" block={false} />

					<Button title="Heart" block={false} /> */}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	info: {
		flexShrink: 1,
	},

	header: {
		flexDirection: "row",
		alignItems: "center",
	},
});
