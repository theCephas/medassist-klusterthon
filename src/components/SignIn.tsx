import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PasswordInput from "./PasswordInput";
import Logo from "../assets/medassist.svg";
import { useNavigate } from "react-router-dom";
// import { useUserLogin } from "../services/hooks";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../layout/AuthContext";

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
// eslint-disable-next-line react-hooks/rules-of-hooks
export function SignIn() {
  const API_URL = "https://medication.onrender.com/api/v1/users/login";
  // const login = useUserLogin();
  const { setAuthenticatedUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.message}`);
        const errorResult = await response.json();
        throw new Error(
          errorResult.message || `HTTP error! Status: ${response.status}`
        );
      }

      const result = await response.json();

      // Assuming the API response contains a property like 'success'
      if (result.status === "success") {
        toast.success("Registration Successfull!");
        setAuthenticatedUser(result.data.username);
        navigate("/Dashboard");
      } else {
        // Handle unsuccessful registration
        console.error("Registration failed:", result.error);
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center lg:flex-row lg:h-screen">
      {/* left side - Illustrator Section */}

      <div className="w-full flex  flex-col justify-center items-center bg-grad bg-no-repeat bg-bottom bg-cover p-5 pb-8 lg:w-2/5 lg:h-full">
        <img
          src={Logo}
          className="w-[170px] mb-8 cursor-pointer lg:absolute lg:top-5 lg:left-20"
          alt="MedAssist Logo"
          onClick={() => {}}
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
          <h2 className="text-center font-bold text-2xl mb-0">Sign In</h2>
          <p className="text-center mb-6">
            Sign In to Continue using MedAssist
          </p>
        </div>

        <form
          id="SignIn"
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
                  className={`w-full p-2 rounded border px-4 border-opacity-40 ${
                    errors.email ? "border-[#a10]" : "border-font"
                  } focus:border-primary focus:outline-none placeholder:font-inter placeholder:text-font placeholder:text-sm`}
                />
              )}
            />
            <p className="text-[#a10]">{errors.email?.message}</p>
          </div>
          <div className="input-field">
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
            Don't have an account?
            <span
              onClick={() => navigate("/sign-up")}
              className="text-primary cursor-pointer"
            >
              {" "}
              Sign Up
            </span>
          </p>

          <div className="flex justify-center gap-3 text-sm items-center uppercase text-center before:inline-block before:flex-grow-[1] before:w-[40%] before:h-[1px] before:bg-font before:bg-opacity-50 after:inline-block after:flex-grow-[1] after:w-[40%] after:h-[1px] after:bg-font  after:bg-opacity-50">
            or
          </div>
          <div
            id="loginBtn"
            className="flex justify-center items-center bg-secondary gap-2 w-full p-2 rounded-md mt-5 text-font font-medium"
          ></div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
