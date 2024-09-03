import Google from "../imgs/Google.svg";
import Facebook from "../imgs/Facebook.svg";
import Modal from "./Modal";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";

const Form = () => {
  const modalContext = useContext(ModalContext);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const handleCheck = () => {
    const check = document.getElementById("checkbox");
    check?.toggleAttribute("checked");
  };

  const handleSignIn = (googleUser: any) => {
    //let profile = googleUser.getBasicProfile();
    //console.log(profile);
  };

  return (
    <div className="flex flex-col self-center max-h-screen" id="container">
      <Modal />
      <p className="lg:self-start self-center text-4xl font-bold">
        Welcome Back!
      </p>
      <p className="text-xl mt-10">
        Today is a new day. It's your day. You shape it.
      </p>
      <p className="text-xl">Sign in to start managing your projects.</p>

      <form
        action="post"
        onSubmit={handleSubmit}
        className="pt-10 flex flex-col justify-center justify-items-center w-full"
      >
        <label className="font-normal font-inherit" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:shadow-lg border-stroke"
          name="Email"
          id="email"
        />

        <label htmlFor="pwd" className="pt-5 font-normal font-inherit">
          Password
        </label>
        <input
          type="password"
          placeholder="At least 8 characters"
          className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:shadow-lg  border-stroke"
          name="Password"
          id="pwd"
        />
        <div className="flex justify-between pt-5 ">
          <div className="font-normal cursor-pointer" onClick={handleCheck}>
            <input id="checkbox" type="checkbox"></input>
            <span className="select-none ml-2">Remember me?</span>
          </div>

          <span
            onClick={() => modalContext?.setOpenModal(!modalContext?.isOpen)}
            className="select-none self-end font-normal text-link cursor-pointer"
          >
            Forgot password?
          </span>
        </div>

        <button className="select-none my-5 py-2 bg-btnSign text-white rounded-lg">
          Sign in
        </button>

        <div className="flex flex-row justify-items-center pt-5 pb-5 items-center">
          <span id="line" className="h-px w-full bg-line"></span>
          <span className="px-5 lg:block hidden">Or</span>
          <span className="px-5 lg:hidden block whitespace-nowrap">
            Or sign in with
          </span>
          <span id="line" className="h-px w-full bg-line"></span>
        </div>
      </form>

      <div className="flex flex-col w-full justify-items-center items-center">
        <div className="lg:flex lg:flex-col grid grid-rows-1 gap-5 grid-cols-2 w-full">
          <button className="flex justify-center lg:hidden my-5 py-2 rounded-lg bg-bkgInput hover:shadow-lg w-full items-center">
            {" "}
            <img src={Google} className="h-6 mr-5" alt="google" />
            Google
          </button>
          <button className="flex justify-center lg:hidden my-5 py-2 rounded-lg bg-bkgInput hover:shadow-lg w-full items-center">
            {" "}
            <img src={Facebook} className="h-6 mr-5" alt="facebook" />
            Facebook
          </button>
          <button
            onClick={handleSignIn}
            className="lg:flex self-center hidden mt-5  w-fit hover:shadow-lg"
          >
            <GoogleLogin
              onSuccess={handleSignIn}
              text="signin_with"
              locale="en_us"
            />
          </button>
          <button
            onClick={handleSignIn}
            className="lg:flex self-center hidden mt-5  w-fit hover:shadow-lg"
          >
            Sign in with Github
          </button>
        </div>
        <p className="font-normal">
          Don't you have an account?{" "}
          <Link to="/sign-up" className="font-normal text-link cursor-pointer">
            Sign up
          </Link>
        </p>
        <small className="self-center mt-10 mb-5 text-small lg:mb-5 lg:mt-10">
          &copy; 2024 ALL RIGHTS RESERVED
        </small>
      </div>
    </div>
  );
};

export default Form;
