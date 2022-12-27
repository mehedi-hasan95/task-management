import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddTask = () => {
    const [file, setFile] = useState(null);
    return (
        <div className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form className=" max-w-3xl flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="col-span-full">
                    <label htmlFor="title" className="">
                        Task Name
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="w-full rounded-md px-3 py-2 border focus:ring focus:ring-opacity-75 focus:ring-violet-400 outline-none dark:text-gray-900"
                    />
                </div>
                <div className="col-span-full">
                    <label htmlFor="description" className="">
                        Task Details
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        rows="12"
                        className="w-full rounded-md px-3 py-2 border focus:ring focus:ring-opacity-75 focus:ring-violet-400 outline-none dark:text-gray-900"
                    ></textarea>
                </div>
                <div className="col-span-full">
                    {file ? (
                        <img
                            className="max-w-md border border-violet-400 rounded-xl"
                            src={URL.createObjectURL(file)}
                            alt=""
                        />
                    ) : (
                        <img
                            className="max-w-md border border-violet-400 rounded-xl"
                            src="https://i.ibb.co/sbrRqs4/free.jpg"
                            alt=""
                        />
                    )}
                    <fieldset className="w-full space-y-1 dark:text-gray-100 pt-5">
                        <label
                            for="files"
                            className="block text-sm font-medium"
                        >
                            Add Thumbanil
                        </label>
                        <div className="flex">
                            <input
                                type="file"
                                name="files"
                                id="files"
                                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <button className="bg-purple-400 px-5 py-2 rounded-xl transition-all duration-500 hover:shadow-md hover:shadow-violet-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
