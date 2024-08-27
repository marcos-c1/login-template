import Google from "../imgs/Google.svg"
import Facebook from "../imgs/Facebook.svg"
import { Link } from "react-router-dom"
import React from "react"

const Form = () => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }
  return (
    <div className="flex flex-col self-center max-h-screen" id="login-container">
      <p className="text-4xl font-bold">Welcome Back 👋</p>
      <p className="text-xl pt-10">Today is a new day. It's your day. You shape it.
      </p>
      <p className="text-xl">Sign in to start managing your projects.</p>

      <form action="post" onSubmit={handleSubmit} className="pt-10 flex flex-col justify-center justify-items-center w-full">
        <label className="font-normal font-inherit" htmlFor="email">Email</label>
        <input type="text" placeholder="Example@email.com" className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 border-stroke" name="Email" id="email" />

        <label htmlFor="pwd" className="pt-5 font-normal font-inherit" >Password</label>
        <input type="password" placeholder="At least 8 characters" className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:ring focus:border-blue-500  border-stroke" name="Password" id="pwd" />

        <Link className="self-end pt-5 font-normal text-link" to="/forgot-pwd" >Forgot password?</Link>
        <button className="my-5 py-2 bg-btnSign text-white rounded-lg">Sign in</button>

        <div className="flex flex-row justify-items-center pt-5 pb-5 items-center">
          <span id="line" className="h-px w-full bg-line"></span>
          <span className="px-5 lg:block hidden">Or</span>
          <span className="px-5 lg:hidden block whitespace-nowrap">Or sign in with</span>
          <span id="line" className="h-px w-full bg-line"></span>
        </div>
      </form>

      <div className="flex flex-col w-full justify-items-center items-center">
        <div className="lg:flex lg:flex-col grid grid-rows-1 gap-5 grid-cols-2 w-full">
          <button className="flex justify-center lg:hidden my-5 py-2 rounded-lg bg-bkgInput hover:ring hover:border-blue-500 w-full items-center"> <img src={Google} className="h-6 mr-5" alt="google" />Google</button>
          <button className="flex justify-center lg:hidden my-5 py-2 rounded-lg bg-bkgInput hover:ring hover:border-blue-500 w-full items-center"> <img src={Facebook} className="h-6 mr-5" alt="facebook" />Facebook</button>
          <button className="lg:flex justify-center hidden mt-5 py-2 rounded-lg bg-bkgInput hover:ring hover:border-blue-500"> <img src={Google} className="h-7 mr-5" alt="google" /> Sign in with Google</button>
          <button className="lg:flex justify-center hidden mb-5 py-2 rounded-lg bg-bkgInput hover:ring hover:border-blue-500"> <img src={Facebook} className="h-7 mr-5" alt="facebook" /> Sign in with Facebook</button>
        </div>
        <p className="font-normal">Don't you have an account? <Link to="/sign-up" className="font-normal text-link">Sign up</Link></p>
      </div>
      <small className="lg:absolute self-center mt-10 mb-5 text-small lg:bottom-0 lg:mb-5 lg:mt-10">&copy; 2023 ALL RIGHTS RESERVED</small>
    </div>
  )
}

export default Form