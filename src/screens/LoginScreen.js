import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  // TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { useKeyboardVisibility } from "../hooks/useKeyboardVisibility";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { Btn } from "../components/Btn/Btn";
import { LoginBox } from "../components/LoginBox/LoginBox";

const defaultLoginInfo = { email: "", password: "" };

export const LoginScreen = () => {
  const [authInfo, setAuthInfo] = useState(defaultLoginInfo);
  // const [inputIsFocused, setInputIsFocused] = useState(false);

  const { keyboardIsVisible } = useKeyboardVisibility();

  const keyboardHide = () => {
    // setInputIsFocused(false);
    Keyboard.dismiss();
  };

  const keyboardHidePressBtn = () => {
    keyboardHide();
    setAuthInfo(defaultLoginInfo);
  };

  return (
    <AuthLayout onKeybordHide={keyboardHide}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LoginBox
          registration={true}
          header="Увійти"
          keyboardIsVisible={keyboardIsVisible}
        >
          <View style={styles.InputsWrapp}>
            <Input
              isFocusedInput="isFocusedEmail"
              setIsFocusedInput="setIsFocusedEmail"
              valueInput={authInfo.name}
              onChange={(value) => setAuthInfo({ ...authInfo, email: value })}
              placeholder="Єлектронна адреса"
              // onInputIsFocused={setInputIsFocused}
            />
            <View style={styles.InputWrapp}>
              <InputPassword
                valuePassword={authInfo.password}
                onChangeText={(value) =>
                  setAuthInfo({ ...authInfo, password: value })
                }
                placeholder="Пароль"
                // onInputIsFocused={setInputIsFocused}
              />
            </View>
            <View
              style={[
                styles.btnWrapp,
                { display: keyboardIsVisible ? "none" : "flex" },
              ]}
            >
              <Btn onPressBtn={keyboardHidePressBtn}>Увійти</Btn>
              <Text style={styles.redirectText}>
                Немає акаунту? Зареєструватися
              </Text>
            </View>
          </View>
        </LoginBox>
      </KeyboardAvoidingView>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  InputsWrapp: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
  },
  InputWrapp: {
    marginTop: 15,
  },
  btnWrapp: {
    marginTop: 40,
  },
  redirectText: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: "center",
    color: "#1B4371",
  },
});
