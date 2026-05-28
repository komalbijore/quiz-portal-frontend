import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import login from "../../assets/images/authenticationImages/Login.png";
import { Eye, EyeClosed, EyeOffIcon, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const methods = useForm();

  const { handleSubmit, register } = methods;

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:p-5 p-2 w-[350px]  !border border-gray-200 shadow-sm rounded-2xl m-auto text-gray-600"
        >
          <img src={login} className="w-[250px] !h-[150px] m-auto" />
          <h1 className="text-[24px] !font-semibold p-1 text-center ">
            Welcome Back!
          </h1>
          <p
            className="text-[18px]  text-center  mb-2
        "
          >
            Please Login To Your Account
          </p>
          <div className="relative">
            <Mail className="absolute top-5 left-4 size-5" />
            <input
              name="mobileOrEmail"
              type=""
              {...register("mobileOrEmail")}
              placeholder="Enter Email or Phone Number"
              className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
            />
          </div>
          <div className="relative">
            <LockKeyhole className="absolute top-5 left-4 size-5" />
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              placeholder="Enter Password"
              className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
              disableUnderline
            />
            <span
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <Eye className="absolute top-5 right-4 size-5" />
              ) : (
                <EyeOffIcon className="absolute top-5 right-4 size-5" />
              )}
            </span>
          </div>

          <div className="flex flex-col justify-end mt-2 gap-1.5">
            <button
              type="submit"
              className="border-none !rounded-full p-2 !border-2 !border-gray-500  !bg-blue-700 !text-white font-bold w-full h-[48px] "
            >
              Login
            </button>
            <p className="m-auto">
              Don't have have an account?{" "}
              <a href="./signup" className="text-blue-600 font-bold">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
