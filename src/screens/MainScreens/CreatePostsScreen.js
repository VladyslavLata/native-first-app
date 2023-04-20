import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

import { useKeyboardVisibility } from "../../hooks/useKeyboardVisibility";
import { Btn } from "../../components/Btn/Btn";

export const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [camera, setCamera] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [inputValue, setInputValue] = useState({ name: "", location: "" });
  const { keyboardIsVisible } = useKeyboardVisibility();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const hangeTextInput = (inputName, value) => {
    setInputValue({ ...inputValue, [inputName]: value });
  };

  const hidingKeyboard = (keybordIsVisible) => {
    if (keybordIsVisible) {
      Keyboard.dismiss();
    }
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const onRemovePhoto = async (photo) => {
    if (photo) {
      setPhoto(null);
    }
  };

  const onCleanPost = () => {
    setPhoto(null);
    setInputValue({ name: "", location: "" });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "Roboto-M",
            fontSize: 22,
          }}
        >
          Доступ до камери заблокований
        </Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => hidingKeyboard(keyboardIsVisible)}>
      <View style={styles.wrapp}>
        {!keyboardIsVisible && (
          <>
            <View style={styles.wrappCamera}>
              <Camera style={styles.camera} ref={setCamera}></Camera>
              {photo && (
                <Image
                  source={{ uri: photo }}
                  // contentFit={"contain"}
                  // objectPosition={"10px 10px"}
                  style={styles.img}
                  width="100%"
                  height="100%"
                />
              )}
              <TouchableOpacity
                style={[
                  styles.snap,
                  {
                    backgroundColor: photo
                      ? "rgba(255,255,255, .3)"
                      : "#ffffff",
                  },
                ]}
                activeOpacity={0.6}
                onPress={takePhoto}
              >
                <FontAwesome
                  name="camera"
                  size={24}
                  color={photo ? "#ffffff" : "#bdbdbd"}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.photoTextWrapp}
              activeOpacity={photo ? 0.6 : 1}
              onPress={() => onRemovePhoto(photo)}
            >
              <Text style={styles.photoText}>
                {photo ? "Редагувати фото" : "Завантажте фото"}
              </Text>
            </TouchableOpacity>
          </>
        )}
        <View style={[styles.inputWrapp, { marginTop: 32 }]}>
          <TextInput
            style={[styles.input, { fontFamily: "Roboto-M" }]}
            value={inputValue.name}
            onChange={(value) => hangeTextInput("name", value)}
            cursorColor={"#212121"}
            placeholder={"Назва..."}
            placeholderTextColor={"#bdbdbd"}
          />
        </View>
        <View
          style={[
            styles.inputWrapp,
            { marginTop: 16, marginBottom: 32, position: "relative" },
          ]}
        >
          <SimpleLineIcons
            name="location-pin"
            size={24}
            color="#bdbdbd"
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { fontFamily: "Roboto-R", paddingLeft: 28 }]}
            value={inputValue.location}
            onChange={(value) => hangeTextInput("location", value)}
            cursorColor={"#212121"}
            placeholder={"Місцевість"}
            placeholderTextColor={"#bdbdbd"}
          ></TextInput>
        </View>
        <Btn
          onPressBtn={() => {
            Keyboard.dismiss();
          }}
        >
          Опублікувати
        </Btn>
        {!keyboardIsVisible && (
          <View style={styles.cleanBtnWrapp}>
            <TouchableOpacity
              style={styles.cleanBtn}
              onPress={onCleanPost}
              activeOpacity={0.6}
            >
              <AntDesign name="delete" size={24} color="#bdbdbd" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapp: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    paddingTop: 30,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  wrappCamera: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    // flex: 1,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    backgroundColor: "#f6f6f6",
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  snap: {
    position: "absolute",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  photoTextWrapp: {
    padding: 8,
    paddingLeft: 0,
  },

  photoText: {
    // marginTop: 8,
    color: "#bdbdbd",
    fontFamily: "Roboto-R",
    fontSize: 16,
    lineHeight: 19,
  },
  inputWrapp: {
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
  },
  input: {
    paddingTop: 15,
    paddingBottom: 15,
    // width: "100%",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    // backgroundColor: "red",
  },
  icon: {
    position: "absolute",
    left: 0,
    top: 13,
    zIndex: 1,
  },
  cleanBtnWrapp: {
    marginTop: 16,
    width: "100%",
    alignItems: "center",
  },
  cleanBtn: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f6f6f6",
    borderRadius: 20,
  },
});
