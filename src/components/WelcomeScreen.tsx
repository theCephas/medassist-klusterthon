import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
});

interface FormValues {
  username: string;
}

export function WelcomeBoard() {
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
    <section className="w-full h-auto flex flex-col justify-between md:flex-row">
      <div className="w-full flex justify-center items-center bg-grad bg-no-repeat bg-bottom bg-cover p-5 md:w-2/5">
        <div className="w-full max-w-[350px] p-8 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg">
          <h1 className="text-font font-semibold mb-2 text-xl">
            Welcome back to MedAssist
          </h1>
          <p className="text-primary">
            Your all-in-one solution for seamless medication management and
            adherence.
          </p>
        </div>
      </div>
      <div className="w-full bg-white flex flex-col justify-center items-center pt-4 pb-8  md:w-[60%]">
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
