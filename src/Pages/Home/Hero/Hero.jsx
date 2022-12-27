import React from "react";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-[#5243AA] via-[#A049AF] to-fuchsia-500 dark:bg-gray-800 dark:text-gray-100 py-5">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                    <h2 className="text-3xl md:text-5xl text-white dark:text-black">
                        This app brings all your tasks, teammates, and tools
                        together
                    </h2>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                        </svg>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-medium leading-snug">
                                Add Note
                            </h2>
                            <p className="leading-snug">
                                Keep everything in the same place—even if your
                                team isn’t. Using this app you can add your
                                daily note.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                        </svg>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-medium leading-snug">
                                My Task
                            </h2>
                            <p className="leading-snug">
                                You can see all your tasks.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="flex-shrink-0 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            ></path>
                        </svg>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-medium leading-snug">
                                Compleated Tasks
                            </h2>
                            <p className="leading-snug">
                                You can see all compleate task.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img
                            src="https://i.ibb.co/7KNpY2v/Trello-UICollage-4x.webp"
                            alt=""
                            className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
