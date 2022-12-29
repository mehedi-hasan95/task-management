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

    // Compleate Task
    const completedTask = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/completed/${data}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // navigate("/my-task");
            });
    };

    // Delete Task

    const confirmDelete = (tasksid) => {
        fetch(`http://localhost:5000/post/${tasksid}`, {
            method: "DELETE", // or 'PUT'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    refetch();
                }
            });
    };

    if (isLoading) return <Lodding></Lodding>;

    return (
        <div className="bg-white dark:bg-gray-800 container mx-auto mt-5">
            <h2 className="text-3xl text-center py-10 dark:text-white">
                User All Task
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {tasks?.map((task) => (
                    <Task
                        key={task._id}
                        task={task}
                        confirmDelete={confirmDelete}
                        completedTask={completedTask}
                    ></Task>
                ))}
            </div>
        </div>
    );
};

export default MyTask;
