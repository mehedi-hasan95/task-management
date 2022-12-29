import { async } from "@firebase/util";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const UpdateTask = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [taskData, setTaskData] = useState("");

    const uploadImage = process.env.REACT_APP_image_host;

    const pranId = useParams();
    console.log(pranId.task_id);

    useEffect(() => {
        getTask();
    }, []);

    const getTask = async () => {
        await fetch(
            `https://task-management-server-tau.vercel.app/update/${pranId.task_id}`
        )
            .then((response) => response.json())
            .then((data) => {
                setTaskData(data);
            });
    };

    // Update Task

    const updateTast = (data) => {
        const products = {
            title: data.title,
            desc: data.desc,
        };
        fetch(
            `https://task-management-server-tau.vercel.app/update/${taskData._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(products),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                navigate("/my-task");
            });
    };

    return (
        <div className="p-6 dark:bg-gray-800 dark:text-gray-50">
            <form
                onSubmit={handleSubmit(updateTast)}
                className=" max-w-3xl flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
                <div className="col-span-full">
                    <label htmlFor="title" className="">
                        Task Name
                    </label>
                    <input
                        defaultValue={taskData.title}
                        {...register("title", {
                            required: "Product name is Required",
                        })}
                        type="name"
                        name="title"
                        placeholder="Product Name"
                        className="w-full rounded-md px-3 py-2 border focus:ring focus:ring-opacity-75 focus:ring-violet-400 outline-none dark:text-gray-900"
                    />
                </div>
                <div className="col-span-full">
                    <label htmlFor="description" className="">
                        Task Details
                    </label>
                    <textarea
                        defaultValue={taskData.desc}
                        {...register("desc", {
                            required: "Description is Required",
                        })}
                        name="desc"
                        className="w-full rounded-md px-3 py-2 border focus:ring focus:ring-opacity-75 focus:ring-violet-400 outline-none dark:text-gray-900"
                        rows="12"
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
                            htmlFor="files"
                            className="block text-sm font-medium"
                        >
                            Add Thumbanil
                        </label>
                        <div className="flex">
                            <input
                                {...register("img")}
                                type="file"
                                name="img"
                                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <button className="bg-purple-400 px-5 py-2 rounded-xl transition-all duration-500 hover:shadow-md hover:shadow-violet-300">
                        Update Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;
