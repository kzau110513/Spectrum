import React, { useState } from "react";
import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage() {
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!image) {
        console.log("no image for upload")
        return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("photo", {
      uri: image,
      name: "photo.jpg",
      type: "image/jpeg",
    } as any);

    try {
      const response = await fetch("http://192.168.86.130:8080/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message)
        alert("Upload successful!");
      } else {
        alert("Upload failed!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
      )}
      {uploading ? (
        <Text>Uploading...</Text>
      ) : (
        <Button title="Upload image" onPress={uploadImage} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginTop: 20,
  },
});
