import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PasswordInput from "./PasswordInput";
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
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormValues> = () => {
    console.log();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* left side - Illustrator Section */}
      <div
        className="w-1/3 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "linear-gradient(160deg, #CAE9FF 35.35%, rgba(202, 233, 255, 0.00) 148.95%), url('/public/auth.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-lightgray mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-cover bg-center">
          <div className="h-full flex flex-col justify-center items-center   text-white p-4">
            <img
              src="/public/MedAssist.png"
              className="w-[170px] mb-8 cursor-pointer md:absolute md:mb-0 md:top-5 md:left-5"
              alt="MedAssist Logo"
              onClick={() => { }}
            />
            <div className="w-full max-w-[350px] px-10 py-16 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg flex flex-col items-center">
              {" "}
              <h1
                className="text-font font-semibold mb-2 text-[24px] leading-[33.6px] whitespace-nowrap font-serif"
                style={{ fontFamily: "Lora" }}
              >
                Welcome back to MedAssist{" "}
              </h1>{" "}
              <p className="text-primary text-sm text-justified">
                Your all-in-one solution for seamless medication management and
                adherence.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-4 bg-[#fff]">
        <div className="mb-4 w-11/12">
          <h2 className="text-center text-[#111] font-bold text-2xl mb-0 font-serif">
            Sign In
          </h2>
          <p className="text-center mb-6 text-[#111] text-sm font-inter">
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
                  className={`w-full p-2 rounded border px-4 border-opacity-40 ${errors.email ? "border-[#a10]" : "border-font"
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
            <span onClick={() => navigate("/sign-up")} className="text-primary cursor-pointer"> Sign Up</span>
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
    </div>

  )
}