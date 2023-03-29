import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { Btn } from "../components/Btn/Btn";
import { LoginBox } from "../components/LoginBox/LoginBox";

const defaultAuthInfo = { name: "", email: "", password: "" };

export const RegistrationScreen = () => {
  const [authInfo, setAuthInfo] = useState(defaultAuthInfo);

  return (
    <AuthLayout
      onKeybordHide={(e) => {
        if (true) {
          console.log("kk");
        }
      }}
    >
      <LoginBox registration={true} header="Реєстрація">
        <View style={styles.InputsWrapp}>
          <Input
            isFocusedInput="isFocusedLogin"
            setIsFocusedInput="setIsFocusedLogin"
            valueInput={authInfo.name}
            onChange={(value) => setAuthInfo({ ...authInfo, name: value })}
            placeholder="Логін"
          />
          <View style={styles.InputWrapp}>
            {/* <TextInput
            style={{ width: "100%", height: 50, backgroundColor: "#fff" }}
            value={authInfo.email}
            onChangeText={(value1) => {
              setAuthInfo({ ...authInfo, email: value1 });
            }}
            placeholder="Єлектронна адреса"
          /> */}

            <Input
              isFocusedInput="isFocusedEmail"
              setIsFocusedInput="setIsFocusedEmail"
              valueInput={authInfo.email}
              onChange={(value) => {
                setAuthInfo({ ...authInfo, email: value });
              }}
              placeholder="Єлектронна адреса"
            />
          </View>
          <View style={styles.InputWrapp}>
            <InputPassword
              valuePassword={authInfo.password}
              onChangeText={(value) =>
                setAuthInfo({ ...authInfo, password: value })
              }
              placeholder="Пароль"
            />
          </View>
          <View style={styles.btnWrapp}>
            <Btn>Зареєструватися</Btn>
            <Text style={styles.redirectText}>Вже є акаунт? Увійти</Text>
          </View>
        </View>
      </LoginBox>
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
