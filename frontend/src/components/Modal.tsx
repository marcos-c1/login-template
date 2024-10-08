import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const Modal = () => {
  const modalContext = useContext(ModalContext);
  const handleReset = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <div
        className={`${modalContext?.isOpen ? "block" : "hidden"} backdrop-blur absolute left-0 top-0 bottom-0 w-screen h-screen`}
      ></div>
      <div className={modalContext?.isOpen ? "block" : "hidden"}>
        <form
          action="post"
          onSubmit={handleReset}
          tabIndex={-1}
          className={`${!modalContext?.isOpen ? "hidden" : ""} select-none overflow-y-auto overflow-x-hidden fixed translate-y-1/3 translate-x-1/3 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Reset password
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() =>
                    modalContext?.setOpenModal(!modalContext.isOpen)
                  }
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  We will send you an email to reset your password. If your
                  email is linked to any account on the website, your account
                  will be recovered.
                </p>

                <input
                  name="email"
                  className="w-full text-white font-inherit bg-transparent text-base font-inherit px-2 border-b-2 border-b-white focus:outline-none  border-stroke"
                  placeholder="example@email.com"
                  type="email"
                />
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send
                </button>
                <button
                  onClick={() =>
                    modalContext?.setOpenModal(!modalContext.isOpen)
                  }
                  type="reset"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
