import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

    // NavNavLink
    let activeStyle = {
        borderBottom: "2px solid #ededed",
    };

    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 mb-5">
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink
                    to="/"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <h2>Task Managment</h2>
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink
                            to="/"
                            className="flex items-center px-4 -mb-1"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/add-task"
                            className="flex items-center px-4 -mb-1"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Add Task
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/my-task"
                            className="flex items-center px-4 -mb-1"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            My Task
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink
                            to="/compleated-task"
                            className="flex items-center px-4 -mb-1"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Compleated Task
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <Link to="/login" className="self-center px-8 py-3 rounded">
                        Sign in
                    </Link>
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
