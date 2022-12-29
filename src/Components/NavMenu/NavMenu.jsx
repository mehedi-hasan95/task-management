import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { AuthContext } from "../AuthProvider/AuthProvider";

const NavMenu = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    // Start Dark Theme

    const [theme, setTheme] = useState("light");

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light");
        }
    }, []);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // handle switch theme
    const handleThemeSwitch = () => {
        if (localStorage.getItem("theme") === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    };

    // End Dark Theme
    return (
        <nav className="w-full bg-purple-500 shadow dark:bg-gray-900">
            <div className="justify-between px-4 mx-auto lg:container md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <h2 className="text-2xl font-bold text-white">
                                Task Management
                            </h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/add-task">Add Task</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/my-task">My Task</Link>
                            </li>
                            <li className="text-white hover:text-indigo-200">
                                <Link to="/compleated-task">
                                    Compleated Task
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden">
                            {user?.uid ? (
                                <Link
                                    onClick={logOut}
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Log Out
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Sign in
                                </Link>
                            )}
                            <button
                                onClick={handleThemeSwitch}
                                className="text-black dark:text-white"
                            >
                                {theme === "light" ? (
                                    <BsFillSunFill />
                                ) : (
                                    <BsMoonFill />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    {user?.uid ? (
                        <Link
                            onClick={logOut}
                            className="px-4 py-2 mr-5 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Log Out
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="px-4 py-2 mr-5 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Sign in
                        </Link>
                    )}
                    <button
                        onClick={handleThemeSwitch}
                        className="text-black dark:text-white"
                    >
                        {theme === "light" ? <BsFillSunFill /> : <BsMoonFill />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavMenu;
