import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Components/AuthProvider/AuthProvider";

const SiteInfo = () => {
    const { googleLogin } = useContext(AuthContext);

    // Login With Google
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
        <div className="pt-7 dark:bg-gray-900 py-5">
            <h2 className="text-center text-gray-500 text-3xl md:text-5xl">
                Secure Task Management for Teams
            </h2>
            <h2 className="text-center text-gray-900 dark:text-white text-5xl md:text-7xl py-4">
                Your Team.{" "}
                <span className="text-center text-gray-500 text-5xl md:text-7xl leading-10">
                    Aligned.
                </span>
            </h2>
            <button
                onClick={handleGoogle}
                className="flex items-center text-2xl md:text-3xl text-white bg-[#6445AC] px-5 py-2 rounded-full mx-auto mt-7 hover:shadow-lg hover:shadow-[#8146AD]"
            >
                <FcGoogle className="pr-5 text-5xl md:text-6xl" />
                Continue with Google
            </button>
            <p className="text-center mt-6">
                <Link
                    to="/sign-up"
                    className="text-xl dark:text-white underline hover:text-blue-700 dark:hover:text-blue-700"
                >
                    or sign up with your email address
                </Link>
            </p>
            <img
                className="container mx-auto fadeInLeftBig"
                src="https://i.ibb.co/K61vfKD/task-img.png"
                alt=""
            />
        </div>
    );
};

export default SiteInfo;
