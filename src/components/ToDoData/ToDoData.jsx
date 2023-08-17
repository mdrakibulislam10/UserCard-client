import { useQuery } from "@tanstack/react-query";
import UserDataCard from "../UserDataCard";
import axios from "axios";

const ToDoData = () => {
    const { data: incompleteData = [] } = useQuery({
        queryKey: ['incomplete'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/toDo");
            return res.data
        }
    })


    return (
        <div className="bg-secondary p-2 rounded">
        <div className="text-white d-flex justify-content-between">
            <p>ToDo</p>
            <p className="bg-white text-black d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>0</p>
        </div>
        {
            incompleteData.map(userData =>
                <UserDataCard
                    key={userData._id}
                    {...userData}
                />
            )
        }
    </div>
    );
};

export default ToDoData;