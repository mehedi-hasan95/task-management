import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Register = () => {
    const [error, setError] = useState("");

    const { createUser, updateUser, googleLogin } = useContext(AuthContext);

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6 && password.length < 6) {
            setError("Your password should be 6 digits");
        }
        if (password !== confirm) {
            setError("Your Password didn't match");
        }

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                handleNameAndUrl(name);
            })
            .catch((error) => {
                console.error("error", error);
                setError(error.message);
            });

        console.log(name, email, password, confirm);
    };
    // Handle update User name
    const handleNameAndUrl = (name) => {
        const profile = {
            displayName: name,
        };
        updateUser(profile)
            .then(() => {})
            .catch((error) => {});
    };

    // Google Sign In
    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form
                onSubmit={handleRegistration}
                className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-1 text-sm">
                    <label
                        htmlFor="username"
                        className="block dark:text-gray-400"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="username"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-400">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label
                        htmlFor="password"
                        className="block dark:text-gray-400"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label
                        htmlFor="confirm"
                        className="block dark:text-gray-400"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                        required
                    />
                    <div className="flex justify-end text-xs dark:text-gray-400">
                        <Link rel="noopener noreferrer" href="#">
                            Forgot Password?
                        </Link>
                    </div>
                </div>
                {error && <p className="text-red-700">{error}</p>}
                <button className="block w-full p-3 text-center rounded-sm text-white dark:text-gray-900 bg-gray-600 dark:bg-violet-400">
                    Register
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                <p className="px-3 text-sm dark:text-gray-400">
                    Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={handleGoogle}
                    aria-label="Log in with Google"
                    className="p-3 rounded-sm"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                    >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Already have an account?
                <Link
                    rel="noopener noreferrer"
                    to="/login"
                    className="underline dark:text-gray-100"
                >
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
