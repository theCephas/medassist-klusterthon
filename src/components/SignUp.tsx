import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PasswordInput from "./PasswordInput";
import Logo from "../assets/medassist.svg";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../services/hooks";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

interface FormValues {
  email: string;
  password: string;
}

const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;

export function SignUp() {


  const [, setUsers] = useState({});
  //@ts-expect-error this is an auth type check
  const handleCallBackResponse = (response) => {
    console.log("Encoded jwt ID token:" + response.credential);
    const userObject = jwtDecode(response.credential);
    setUsers(userObject);
  };

  useEffect(() => {
    //@ts-expect-error this is an auth type check
    window.google?.accounts.id.initialize({
      client_id: clientID,
      callback: handleCallBackResponse,
    });
    //@ts-expect-error this is an auth type check
    window.google?.accounts.id.renderButton(
      document.getElementById("loginBtn"),
      {
        theme: "#000",
        size: "large",
      }
    );
    //@ts-expect-error this is an auth type check
    window.google.accounts.id.renderButton(
      document.getElementById("SignUpBtn"),

      {
        theme: "outline",
        size: "large",
      }
    );
    //@ts-expect-error this is an auth type check
    window.google.account?.id.prompt();
  }, []);
  const [loading, setLoading] = useState(false)
  const register = useRegister();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setLoading(true)
    console.log(data)
    register
      .mutateAsync(data)
      .then(() => {
        navigate("/sign-in");
        setLoading(false);
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center lg:flex-row lg:h-screen">
      <div className="w-full flex  flex-col justify-center items-center bg-grad bg-no-repeat bg-bottom bg-cover p-5 pb-8 lg:w-2/5 lg:h-full">
        <img
          src={Logo}
          className="w-[170px] mb-8 cursor-pointer lg:absolute lg:top-5 lg:left-20"
          alt="MedAssist Logo"
          onClick={() => {
            navigate("/");
          }}
        />

        <div className="w-full max-w-[350px] p-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-lg">
          <h1 className="text-font font-semibold mb-2 text-xl">
            Welcome back to MedAssist
          </h1>
          <p className="text-primary">
            Your all-in-one solution for seamless medication management and
            adherence.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[400px] bg-white flex flex-col justify-start items-center pt-8 pb-8 sm:max-w-[500px] md:max-w-[650px] lg:max-w-[60%] lg:h-full lg:overflow-y-auto">
        <div className="mb-4 w-11/12">
          <h2 className="text-center font-bold text-2xl mb-0">Sign Up</h2>
          <p className="text-center mb-6">
            Sign Up to Continue using MedAssist
          </p>
        </div>

        <form
          id="SignUp"
          className="w-full max-w-[600px] px-8 md:w-11/12 lg:w-8/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full mb-5">
            <label
              htmlFor="email-sign-in"
              className="font-medium font-lora mb-2 inline-block"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Email"
                  className={`w-full p-2 rounded border px-4 border-font border-opacity-40 ${
                    errors.email ? "border-[#a10]" : "border-font"
                  } focus:border-primary focus:outline-none placeholder:font-inter placeholder:text-font placeholder:text-sm`}
                />
              )}
            />
            <p className="text-[#a10]">{errors.email?.message}</p>
          </div>
          <div className="">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  label="Password"
                  type="password"
                  className="font-medium font-lora mb-2 inline-block"
                  placeholder="Password"
                  //@ts-expect-error This is a type check error
                  field={field}
                  error={errors.password}
                  isPassword={true}
                />
              )}
            />
          </div>
          <div className="">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  label="Confirm Password"
                  type="password"
                  className="font-medium font-lora mb-2 inline-block"
                  placeholder="Confirm Password"
                  //@ts-expect-error This is a type check error
                  field={field}
                  error={errors.password}
                  isPassword={true}
                />
              )}
            />
          </div>

          <button
            type="submit"
            className="bg-primary w-full p-2 mt-3 rounded-md text-white"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="white"
                />
                <path
                  d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
                  fill="white"
                />
              </svg>
            ) : (
              " Continue"
            )}
          </button>

          <p className="my-3 text-center">
            Already have an account?
            <span
              onClick={() => navigate("/sign-in")}
              className="text-primary cursor-pointer"
            >
              Sign In
            </span>
          </p>

          <div className="flex justify-center gap-3 text-sm items-center uppercase text-center before:inline-block before:flex-grow-[1] before:w-[40%] before:h-[1px] before:bg-font before:bg-opacity-50 after:inline-block after:flex-grow-[1] after:w-[40%] after:h-[1px] after:bg-font  after:bg-opacity-50">
            or
          </div>
          <div
            id="SignUpBtn"
            className="flex justify-center items-center bg-secondary gap-2 w-full p-2 rounded-md mt-5 text-font font-medium"
          ></div>
        </form>
      </div>
    </section>
  );
}
