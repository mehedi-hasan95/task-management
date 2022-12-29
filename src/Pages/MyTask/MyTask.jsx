import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Lodding from "../../Components/Lodding/Lodding";
import Task from "./Task";

const MyTask = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        data: tasks,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["tasks"],
        queryFn: async () => {
            const res = await fetch(
                `https://task-management-server-tau.vercel.app/user/task?email=${user.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    // Compleate Task
    const completedTask = (data) => {
        console.log(data);
        fetch(
            `https://task-management-server-tau.vercel.app/completed/${data}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => response.json())
            .then((data) => {
                navigate("/compleated-task");
            });
    };

    // Delete Task

    const confirmDelete = (tasksid) => {
        fetch(`https://task-management-server-tau.vercel.app/post/${tasksid}`, {
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
        <div className="bg-white dark:bg-gray-800 container mx-auto mt-5 px-5">
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
