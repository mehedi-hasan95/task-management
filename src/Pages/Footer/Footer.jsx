import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#172B4D] text-white dark:bg-gray-800 dark:text-gray-50 mt-5">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <p>&copy; 2023, Mehedi Hasan</p>
                </ul>
                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/mehedi-hasan95/"
                            title="LinkedIn"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/mehedi-hasan95"
                            title="GitHub"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                            <FaGithubSquare />
                        </a>
                        <a
                            href="https://www.facebook.com/mehedi995/"
                            title="FaceBook"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
