interface LoginFormCompleteProps {
    username: string
}

export const LoginFormComplete = ({ username }: LoginFormCompleteProps) => {
  return (
    <div>
      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              class="w-8 h-8 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Success</span>
          </div>
          <p class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            Hi, {username}!
          </p>
          <p class="mb-4 text-gray-400 text-md">
            Thank you for logging in!
          </p>
          <button
            type="button"
            class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
