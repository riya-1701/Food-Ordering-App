import RestaurantCard from "./RestaurantCard";
import resLists from "../../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
        {/* <img></img> */}
      </div>
      <div className="res-container">
        {/* {/* <RestaurantCard resData={resLists[0]} /> */}
        {/* <RestaurantCard resName="KFC" cuisine="Biryani, Mutton, Chicken" /> */}
        {/* <RestaurantCard resData={resLists[1]} />
        <RestaurantCard resData={resLists[2]} />
        <RestaurantCard resData={resLists[3]} />  OR USE MAP FUNCTION*/}

        {/* Always use key in map function. Not using keys (not acceptabel <<< index as key <<< unique key id (best practice)*/}

        {resLists.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
