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
import { BtnChangeAuthScreens } from "../components/BtnChangeAuthScreens/BtnChangeAuthScreens";

const defaultAuthInfo = { name: "", email: "", password: "" };

export const RegistrationScreen = ({ navigation }) => {
  const [authInfo, setAuthInfo] = useState(defaultAuthInfo);
  // const [inputIsFocused, setInputIsFocused] = useState(false);

  const { keyboardIsVisible } = useKeyboardVisibility();

  const keyboardHide = () => {
    // setInputIsFocused(false);
    Keyboard.dismiss();
  };

  const keyboardHidePressBtn = () => {
    keyboardHide();
    setAuthInfo(defaultAuthInfo);
  };

  return (
    <AuthLayout onKeybordHide={keyboardHide}>
      <KeyboardAvoidingView
        style={{ flex: 1, width: "100%", justifyContent: "flex-end" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LoginBox
          registration={true}
          header="Реєстрація"
          keyboardIsVisible={keyboardIsVisible}
        >
          <View style={styles.InputsWrapp}>
            <Input
              isFocusedInput="isFocusedLogin"
              setIsFocusedInput="setIsFocusedLogin"
              valueInput={authInfo.name}
              onChange={(value) => setAuthInfo({ ...authInfo, name: value })}
              placeholder="Логін"
              // onInputIsFocused={setInputIsFocused}
            />
            <View style={styles.InputWrapp}>
              <Input
                isFocusedInput="isFocusedEmail"
                setIsFocusedInput="setIsFocusedEmail"
                valueInput={authInfo.email}
                onChange={(value) => {
                  setAuthInfo({ ...authInfo, email: value });
                }}
                placeholder="Єлектронна адреса"
                // onInputIsFocused={setInputIsFocused}
              />
            </View>
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
              <Btn onPressBtn={keyboardHidePressBtn}>Зареєструватися</Btn>
              <BtnChangeAuthScreens
                onPressNavigate={() => navigation.navigate("Login")}
              >
                Вже є акаунт? Увійти
              </BtnChangeAuthScreens>
              {/* <Text style={styles.redirectText}>Вже є акаунт? Увійти</Text> */}
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
    fontFamily: "Roboto-R",
    fontSize: 16,
  },
});
