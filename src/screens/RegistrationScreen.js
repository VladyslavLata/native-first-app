import { AuthLayout } from "../components/AuthLayout/AuthLayout";
import { Input } from "../components/Input/Input";

export const RegistrationScreen = () => {
  return (
    <AuthLayout
      onKeybordHide={(e) => {
        if (true) {
          console.log("kk");
        }
      }}
    >
      <Input />
    </AuthLayout>
  );
};
