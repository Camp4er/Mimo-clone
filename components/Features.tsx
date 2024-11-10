export default function Features() {
  return (
    <section className="mt-20 px-6 sm:mt-24 sm:px-10">
      <div className="relative z-10 grid grid-cols-1 gap-y-12 text-center sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 md:grid-cols-3 md:gap-x-8 text-marketing-text-primary">
        <div className="absolute inset-0 z-[-1] h-full w-full">
          <div className="absolute left-[-5%] top-[40%] h-[30px] w-[30px] sm:h-[60px] sm:w-[60px] bg-blue-800"></div>
          <div className="absolute left-[92%] top-0 h-[30px] w-[30px] sm:h-[60px] sm:w-[60px] bg-pink-500"></div>
          <div className="absolute left-[95%] top-[70%] h-[30px] w-[30px] sm:h-[60px] sm:w-[60px] bg-yellow-500"></div>
        </div>

        <div className="flex max-w-xs flex-col space-y-6">
          <svg
            className="h-20 sm:h-24"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5 0C45.0837 0 49.5842 0.922258 53.8056 2.70941C58.0271 4.49656 61.8895 7.11502 65.1421 10.3579C68.3849 13.6105 71.0034 17.4729 72.7906 21.6944C74.5777 25.9158 75.5 30.4163 75.5 35C75.5 39.5837 74.5777 44.0842 72.7906 48.3056C71.0034 52.5271 68.3849 56.3895 65.1421 59.6421C61.8895 62.8849 58.0271 65.5034 53.8056 67.2906C49.5842 69.0777 45.0837 70 40.5 70C35.9163 70 31.4158 69.0777 27.1944 67.2906C22.9729 65.5034 19.1105 62.8849 15.8579 59.6421C12.615 56.3895 9.99656 52.5271 8.20941 48.3056C6.42226 44.0842 5.5 39.5837 5.5 35C5.5 30.4163 6.42226 25.9158 8.20941 21.6944C9.99656 17.4729 12.615 13.6105 15.8579 10.3579C19.1105 7.11502 22.9729 4.49656 27.1944 2.70941C31.4158 0.922258 35.9163 0 40.5 0ZM40.5 6C31.8724 6 23.6785 9.82857 18.1875 15.8705L58.6295 59.8755C64.6714 54.3845 68.5 46.1906 68.5 37.563C68.5 27.1312 61.5673 18.1312 51.8265 15.4385C48.3308 6.89965 41.1625 6 40.5 6ZM40.5 6L6 6C6 15.6274 12.6274 24 22.5 24C32.3726 24 39 15.6274 39 6H40.5Z"
              fill="#1A73E8"
            />
          </svg>
          <div className="flex-1 space-y-4"><h5 className="font-aeonikFono text-[20px] font-bold leading-[28px] sm:text-[24px] sm:leading-[32px]">Gamified lessons</h5><p className="font-mimopro text-[18px] font-normal leading-[28px] sm:text-[20px] sm:leading-[32px]">Learn with interactive exercises, challenges, and projects, crafted by learning experts and backed by research</p></div>
        </div>

        <div className="flex max-w-xs flex-col space-y-6">
          <svg
            className="h-20 sm:h-24"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.917 19.0833C66.0157 23.2292 69.5185 29.155 70.4995 35.8333C70.5282 36.0147 70.5282 36.1983 70.4995 36.3797C69.5193 43.0605 66.0166 48.9896 60.917 53.1364C55.8173 57.2832 49.2795 59.5307 42.5 59.5299C35.7207 59.529 29.1829 57.2837 24.0833 53.1375C18.9837 48.9914 15.481 43.0616 14.5008 36.3808C14.4721 36.1994 14.4721 36.0158 14.5008 35.8344C15.481 29.1545 18.9837 23.2234 24.0833 19.0775C29.1829 14.9317 35.7207 12.6842 42.5 12.6849C49.2795 12.6857 55.8173 14.9312 60.917 19.0833ZM39.25 24.3333C34.25 24.3333 30.75 28.0833 30.75 33.0833C30.75 35.25 31.4167 37.2917 32.6667 38.9167C31.0417 40.25 30 42.4583 30 45C30 48.75 32.9167 51.6667 36.6667 51.6667C38.875 51.6667 41.0417 50.5 42.25 48.7083C43.4583 50.5 45.625 51.6667 47.8333 51.6667C51.5833 51.6667 54.5 48.75 54.5 45C54.5 42.4583 53.4583 40.25 51.8333 38.9167C53.0833 37.2917 53.75 35.25 53.75 33.0833C53.75 28.0833 50.25 24.3333 45.25 24.3333C42.75 24.3333 40.25 26.1667 39.25 28.6667C38.25 26.1667 35.75 24.3333 33.25 24.3333Z"
              fill="#FF5722"
            />
          </svg>
          <div className="space-y-4">
            <h5 className="text-xl font-bold sm:text-2xl">
              Real-world projects
            </h5>
            <p className="text-lg sm:text-xl">
              Build projects that apply your coding skills in real-life
              scenarios
            </p>
          </div>
        </div>

        <div className="flex max-w-xs flex-col space-y-6">
          <svg
            className="h-20 sm:h-24"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5 0C45.25 0 49.95 0.85 54.25 2.5C58.55 4.15 62.35 6.5 65.5 9.5C68.65 12.5 71.05 16 72.5 19.75C73.95 23.5 74.5 27.65 74.5 32V35C74.5 38.45 73.95 41.95 72.5 45.25C71.05 48.55 68.65 51.5 65.5 54C62.35 56.5 58.55 58.5 54.25 60C49.95 61.5 45.25 62.5 40.5 62.5C35.75 62.5 31.05 61.5 26.75 60C22.45 58.5 18.65 56.5 15.5 54C12.35 51.5 9.95 48.55 8.5 45.25C7.05 41.95 6.5 38.45 6.5 35V32C6.5 27.65 7.05 23.5 8.5 19.75C9.95 16 12.35 12.5 15.5 9.5C18.65 6.5 22.45 4.15 26.75 2.5C31.05 0.85 35.75 0 40.5 0ZM40.5 10C35.25 10 30.25 11.15 25.75 13.25C21.25 15.35 17.25 18.65 14.25 22.75C11.25 26.85 9.5 31.75 9.5 37V35C9.5 30.75 11.25 26.65 14.25 22.75C17.25 18.85 21.25 15.65 25.75 13.5C30.25 11.35 35.25 10.25 40.5 10.25Z"
              fill="#4CAF50"
            />
          </svg>
          <div className="space-y-4">
            <h5 className="text-xl font-bold sm:text-2xl">Certificates</h5>
            <p className="text-lg sm:text-xl">
              Celebrate your accomplishments with shareable certificates as you
              reach milestones on your journey
            </p>
          </div>
        </div>

        <div className="flex max-w-xs flex-col space-y-6">
          <svg
            className="h-20 sm:h-24"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5 0C45.25 0 49.95 0.85 54.25 2.5C58.55 4.15 62.35 6.5 65.5 9.5C68.65 12.5 71.05 16 72.5 19.75C73.95 23.5 74.5 27.65 74.5 32V35C74.5 38.45 73.95 41.95 72.5 45.25C71.05 48.55 68.65 51.5 65.5 54C62.35 56.5 58.55 58.5 54.25 60C49.95 61.5 45.25 62.5 40.5 62.5C35.75 62.5 31.05 61.5 26.75 60C22.45 58.5 18.65 56.5 15.5 54C12.35 51.5 9.95 48.55 8.5 45.25C7.05 41.95 6.5 38.45 6.5 35V32C6.5 27.65 7.05 23.5 8.5 19.75C9.95 16 12.35 12.5 15.5 9.5C18.65 6.5 22.45 4.15 26.75 2.5C31.05 0.85 35.75 0 40.5 0ZM40.5 10C35.25 10 30.25 11.15 25.75 13.25C21.25 15.35 17.25 18.65 14.25 22.75C11.25 26.85 9.5 31.75 9.5 37V35C9.5 30.75 11.25 26.65 14.25 22.75C17.25 18.85 21.25 15.65 25.75 13.5C30.25 11.35 35.25 10.25 40.5 10.25Z"
              fill="#FFC107"
            />
          </svg>
          <div className="space-y-4">
            <h5 className="text-xl font-bold sm:text-2xl">Leaderboards</h5>
            <p className="text-lg sm:text-xl">
              Compete with fellow learners and climb the ranks as you complete
              exercises, challenges, and projects
            </p>
          </div>
        </div>

        <div className="flex max-w-xs flex-col space-y-6">
          <svg
            className="h-20 sm:h-24"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.8936 21.1794L37.5 35.4473L9.10645 21.1794C8.56064 20.8876 8.03734 20.5726 7.53027 20.2352L25.6064 60.0982L37.5 53.1693L49.3936 60.0982L67.4697 20.2352C66.9626 20.5726 66.4393 20.8876 65.8936 21.1794Z"
              fill="#3F51B5"
            />
          </svg>
          <div className="space-y-4">
            <h5 className="text-xl font-bold sm:text-2xl">Playgrounds</h5>
            <p className="text-lg sm:text-xl">
              Unleash your creativity, from trying out concepts to prototyping
              your ideas and realizing your projects
            </p>
          </div>
        </div>

        <div className="flex max-w-xs flex-col space-y-6">
          <svg
            className="h-20 sm:h-24"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.5 0C45.25 0 49.95 0.85 54.25 2.5C58.55 4.15 62.35 6.5 65.5 9.5C68.65 12.5 71.05 16 72.5 19.75C73.95 23.5 74.5 27.65 74.5 32V35C74.5 38.45 73.95 41.95 72.5 45.25C71.05 48.55 68.65 51.5 65.5 54C62.35 56.5 58.55 58.5 54.25 60C49.95 61.5 45.25 62.5 40.5 62.5C35.75 62.5 31.05 61.5 26.75 60C22.45 58.5 18.65 56.5 15.5 54C12.35 51.5 9.95 48.55 8.5 45.25C7.05 41.95 6.5 38.45 6.5 35V32C6.5 27.65 7.05 23.5 8.5 19.75C9.95 16 12.35 12.5 15.5 9.5C18.65 6.5 22.45 4.15 26.75 2.5C31.05 0.85 35.75 0 40.5 0ZM40.5 10C35.25 10 30.25 11.15 25.75 13.25C21.25 15.35 17.25 18.65 14.25 22.75C11.25 26.85 9.5 31.75 9.5 37V35C9.5 30.75 11.25 26.65 14.25 22.75C17.25 18.85 21.25 15.65 25.75 13.5C30.25 11.35 35.25 10.25 40.5 10.25Z"
              fill="#673AB7"
            />
          </svg>
          <div className="space-y-4">
            <h5 className="text-xl font-bold sm:text-2xl">Community</h5>
            <p className="text-lg sm:text-xl">
              Connect with the community to get guidance, share insights, and
              collaborate with your fellow learners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
