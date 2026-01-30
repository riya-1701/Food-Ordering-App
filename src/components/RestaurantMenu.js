import Shimmer from "./Shimmer";
// import RestaurantMenu from "../../utils/mockData";
import { useParams } from "react-router";
import { MENU_API } from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

const {resId} = useParams();
// console.log(resId);
//params read resId from server in localhost what user input and it passes in url so tht page can be dynamic
const [resInfo] = useRestaurantMenu(resId);

if(resInfo===null) return <Shimmer />;

    return(
        <div>
            <h1> Name of the Restraunt</h1>
            <h2>Menu</h2>
            <ul>
                <li>Pizza</li>
                <li>Burger</li>
                <li>Biryani</li>\
                <li>Ice Cream</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;