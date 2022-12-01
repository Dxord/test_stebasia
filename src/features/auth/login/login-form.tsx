import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  KeyboardAvoidingView,
  Pressable,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as yup from "yup";
import { useLoginMutation } from "../../../app/services_example";
import { useAppDispatch, useAppSelector } from "../../../common/hooks";
import { storeCredential } from "../auth.slice";
import { errorToast, successToast } from "../../../common/components/toast";
import AsyncStorage from "@react-native-async-storage/async-storage";
const loginUserSchema = yup.object({
  email: yup.string().required().email().label("Email"),
  pass: yup.string().required().min(8).label("Password"),
});

type LoginUser = yup.InferType<typeof loginUserSchema>;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const isAuthStoreLoading = useAppSelector((state) => state.auth.isLoading);
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const [tokenRequest, setTokenRequest] = useState("");
  const { control, handleSubmit } = useForm<LoginUser>({
    resolver: yupResolver(loginUserSchema),
  });

  useEffect(() => {}, []);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const resultLogin = await login({
        email: data.email,
        password: data.pass,
      });

      console.log("resultLogin", resultLogin);
      let dataResult = resultLogin.data;
      if (!dataResult.data.access_token) {
        errorToast(resultLogin.data.message);
      } else {
        let stringRes = JSON.stringify(dataResult.data);
        await AsyncStorage.setItem("dataLogin", stringRes);
        successToast("Login Berhasil");
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }],
        });
      }
      dispatch(
        storeCredential({
          token: resultLogin.access_token,
        })
      );
    } catch (error) {
      console.log("auth login", JSON.stringify(error));
    }
  });
  return (
    <KeyboardAvoidingView
      behavior="padding"
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Stack space={4} my={8}>
        <Stack space={2} marginBottom={4}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FormControl isInvalid={Boolean(error)}>
                <FormControl.Label
                  _text={{
                    color: useColorModeValue("text.100", "text.100"),
                    fontWeight: "500",
                  }}
                >
                  Email address
                </FormControl.Label>
                <Input
                  leftElement={
                    <Icon
                      marginLeft={4}
                      as={MaterialCommunityIcons}
                      size="md"
                      name={"email"}
                      mr="4"
                      color="#000000"
                    />
                  }
                  fontSize="md"
                  borderRadius={12}
                  minH={70}
                  variant="filled"
                  bgColor="#F7F7FC"
                  autoCapitalize="none"
                  placeholder="Email address"
                  keyboardType="email-address"
                  autoComplete="email"
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage>
                  {error?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />

          <Controller
            control={control}
            name="pass"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FormControl isInvalid={Boolean(error)}>
                <FormControl.Label
                  _text={{
                    color: useColorModeValue("text.100", "text.100"),
                    fontWeight: "500",
                  }}
                >
                  Kata Sandi
                </FormControl.Label>
                <Input
                  leftElement={
                    <Icon
                      marginLeft={4}
                      as={MaterialCommunityIcons}
                      size="md"
                      name={"lock"}
                      mr="4"
                      color="#000000"
                    />
                  }
                  fontSize="md"
                  borderRadius={12}
                  minH={70}
                  variant="filled"
                  bgColor="#F7F7FC"
                  type={!showPassword ? "password" : "text"}
                  rightElement={
                    <Pressable
                      _pressed={{
                        bg: "rgba(255,255,255,0.2)",
                      }}
                      _light={{
                        bg: "transparent",
                      }}
                      _dark={{
                        bg: "transparent",
                      }}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Icon
                        as={MaterialCommunityIcons}
                        size="md"
                        name={!showPassword ? "eye" : "eye-off"}
                        mr="4"
                        color="gray.400"
                      />
                    </Pressable>
                  }
                  placeholder="Password"
                  value={value}
                  onChangeText={onChange}
                />
                <FormControl.ErrorMessage>
                  {error?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            )}
          />
        </Stack>
        <HStack px={4} justifyContent="space-between" alignItems="center">
          <HStack space={2}>
            <Checkbox value="null" />
            <Text>Remember me</Text>
          </HStack>
          <Text>Forgot Password?</Text>
        </HStack>
        <Flex my={4}>
          {isLoading && <ActivityIndicator color="#00A888" />}
          {!isLoading && (
            <VStack space={4} justifyContent="flex-end">
              <Button
                _text={{
                  fontSize: "lg",
                }}
                _pressed={{
                  bg: "#00A888",
                }}
                _light={{
                  bg: "#00A79D",
                }}
                _dark={{
                  bg: "#00A79D",
                }}
                minH={16}
                onPress={onSubmit}
                isLoading={isLoading || isAuthStoreLoading}
              >
                Login
              </Button>
            </VStack>
          )}
        </Flex>

        <HStack space={2} alignSelf="center">
          <Text>Don’t have an account?</Text>
          <Pressable>
            <Text fontWeight="400" color="#00A79D">
              Register
            </Text>
          </Pressable>
        </HStack>
      </Stack>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;
