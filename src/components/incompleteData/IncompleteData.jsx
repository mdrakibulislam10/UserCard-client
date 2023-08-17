import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserDataCard from "../UserDataCard";
import "../../components/Common.css";

const IncompleteData = () => {

    const { data: incompleteData = [] } = useQuery({
        queryKey: ['incomplete'],
        queryFn: async () => {
            const res = await axios.get("https://user-card-server.vercel.app/incomplete");
            return res.data
        }
    })


    return (
        <div className="bg-secondary p-2 rounded">
            <div className="text-white d-flex justify-content-between">
                <p>Incomplete</p>
                <p className="bg-white text-black d-flex align-items-center justify-content-center" style={{ width: "20px", height: "20px" }}>0</p>
            </div>
            <div className="overflow-y-auto overflow-custom overflow-x-hidden">
                {
                    incompleteData.map(userData =>
                        <UserDataCard
                            key={userData._id}
                            {...userData}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default IncompleteData;