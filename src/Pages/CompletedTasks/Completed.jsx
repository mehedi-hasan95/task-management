import React from "react";
import { Link } from "react-router-dom";

const Completed = ({ complete, confirmDelete }) => {
    const { title, desc, date, img, _id } = complete;
    const newDate = new Date(date).toDateString();
    return (
        <div
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-purple-500 dark:bg-gray-900"
        >
            <img
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={img}
                alt={title}
            />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:text-white">
                    {title}
                </h3>
                <span className="dark:text-gray-400 text-xl">
                    <span className=" text-white">Created date:</span> {newDate}
                </span>
                <p className="dark:text-white">{desc}</p>
                <div className="flex flex-wrap gap-5 pt-5">
                    <Link
                        to={`/my-task`}
                        className="px-5 py-2 rounded-lg font-semibold bg-green-300"
                    >
                        Not Completed
                    </Link>
                    <button
                        onClick={(e) => confirmDelete(_id)}
                        className="px-5 py-2 rounded-lg font-semibold bg-red-400"
                    >
                        Delete Task
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Completed;
