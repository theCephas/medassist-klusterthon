import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../assets/medassist.svg";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
});

interface FormValues {
  username: string;
}

export function WelcomeScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    console.log();
  };

  return (
    <section className="w-full h-auto flex flex-col justify-start items-center lg:flex-row lg:h-screen">
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
      <div className="w-full max-w-[400px] bg-white flex flex-col justify-center items-center pt-8 pb-8 sm:max-w-[500px] md:max-w-[650px] lg:max-w-[60%] lg:h-full lg:overflow-y-auto">
        <div className="mb-4 w-11/12">
          <h2 className="text-center font-bold text-2xl mb-0">
            Welcome on board!
          </h2>
          <p className="text-center mb-6">
            What name would you like us to call you?
          </p>
        </div>

        <form
          id="WelcomeBoard"
          className="w-full max-w-[600px] px-8 md:w-11/12 lg:w-8/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full mb-5">
            <label
              htmlFor="email-sign-in"
              className="font-medium font-lora mb-2 inline-block"
            >
              Your Name?
            </label>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter your Username"
                  className={`w-full p-2 rounded border px-4 ${
                    errors.username ? "border-[#a10]" : "border-font"
                  } focus:border-primary focus:outline-none placeholder:font-inter placeholder:text-font placeholder:text-sm`}
                />
              )}
            />
            <p className="text-[#a10]">{errors.username?.message}</p>
          </div>

          <button
            type="submit"
            className="bg-primary w-full p-2 mt-3 rounded-md text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}
