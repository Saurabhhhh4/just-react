import React from "react";
import { View, Alert } from "react-native";
import AuthForm from "../components/AuthForm";
import API from "../utils/api";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const handleLogin = async (formData) => {
    try {
      const { data } = await API.post("/auth/login", formData);
      Alert.alert("Success", "Login successful");
      // Navigate to the main app screen or dashboard
      router.push("/");
    } catch (error) {
      Alert.alert(
        "Error",
        error.response.data.message || "Something went wrong"
      );
    }
  };

  return (
    <View>
      <AuthForm onSubmit={handleLogin} title="Login" />
    </View>
  );
};

export default Login;
