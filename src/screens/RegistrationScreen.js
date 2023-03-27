import React from "react";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";

export const RegistrationScreen = () => {
  return (
    <AuthLayout
      onKeybordHide={(e) => {
        if (true) {
          console.log("kk");
        }
      }}
    >
      <InputPassword />
      <Input />
    </AuthLayout>
  );
};
