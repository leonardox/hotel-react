import { useSelector } from "react-redux";
import { selectUser } from "../../redux/UserSlice";

export const IsAuthenticated = () => {
    const { user } = useSelector(state => state);
    return user === '2f826c69af1741770cc13d2921f1009d' ? true : false
};
