import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const NavMenu = () => {
    // Start Dark Theme

    const [theme, setTheme] = useState("light");

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light");
        }
    }, []);

    useEffect(() => {
        // select html elem
        const html = document.querySelector("html");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark");
            setTheme("dark");
        } else {
            html.classList.remove("dark");
            setTheme("light");
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
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto">
                <Link
                    href="#"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <h2>Task Managment</h2>
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                        >
                            Add Task
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                        >
                            My Task
                        </Link>
                    </li>
                    <li className="flex">
                        <Link
                            href="#"
                            className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                        >
                            Compleated Task
                        </Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">
                        Sign in
                    </button>
                    <button
                        onClick={handleThemeSwitch}
                        className="p-4 bg-accent text-black dark:text-white rounded-full w-12 h-12 flex justify-center items-center"
                    >
                        {theme === "light" ? <BsFillSunFill /> : <BsMoonFill />}
                    </button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 dark:text-gray-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default NavMenu;
