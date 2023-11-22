export function WelcomeBoard() {
  return (
    <section className="sign-up">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome back to MedAssist</h1>
        <p className="welcome-text">
          Your all-in-one solution for seamless medication management and
          adherence.
        </p>
      </div>
      <div className="sign-up-form">
        <div className="form-heading">
          <h2 className="form-title">Welcome on board!</h2>
          <p className="form-text"> What name would you like us to call you?</p>
        </div>

        <form id="form-signup">
          <div className="input-field">
            <label htmlFor="email-sign-in">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="off"
              id="email-sign-in"
            />
          </div>

          <button
            type="submit"
            className="bg-primary w-full p-2 mt-3 rounded-md text-white"
          >
            Continue
          </button>

          <p className="my-3 text-center">
            Already have an account?
            <span className="text-primary cursor-pointer"> Sign In</span>
          </p>

          <div className="divider">or</div>
          {/* <button className="flex justify-center items-center gap-2 bg-secondary w-full p-2 rounded-md mt-5 text-font font-medium">
            <FcGoogle /> Sign up with Google
          </button> */}
        </form>
      </div>
    </section>
  );
}