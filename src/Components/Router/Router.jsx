import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTasks from "../../Pages/CompletedTasks/CompletedTasks";
import Home from "../../Pages/Home/Home";
import MyTask from "../../Pages/MyTask/MyTask";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "add-task", element: <AddTask /> },
            { path: "my-task", element: <MyTask /> },
            { path: "compleated-task", element: <CompletedTasks /> },
        ],
    },
]);

export default router;
