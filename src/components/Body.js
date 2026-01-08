import RestaurantCard from "./RestaurantCard";
import resLists from "../../utils/mockData";
import { useState } from "react";
import resLists from "../../utils/mockData";

const Body = () => {
  //Local State Variable - Super Power Variable(For tht Use HOOKS known as UseState) - to chaange state in UI as data changes
  const [ListOfRestaurants, setListOfRestaurants] = useState(resLists);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredLists = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredLists);
          }}
          //  FOR HOVERING: onMouseOver={() => {
          //     console.log("button Clicked");
          //   }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* {/* <RestaurantCard resData={resLists[0]} /> */}
        {/* <RestaurantCard resName="KFC" cuisine="Biryani, Mutton, Chicken" /> */}
        {/* <RestaurantCard resData={resLists[1]} />
        <RestaurantCard resData={resLists[2]} />
        <RestaurantCard resData={resLists[3]} />  OR USE MAP FUNCTION*/}

        {/* Always use key in map function. Not using keys (not acceptabel <<< index as key <<< unique key id (best practice)*/}

        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
