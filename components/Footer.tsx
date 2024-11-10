export default function Footer() {
  return (
    <div className="relative z-10 w-full bg-marketing-background-secondary text-marketing-text-primary undefined">
      <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full">
        <div className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] bg-marketing-accent-orange absolute left-[60%] top-[75%]">
          <div className="block bg-marketing-accent-darkBlue absolute left-[-100%] top-[100%] h-[30px] w-[30px] md:h-[60px] md:w-[60px]"></div>
        </div>
        <div className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] bg-marketing-accent-yellow absolute left-[80%] top-[10%]">
          <div className="block bg-marketing-accent-white absolute left-[100%] top-[100%] h-[30px] w-[30px] md:h-[60px] md:w-[60px]"></div>
        </div>
        <div className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] bg-marketing-accent-blue absolute left-[40%] top-[15%]">
        <div className="hidden undefined  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] md:h-[60px] md:w-[60px]"></div>
        </div>
      </div>

      <div className="relative m-auto w-full max-w-[1364px] space-y-14 px-6 py-16 md:px-10">
        <div className="space-y-6">
          <a href="/">
            <svg
              height="28"
              viewBox="0 0 70 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-24"
            >
              <path
                d="M24.3493 3.6048V0H28.5979V3.6048H24.3493ZM24.4854 18.7728V5.424H28.4861V18.7824H24.4854V18.7728Z"
                fill="currentColor"
              ></path>
              <path
                d="M32.0153 18.7776V5.424H35.8799V7.3488C36.1764 6.8496 36.5313 6.4272 36.9639 6.0768C37.3965 5.7264 37.8632 5.4624 38.3785 5.2752C38.8938 5.088 39.4382 4.9968 40.0264 4.9968C40.9208 4.9968 41.7035 5.2128 42.3597 5.64C43.0208 6.0672 43.5556 6.648 43.9785 7.3776C44.5618 6.5424 45.2327 5.9328 45.9958 5.5584C46.7493 5.184 47.6146 4.9968 48.5917 4.9968C49.4715 4.9968 50.2396 5.1648 50.9104 5.4912C51.5764 5.8176 52.1111 6.3552 52.5146 7.08C52.9181 7.8096 53.1174 8.736 53.1174 9.8544V18.7728H49.0875V10.656C49.0875 9.8208 48.9028 9.1968 48.5382 8.7984C48.1736 8.3952 47.6583 8.1984 47.0021 8.1984C46.2875 8.1984 45.7479 8.4 45.3688 8.7984C44.9896 9.1968 44.7563 9.6624 44.6688 10.176C44.5813 10.6896 44.5326 11.2704 44.5326 11.9136V18.7776H40.5854V10.656C40.5854 9.8208 40.4007 9.1968 40.0361 8.7984C39.6715 8.3952 39.1563 8.1984 38.5 8.1984C37.766 8.1984 37.2215 8.4 36.8521 8.7984C36.4875 9.2016 36.2542 9.6528 36.1667 10.1616C36.0792 10.6704 36.0306 11.2512 36.0306 11.9136V18.7776H32.0202Z"
                fill="currentColor"
              ></path>
              <path
                d="M0 4.9968H8.50694V8.1936H12.5417V4.9968H17.0868V8.1936H21.1361V18.7824H17.0868V8.1888H12.5417V18.7776H8.50694V8.1888H3.99583V18.7776H0V4.9968Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.7229 4.9872C58.7028 4.9872 55.4458 8.1696 55.4458 12.096C55.4458 16.0224 58.4549 19.2048 62.7229 19.2048C66.991 19.2048 70 16.0224 70 12.096C70 8.1696 66.7431 4.9872 62.7229 4.9872ZM62.7229 15.9312C60.7785 15.9312 59.1986 14.2128 59.1986 12.0912C59.1986 9.9696 60.7785 8.2512 62.7229 8.2512C64.6674 8.2512 66.2472 9.9696 66.2472 12.0912C66.2472 14.2128 64.6674 15.9312 62.7229 15.9312Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <p className="font-mimopro text-[18px] font-normal leading-[28px] md:text-[20px] md:leading-[32px] w-full">You can code, too.</p>
        </div>

        <div className="grid grid-flow-row-dense grid-cols-2 gap-5 gap-y-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
          <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] md:text-[24px] md:leading-[32px] mb-2">Company</h5>
            <a
              target="_blank"
              href="https://jobs.mimo.org"
              className="hover:text-blue-500"
            >
              <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Careers</p>
            </a>
            <a href="/blog" className="hover:text-blue-500">
            <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Blog</p>
            </a>
            <a
              target="_blank"
              href="https://jobs.mimo.org/#jobs-1d547bc0"
              className="hover:text-blue-500"
            >
              <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Jobs</p>
            </a>
          </div>

          <div className="flex flex-col gap-4 col-start-1 md:col-start-2">
            <h5 className="font-semibold text-lg md:text-xl mb-2">
            <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] md:text-[24px] md:leading-[32px] mb-2">Product</h5>
            </h5>
            <a href="/glossary/html/attributes" className="hover:text-blue-500">
            <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Glossary</p>
            </a>
            <a href="/terms" className="hover:text-blue-500">
            <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Terms of Use</p>
            </a>
            <a href="/privacy" className="hover:text-blue-500">
            <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Privacy Policy</p>
            </a>
          </div>

          <div className="flex flex-col gap-4 col-start-2 md:col-start-3">
          <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] md:text-[24px] md:leading-[32px] mb-2">Useful</h5>
            <a
              href="https://medium.com/getmimo/mimo-press-kit-66f5da5b0375#.yr27fppcr"
              className="hover:text-blue-500"
            >
              <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Press Kit</p>
            </a>
            <a href="/legal" className="hover:text-blue-500">
            <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Imprint</p>
            </a>
            <a
              href="https://getmimo.zendesk.com/hc/en-us"
              className="hover:text-blue-500"
            >
              <p className="font-mimopro text-[14px] font-normal leading-[20px] md:text-[18px] md:leading-[24px] hover:text-marketing-button-primary-hover">Help</p>
            </a>
          </div>

          <div className="flex flex-col gap-4">
          <h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] md:text-[24px] md:leading-[32px] mb-2">Follow us</h5>
            <div className="flex gap-6 max-w-[160px] flex-wrap md:gap-5">
              <a
                href="https://twitter.com/getmimo"
                className="hover:text-blue-500"
                aria-label="Twitter"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.89359C19.2614 4.21835 18.4764 4.43883 17.6568 4.55336C18.4964 4.06006 19.142 3.27785 19.4472 2.34192C18.6606 2.79987 17.7945 3.11906 16.8752 3.29088C16.1259 2.50306 15.0613 2 13.8752 2C11.6174 2 9.79239 3.82458 9.79239 6.08066C9.79239 6.40372 9.82606 6.71664 9.89183 7.01796C6.6462 6.85489 3.86581 5.37441 1.99829 3.1383C1.67809 3.68598 1.49326 4.32345 1.49326 5.00662C1.49326 6.30688 2.16923 7.45167 3.19447 8.09893C2.52927 8.07869 1.90065 7.89635 1.35565 7.59753V7.64463C1.35565 9.51799 2.72311 11.0639 4.5569 11.4205C4.24309 11.5074 3.91293 11.5546 3.57268 11.5546C3.33435 11.5546 3.10427 11.5314 2.88033 11.4872C3.34585 13.0039 4.79951 14.0819 6.50342 14.1123C5.13597 15.1043 3.43648 15.6836 1.56103 15.6836C1.24391 15.6836 0.932756 15.6655 0.628662 15.6309C2.34954 16.6953 4.35481 17.2975 6.50784 17.2975C13.8676 17.2975 17.7716 11.6166 17.7716 6.52538C17.7716 6.37269 17.7672 6.22136 17.7593 6.07065C18.5505 5.51072 19.2271 4.82825 19.7715 4.04734L20 3.89359Z"></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/getmimo"
                className="hover:text-blue-500"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H10.68V12.3H8.13V9.6H10.68V7.56C10.68 5.03 12.28 3.58 14.57 3.58C15.65 3.58 16.59 3.66 16.85 3.7V6.22L15.24 6.23C13.93 6.23 13.69 6.81 13.69 7.71V9.6H16.73L16.28 12.3H13.69V20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
