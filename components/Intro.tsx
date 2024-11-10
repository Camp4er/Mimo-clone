import Image from "next/image";
import apple_store_button from "@/public/assests/applestorebutton.svg";
import google_play_button from "@/public/assests/googleplaybutton.svg";
//import intro_video from "@/public/assests/videos/introvideo.mp4";

export default function Intro() {
  return (
    <section className="mb-16 mt-8 px-6 sm:mt-8 sm:px-10 md:mt-16">
      {/* Background Gradients */}
      <div className="absolute left-[-90px] top-[50px] z-0 hidden h-[800px] w-[800px] overflow-hidden bg-[radial-gradient(circle_at_0%_50%,_var(--tw-gradient-stops))] from-[#8d60e266] to-[#25274600] to-[40%] sm:block"></div>
      <div className="absolute right-0 top-[160px] z-0 hidden h-[800px] w-[800px] overflow-hidden bg-[radial-gradient(circle_at_100%_50%,_var(--tw-gradient-stops))] from-[#8d60e266] to-[#25274600] to-[40%] sm:block"></div>

      <div className="relative z-10 space-y-8">
        <div className="grid w-full grid-flow-row grid-cols-1 gap-6 text-white sm:gap-5 md:grid-cols-2 md:grid-rows-none"></div>

        {/* Main Text & Input Section */}
        <div className="flex flex-col items-baseline space-y-10 py-10 sm:space-y-12 md:max-w-[430px] md:justify-center md:space-y-7 lg:justify-center">
          <h1 className="font-aeonikFono text-white w-[90%] text-[40px] font-bold leading-[48px] sm:w-full sm:text-[48px] sm:leading-[56px] md:w-[468px] md:text-left">
            Learn to code.
            <br />
            Build a portfolio.
            <br />
            Get hired.
          </h1>

          {/* Email Input */}
          <div className="hidden w-full space-y-3 md:block">
            <div className="md:block">
              <div className="flex w-full appearance-none rounded-xl border bg-marketing-form-surface text-white  border-marketing-form-surface">
                <input
                  id="email"
                  placeholder="Your e-mail"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  className="h-12 flex-1 rounded-xl bg-marketing-form-surface px-4 py-[9px] focus:outline-none"
                />
              </div>
              <p className="font-mimopro font-normal flex h-6 items-center text-xs text-marketing-form-error"></p>

              {/* Password Input */}
              <div className="flex w-full appearance-none rounded-xl border bg-marketing-form-surface text-marketing-form-text border-marketing-form-surface">
                <input
                  id="password"
                  placeholder="Your password"
                  name="password"
                  type="password"
                  required
                  autoComplete="off"
                  className="h-12 flex-1 rounded-xl bg-marketing-form-surface px-4 py-[9px] focus:outline-none"
                />
                <button
                  className="px-4 text-marketing-form-placeholder focus:outline-none"
                  type="button"
                >
                  <svg
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.0801 11.98L21.9351 12.31C21.8551 12.49 20.6551 15.125 18.2151 17.155L21.2801 20.22L20.2201 21.28L2.72005 3.77997L3.78005 2.71997L7.01505 5.95497C8.38005 5.09997 10.0351 4.49997 12.0001 4.49997C18.1351 4.49997 21.7651 11.37 21.9151 11.66L22.0801 11.98ZM10.8501 9.78997L14.2101 13.15C14.3901 12.805 14.5001 12.415 14.5001 12C14.5001 10.62 13.3801 9.49997 12.0001 9.49997C11.5801 9.49997 11.1951 9.60997 10.8501 9.78997ZM16.0001 12C16.0001 12.835 15.7401 13.605 15.3051 14.245L17.1251 16.065C18.9101 14.615 20.0051 12.765 20.3951 12.02C19.6301 10.725 16.5251 5.99497 11.9951 5.99497C10.5101 5.99497 9.22505 6.42997 8.12505 7.06497L9.75505 8.69497C10.3951 8.25997 11.1701 7.99997 12.0001 7.99997C14.2051 7.99997 16.0001 9.79497 16.0001 12Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M3.58505 12.005C4.24505 13.265 7.05505 18 12.0001 18C12.8701 18 13.6751 17.845 14.4151 17.595L15.5901 18.77C14.5301 19.22 13.3401 19.5 12.0001 19.5C5.34005 19.5 2.19505 12.605 2.06505 12.31L1.93005 12.005L2.06505 11.7C2.06634 11.6973 2.06788 11.6939 2.06969 11.69C2.16668 11.4813 3.0213 9.64201 4.69505 7.875L5.77005 8.95C4.61005 10.175 3.88005 11.44 3.58505 12.005Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <p className="font-mimopro font-normal flex h-6 items-center text-xs text-marketing-form-error"></p>

              {/* Checkbox */}
              <div className="relative flex items-start">
                <input
                  type="checkbox"
                  id="registration"
                  name="registration"
                  className="absolute top-0 h-6 w-6 cursor-pointer opacity-0"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hidden h-6 w-6 flex-shrink-0 rounded-md bg-marketing-form-surface peer-checked:block"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.905 6.405L9 17.302l-4.177-4.177"
                  ></path>
                </svg>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 rounded-md bg-marketing-form-surface text-marketing-form-surface peer-checked:hidden"
                >
                  <path
                    d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <label
                  htmlFor="registration"
                  className="ml-2 text-xs leading-6 text-marketing-form-text"
                >
                  I agree to Mimo's{" "}
                  <a
                    href="https://mimo.org/terms"
                    className="underline decoration-1"
                  >
                    Terms of Service
                  </a>
                  .
                </label>
              </div>
              <span className="flex h-6 items-center px-[3px] text-xs text-error-default-light"></span>
              <div className="flex h-14 flex-col items-center space-y-3">
                <button className="flex h-full w-full items-center justify-center rounded-xl border border-transparent bg-primary-default-light px-4 py-2 text-base font-semibold text-text-reversed-light shadow-sm focus:outline-none">
                  Sign up and learn for free
                </button>
              </div>
            </div>

            {/* Google Sign-up */}
            <div className="text-marketing-button-secondary-text">
              <button className="flex h-14 w-full items-center justify-center space-x-2 rounded-xl bg-marketing-button-secondary-enabled px-3 undefined">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0"
                >
                  <path
                    d="M22.0455 12.2366C22.0455 11.3733 21.9755 10.7433 21.8242 10.09H11.9824V13.9866H17.7593C17.6429 14.9549 17.0139 16.4133 15.6162 17.3932L15.5966 17.5237L18.7084 19.9384L18.924 19.9599C20.904 18.1282 22.0455 15.4332 22.0455 12.2366Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M11.9824 22.5034C14.8126 22.5034 17.1886 21.57 18.924 19.9601L15.6162 17.3933C14.7311 18.0117 13.543 18.4433 11.9824 18.4433C9.21036 18.4433 6.85766 16.6117 6.01898 14.0801L5.89605 14.0905L2.66036 16.5989L2.61804 16.7167C4.3418 20.1466 7.88253 22.5034 11.9824 22.5034Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M6.01904 14.0801C5.79775 13.4268 5.66968 12.7267 5.66968 12.0034C5.66968 11.2801 5.79775 10.5801 6.0074 9.92678L6.00153 9.78764L2.72529 7.23901L2.6181 7.29009C1.90765 8.71343 1.5 10.3118 1.5 12.0034C1.5 13.6951 1.90765 15.2934 2.6181 16.7167L6.01904 14.0801Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M11.9824 5.56337C13.9507 5.56337 15.2784 6.41503 16.0355 7.12674L18.9939 4.2334C17.177 2.54175 14.8126 1.50342 11.9824 1.50342C7.88253 1.50342 4.3418 3.86005 2.61804 7.29001L6.00734 9.9267C6.85766 7.39505 9.21036 5.56337 11.9824 5.56337Z"
                    fill="#EB4335"
                  ></path>
                </svg>
                <p className="font-mimopro text-[12px] font-bold tablet:text-[14px] ml-2 leading-[14px] text-marketing-button-secondary-text">
                  Sign in with Google
                </p>
              </button>
            </div>
          </div>

          {/* App Store Buttons (visible on mobile) */}
          <div className="flex h-16 flex-shrink space-x-2 lg:hidden">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://itunes.apple.com/us/app/mimo-learn-how-to-code-through/id1133960732?mt=8&amp;at=1000lpyT"
            >
              <Image
                src={apple_store_button}
                alt="applestore"
                width={180}
                height={60}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://play.google.com/store/apps/details?id=com.getmimo"
            >
              <Image
                src={google_play_button}
                alt="playstore"
                width={180}
                height={60}
              />
            </a>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative flex min-h-[300px] w-full self-center justify-self-center md:h-full md:w-full lg:max-w-[668px]">
          <div className="flex w-full flex-col items-center justify-center">
            <video
              autoPlay
              loop
              muted
              src="/assets/videos/introvideo.mp4"
              className="mx-auto overflow-hidden rounded-2xl object-contain"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
