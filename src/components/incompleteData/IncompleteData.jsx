import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UserDataCard from "../UserDataCard";

const IncompleteData = () => {

    const { data: incompleteData = [] } = useQuery({
        queryKey: ['incomplete'],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/incomplete");
            return res.data
        }
    })


    return (
        <div>
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

export default IncompleteData;