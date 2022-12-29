import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Lodding from "../../Components/Lodding/Lodding";
import Completed from "./Completed";

const CompletedTasks = () => {
    const { user } = useContext(AuthContext);
    const {
        data: completed,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["completed"],
        queryFn: async () => {
            const res = await fetch(
                `https://task-management-server-tau.vercel.app/completed?email=${user.email}&&completed=true`
            );
            const data = await res.json();
            return data;
        },
    });

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

    if (isLoading) return <Lodding />;
    return (
        <div className="bg-white dark:bg-gray-800 container mx-auto mt-5 px-5">
            {completed?.length > 0 ? (
                <h2 className="text-3xl text-center py-10 dark:text-white">
                    You have total {completed?.length} completed task.
                </h2>
            ) : (
                <h2 className="text-3xl text-center py-10 dark:text-white">
                    You have no completed task.
                </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {completed?.map((complete) => (
                    <Completed
                        key={complete._id}
                        complete={complete}
                        confirmDelete={confirmDelete}
                    ></Completed>
                ))}
            </div>
        </div>
    );
};

export default CompletedTasks;
