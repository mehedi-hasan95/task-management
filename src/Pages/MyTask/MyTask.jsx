import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Lodding from "../../Components/Lodding/Lodding";
import Task from "./Task";

const MyTask = () => {
    const { user } = useContext(AuthContext);

    const {
        data: tasks,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/user/task?email=${user.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) return <Lodding></Lodding>;

    return (
        <div className="bg-white dark:bg-gray-800">
            <h2 className="text-3xl text-center py-10 dark:text-white">
                User All Task
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 g-5">
                {tasks?.map((task) => (
                    <Task key={task._id} task={task}></Task>
                ))}
            </div>
        </div>
    );
};

export default MyTask;
