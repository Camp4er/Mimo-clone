import apostrophe from "@/public/assests/apostrophe.svg";
import testament_1 from "@/public/assests/testament_1.webp";
import testament_2 from "@/public/assests/testament_2.webp";
import testament_4 from "@/public/assests/testament_4.webp";
import sideblock from "@/public/assests/sideblock.svg";

export default function Stories() {
  return (
    <section className="mt-20 sm:mt-40 sm:px-10">
      <div className="relative z-10 space-y-6">
        <div className="absolute bottom-0 left-0 top-0 z-[-1] h-full w-full undefined">
          <div className="h-[30px] w-[30px] sm:h-[60px] sm:w-[60px] bg-marketing-accent-orange absolute left-[-5%] top-[40%]">
            <div className="block bg-marketing-accent-darkBlue  absolute left-[-100%] top-[100%]  h-[30px] w-[30px] sm:h-[60px] sm:w-[60px]"></div>
          </div>
          <div className="h-[30px] w-[30px] sm:h-[60px] sm:w-[60px] bg-marketing-accent-blue absolute left-[40%] top-[-12%]">
            <div className="block bg-marketing-accent-darkBlue  absolute left-[100%] top-[100%]  h-[30px] w-[30px] sm:h-[60px] sm:w-[60px]"></div>
          </div>
        </div>
        <div className="hidden w-full sm:grid sm:grid-cols-1 sm:gap-6 lg:grid-cols-2">
          <div>
            <h2 className="font-aeonikFono text-[40px] font-bold leading-[52px] sm:text-[56px] sm:leading-[64px] mb-16 pl-6 text-marketing-text-primary sm:pl-0">
              Mimo learners have inspiring stories to tell
            </h2>
          </div>
          <div className="relative flex max-h-[460px] min-w-[342px] snap-center flex-col rounded-3xl sm:max-h-[300px] sm:flex-row [:nth-child(3)]:relative [:nth-child(3)]:after:absolute [:nth-child(3)]:after:-right-6 [:nth-child(3)]:after:h-full [:nth-child(3)]:after:w-6 [:nth-child(3)]:after:content-[''] sm:[:nth-child(3)]:after:-right-10 sm:[:nth-child(3)]:after:hidden sm:[:nth-child(3)]:after:w-10">
            <div className="max-h-[200px] overflow-auto rounded-t-3xl sm:h-full sm:max-h-full sm:w-[180px] sm:rounded-t-none">
              <img src={apostrophe.src} alt="apostrophe" />
              <img
                alt="Portrait photo of the auther of the quote"
                loading="lazy"
                width="540"
                height="840"
                decoding="async"
                data-nimg="1"
                className="h-full w-full self-center object-cover"
                src={testament_1.src}
              />
            </div>
            <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary sm:space-y-6 sm:rounded-r-3xl sm:rounded-bl-none sm:p-10">
              <p className="font-mimopro text-[20px] font-normal italic leading-[28px] sm:text-[24px] sm:leading-[32px]">
                “The coding skills acquired through Mimo's courses made me feel
                more confident about my ability to code and create software.”
              </p>
              <div className="flex justify-between">
                <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                  Clément Durandeau
                </p>
                <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                  🇫🇷 France
                </p>
              </div>
            </div>
            <img src={sideblock.src} alt="sideblock" />
          </div>
          <div className="relative flex max-h-[460px] min-w-[342px] snap-center flex-col rounded-3xl sm:max-h-[300px] sm:flex-row [:nth-child(3)]:relative [:nth-child(3)]:after:absolute [:nth-child(3)]:after:-right-6 [:nth-child(3)]:after:h-full [:nth-child(3)]:after:w-6 [:nth-child(3)]:after:content-[''] sm:[:nth-child(3)]:after:-right-10 sm:[:nth-child(3)]:after:hidden sm:[:nth-child(3)]:after:w-10">
            <div className="max-h-[200px] overflow-auto rounded-t-3xl sm:h-full sm:max-h-full sm:w-[180px] sm:rounded-t-none">
              <img src={apostrophe.src} />
              <img
                alt="Portrait photo of the auther of the quote"
                loading="lazy"
                width="540"
                height="840"
                decoding="async"
                data-nimg="1"
                className="h-full w-full self-center object-cover"
                src={testament_2.src}
              />
            </div>
            <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary sm:space-y-6 sm:rounded-r-3xl sm:rounded-bl-none sm:p-10">
              <p className="font-mimopro text-[20px] font-normal italic leading-[28px] sm:text-[24px] sm:leading-[32px]">
                “My goal is to learn how to code so that when I re-enter the
                workforce, I'll be a more competitive job candidate.”
              </p>
              <div className="flex justify-between">
                <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                  Stephanie Tyers
                </p>
                <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                  🇺🇸 USA
                </p>
              </div>
            </div>
            <img src={sideblock.src} alt="sideblock" />
          </div>
          <div className="relative flex max-h-[460px] min-w-[342px] snap-center flex-col rounded-3xl sm:max-h-[300px] sm:flex-row [:nth-child(3)]:relative [:nth-child(3)]:after:absolute [:nth-child(3)]:after:-right-6 [:nth-child(3)]:after:h-full [:nth-child(3)]:after:w-6 [:nth-child(3)]:after:content-[''] sm:[:nth-child(3)]:after:-right-10 sm:[:nth-child(3)]:after:hidden sm:[:nth-child(3)]:after:w-10">
            <div className="max-h-[200px] overflow-auto rounded-t-3xl sm:h-full sm:max-h-full sm:w-[180px] sm:rounded-t-none">
              <img src={apostrophe.src} alt="apostrophe" />
              <img
                alt="Portrait photo of the auther of the quote"
                loading="lazy"
                width="1890"
                height="2940"
                decoding="async"
                data-nimg="1"
                className="h-full w-full self-center object-cover"
                //style="color:transparent"
                src={testament_4.src}
              />
            </div>
            <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary sm:space-y-6 sm:rounded-r-3xl sm:rounded-bl-none sm:p-10">
              <p className="font-mimopro text-[20px] font-normal italic leading-[28px] sm:text-[24px] sm:leading-[32px]">
                “I've tried quite a few coding platforms but none of them
                matched the ease of learning I experienced with Mimo.”
              </p>
              <div className="flex justify-between">
                <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                  Sam Phelan
                </p>
                <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                  🇺🇸 USA
                </p>
              </div>
            </div>
            <img src={sideblock.src} alt="sideblock" />
          </div>
        </div>
        <div className="flex w-full justify-center sm:hidden">
          <div className="flex w-full flex-col space-y-10">
            <h2 className="font-aeonikFono text-[40px] font-bold leading-[52px] sm:text-[56px] sm:leading-[64px] px-6 text-center text-marketing-text-primary">
              Mimo learners have inspiring stories to tell
            </h2>
            <div className="min-w-screen sitems-center flex w-full max-w-full snap-x flex-col overflow-x-auto pl-6 sm:hidden">
              <div className="min-w-screen flex w-full max-w-7xl space-x-4 ">
                <div className="relative flex max-h-[460px] min-w-[342px] snap-center flex-col rounded-3xl sm:max-h-[300px] sm:flex-row [:nth-child(3)]:relative [:nth-child(3)]:after:absolute [:nth-child(3)]:after:-right-6 [:nth-child(3)]:after:h-full [:nth-child(3)]:after:w-6 [:nth-child(3)]:after:content-[''] sm:[:nth-child(3)]:after:-right-10 sm:[:nth-child(3)]:after:hidden sm:[:nth-child(3)]:after:w-10">
                  <div className="max-h-[200px] overflow-auto rounded-t-3xl sm:h-full sm:max-h-full sm:w-[180px] sm:rounded-t-none">
                    <img src={apostrophe.src} alt="apostrophe" />
                    <img
                      alt="Portrait photo of the author of the quote"
                      loading="lazy"
                      width="540"
                      height="840"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full self-center object-cover"
                      src={testament_1.src}
                    />
                  </div>
                  <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary sm:space-y-6 sm:rounded-r-3xl sm:rounded-bl-none sm:p-10">
                    <p className="font-mimopro text-[20px] font-normal italic leading-[28px] sm:text-[24px] sm:leading-[32px]">
                      “The coding skills acquired through Mimo's courses made me
                      feel more confident about my ability to code and create
                      software.”
                    </p>
                    <div className="flex justify-between">
                      <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                        Clément Durandeau
                      </p>
                      <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                        🇫🇷 France
                      </p>
                    </div>
                  </div>
                  <img src={sideblock} alt="sideblock" />
                </div>
                <div className="relative flex max-h-[460px] min-w-[342px] snap-center flex-col rounded-3xl sm:max-h-[300px] sm:flex-row [:nth-child(3)]:relative [:nth-child(3)]:after:absolute [:nth-child(3)]:after:-right-6 [:nth-child(3)]:after:h-full [:nth-child(3)]:after:w-6 [:nth-child(3)]:after:content-[''] sm:[:nth-child(3)]:after:-right-10 sm:[:nth-child(3)]:after:hidden sm:[:nth-child(3)]:after:w-10">
                  <div className="max-h-[200px] overflow-auto rounded-t-3xl sm:h-full sm:max-h-full sm:w-[180px] sm:rounded-t-none">
                    <img src={apostrophe} />
                    <img
                      alt="Portrait photo of the author of the quote"
                      loading="lazy"
                      width="540"
                      height="840"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full self-center object-cover"
                      src={testament_2.src}
                    />
                  </div>
                  <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary sm:space-y-6 sm:rounded-r-3xl sm:rounded-bl-none sm:p-10">
                    <p className="font-mimopro text-[20px] font-normal italic leading-[28px] sm:text-[24px] sm:leading-[32px]">
                      “My goal is to learn how to code so that when I re-enter
                      the workforce, I'll be a more competitive job candidate.”
                    </p>
                    <div className="flex justify-between">
                      <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                        Stephanie Tyers
                      </p>
                      <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                        🇺🇸 USA
                      </p>
                    </div>
                  </div>
                  <img src={sideblock.src} alt="sideblock" />
                </div>
                <div className="relative flex max-h-[460px] min-w-[342px] snap-center flex-col rounded-3xl sm:max-h-[300px] sm:flex-row [:nth-child(3)]:relative [:nth-child(3)]:after:absolute [:nth-child(3)]:after:-right-6 [:nth-child(3)]:after:h-full [:nth-child(3)]:after:w-6 [:nth-child(3)]:after:content-[''] sm:[:nth-child(3)]:after:-right-10 sm:[:nth-child(3)]:after:hidden sm:[:nth-child(3)]:after:w-10">
                  <div className="max-h-[200px] overflow-auto rounded-t-3xl sm:h-full sm:max-h-full sm:w-[180px] sm:rounded-t-none">
                    <img src={apostrophe.src} alt="apostrophe" />
                    <img
                      alt="Portrait photo of the author of the quote"
                      loading="lazy"
                      width="1890"
                      height="2940"
                      decoding="async"
                      data-nimg="1"
                      className="h-full w-full self-center object-cover"
                      //style="color:transparent"
                      src={testament_4.src}
                    />
                  </div>
                  <div className="relative z-20 flex flex-1 flex-shrink flex-col justify-between space-y-10 rounded-b-3xl bg-marketing-surface-darkBlue p-6 text-marketing-text-primary sm:space-y-6 sm:rounded-r-3xl sm:rounded-bl-none sm:p-10">
                    <p className="font-mimopro text-[20px] font-normal italic leading-[28px] sm:text-[24px] sm:leading-[32px]">
                      “I've tried quite a few coding platforms but none of them
                      matched the ease of learning I experienced with Mimo.”
                    </p>
                    <div className="flex justify-between">
                      <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                        Sam Phelan
                      </p>
                      <p className="font-mimopro text-[16px] font-normal leading-[20px] sm:text-[20px] sm:leading-[24px]">
                        🇺🇸 USA
                      </p>
                    </div>
                  </div>
                  <img src={sideblock.src} alt="sideblock" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
