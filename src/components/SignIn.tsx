export function SignIn() {
  return (
    <section className="sign-up">
      <div className="welcome">
        <div className="welcome-box">
          <h1 className="welcome-title">Welcome back to MedAssist</h1>
          <p className="welcome-text">
            Your all-in-one solution for seamless medication management and
            adherence.
          </p>
        </div>
      </div>
      <div className="sign-up-form">
        <div className="form-heading">
          <h2 className="form-title">Sign In</h2>
          <p className="form-text">Sign In to Continue using MedAssist</p>
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

          <p className="text-right">Forget Password ?</p>

          <button
            type="submit"
            className="bg-primary w-full p-2 mt-3 rounded-md text-white"
          >
            Continue
          </button>

          <p className="my-3 text-center">
            Don’t have an account?
            <span className="text-primary"> Sign up</span>
          </p>

          <div className="divider">or</div>
          {/* <button className="flex justify-center items-center gap-2 bg-secondary w-full p-2 rounded-md mt-5 text-font font-medium">
            <FcGoogle /> Sign in with Google
          </button> */}
        </form>
      </div>
    </section>
  );
}