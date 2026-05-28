import { FormProvider, useForm } from "react-hook-form";

import { Eye, EyeOffIcon, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import signup from "../../assets/images/authenticationImages/Signup.png";
const Signup = () => {
  const methods = useForm();

  const { handleSubmit, register } = methods;

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const onSubmit = (data) => {
    console.log({ data });
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:p-5 p-2 w-[350px]  !border border-gray-200 shadow-sm rounded-2xl m-auto  text-gray-600"
      >
        <img src={signup} className="w-[220px] !h-[150px] m-auto" />
        <h1 className="text-[24px] !font-semibold p-1 text-center ">
          Create a New Account
        </h1>
        <p
          className="text-[18px]  text-center  mb-2
        "
        >
          Sign up to get started!
        </p>

        <div className="relative">
          {/* <label htmlFor="fullName" className="block">
            Full Name
          </label> */}
          <User className="absolute top-5 left-4 size-5" />
          <input
            name="fullName"
            type="text"
            {...register("fullName")}
            className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
            placeholder="Full Name"
          />
        </div>

        <div className="relative">
          {/* <label htmlFor="email" className="block">
            Email
          </label> */}
          <Mail className="absolute top-5 left-4 size-5" />
          <input
            name="email"
            type="email"
            {...register("email")}
            className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
            placeholder="Email"
          />
        </div>

        <div className="relative">
          {/* <label htmlFor="mobileNumber" className="block">
            {" "}
            Mobile Number
          </label> */}
          <Phone className="absolute top-5 left-4 size-5" />
          <input
            name="mobileNumber"
            type="text"
            {...register("mobileNumber")}
            className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
            placeholder="Mobile Number"
          />
        </div>

        <div className="relative">
          {/* <label htmlFor="Password" className="block">
            Password
          </label> */}
          <LockKeyhole className="absolute top-5 left-4 size-5" />
          <input
            name="password"
            type={showPassword?.password ? "text" : "password"}
            {...register("password")}
            className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
            placeholder="Password"
          />
          <span
            onClick={() => {
              setShowPassword((prev) => ({
                ...prev,
                password: !showPassword?.password,
              }));
            }}
          >
            {showPassword?.password ? (
              <Eye className="absolute top-5 right-4 size-5 " />
            ) : (
              <EyeOffIcon className="absolute top-5 right-4 size-5 text-gray-400" />
            )}
          </span>
        </div>

        <div className="relative">
          {/* <label htmlFor="confirmPassword" className="block">
            Confirm Password
          </label> */}
          <LockKeyhole className="absolute top-5 left-4 size-5" />
          <input
            name="confirmPassword"
            type={showPassword?.confirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            className="border-2 border-gray-200 shadow-xs px-12  my-1 rounded-full w-full h-[48px] focus:outline-none"
            placeholder="Confirm Password"
          />
          <span
            onClick={() => {
              setShowPassword((prev) => ({
                ...prev,
                confirmPassword: !showPassword?.confirmPassword,
              }));
            }}
          >
            {showPassword?.confirmPassword ? (
              <Eye className="absolute top-5 right-4 size-5" />
            ) : (
              <EyeOffIcon className="absolute top-5 right-4 size-5 text-gray-400" />
            )}
          </span>
        </div>
        <div className="flex flex-col justify-end mt-2 gap-1.5">
          <button
            type="submit"
            className="border-none !rounded-full p-2 !border-2 !border-gray-500  !bg-blue-700 !text-white font-bold w-full h-[48px] "
          >
            Sign Up
          </button>
          <p className="m-auto">
            Already have an account?{" "}
            <a href="./Login" className="text-blue-600 font-bold">
              Login
            </a>
          </p>
        </div>
      </form>
    </FormProvider>
  );
};

export default Signup;
