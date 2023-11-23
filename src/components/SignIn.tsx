import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PasswordInput from "./PasswordInput";
import Logo from "../assets/medassist.svg";
import { useNavigate } from "react-router-dom";

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

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = () => {
    console.log();
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
            Continue
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
    </section>
  );
}
