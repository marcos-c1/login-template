const SignUp = () => {
    return (
        <div className="flex flex-col self-center max-h-screen" id="container">
            <p className="lg:self-start self-center text-4xl font-bold">Sign up today</p>
            <p className="text-xl pb-10 mt-10">Sign in to start managing your projects.</p>
            <label htmlFor="user" className="font-normal font-inherit">Full Name</label>
            <input className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:shadow-lg border-stroke" type="text" id="user" name="username" />
            <label htmlFor="birthdate" className="pt-5 font-normal font-inherit">Birth Date</label>
            <input className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:shadow-lg border-stroke" type="date" id="birthdate" name="birthdate" />
            <label htmlFor="email" className="pt-5 font-normal font-inherit">Email</label>
            <input placeholder="Example@email.com" className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:shadow-lg border-stroke" type="text" id="email" name="email" />
            <label htmlFor="pwd" className="pt-5 font-normal font-inherit">Password</label>
            <input placeholder="At least 8 characters" className="bg-bkgInput text-base font-inherit py-2 px-5 border rounded-lg focus:outline-none focus:shadow-lg border-stroke" type="text" id="pwd" name="pwd" />

            <div className="flex">
                <label htmlFor="user" className="pt-5 font-normal font-inherit">Role: </label>
                <select name="role" id="role" className="pt-5 font-normal font-inherit">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="dev">Developer</option>
                </select>
            </div>
            <button className="my-5 py-2  bg-btnSign text-white rounded-lg">Register</button>
            <small className="lg:absolute self-center mt-10 mb-5 text-small lg:bottom-0 lg:mb-5 lg:mt-10">&copy; 2023 ALL RIGHTS RESERVED</small>
        </div>

    )
}

export default SignUp