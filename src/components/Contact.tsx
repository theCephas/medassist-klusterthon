import ContactImg from "/public/contact.jpg";

function Contact() {
  return (
    <section className="bg-white py-16">
      <div className="container px-4 mx-auto lg:max-w-[1140px]">
        <div className="relative flex flex-col md:flex-row md:justify-end">
          <img
            src={ContactImg}
            className="h-[150px] w-full object-cover md:object-center md:h-full md:w-[30%] md:absolute md:top-0 md:left-0 md:z-[1] lg:object-left"
            alt="contact"
          />
          <div className="py-5 pb-8 px-8 bg-home flex flex-col justify-center md:p-8 md:w-[70%] lg:px-16">
            <h2 className="text-primary text-3xl capitalize text-center">
              Get in touch
            </h2>
            <p className="text-center mt-2">
              Got questions or need assistance? Reach out to us – we're here to
              support you on your health and wellness journey
            </p>

            <form id="contact" className="mt-8">
              <div className="mb-5">
                <label
                  htmlFor="fname"
                  className="text-font font-semibold mb-2 inline-block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Full name"
                  className="py-3 px-5 w-full border border-[#C7C7C7] rounded-md placeholder:text-sm placeholder:text-[#C7C7C7] focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="text-font font-semibold mb-2 inline-block"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email address"
                  className="py-3 px-5 w-full border border-[#C7C7C7] rounded-md placeholder:text-sm placeholder:text-[#C7C7C7] focus:outline-none focus:border-primary"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="fname"
                  className="text-font font-semibold mb-2 inline-block"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write your message"
                  className="
                  py-3 px-5 w-full h-[150px] border border-[#C7C7C7] rounded-md placeholder:text-sm placeholder:text-[#C7C7C7] focus:outline-none resize-none focus:border-primary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="block rounded-[10px] capitalize text-white bg-primary p-3 w-4/5 mx-auto"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
