import { createBrowserRouter } from "react-router-dom";
import AddTask from "../../Pages/AddTask/AddTask";
import CompletedTasks from "../../Pages/CompletedTasks/CompletedTasks";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyTask from "../../Pages/MyTask/MyTask";
import Register from "../../Pages/Register/Register";
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
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ],
    },
]);

export default router;
