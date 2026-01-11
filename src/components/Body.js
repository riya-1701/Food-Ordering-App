import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - Super Power Variable(For tht Use HOOKS known as UseState) - to chaange state in UI as data changes
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
//useEffect calls the callback function after rendering the component
useEffect(()=>{
  fetchData();
}, []);

const fetchData = async () => {
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7458774&lng=83.3846564&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const json = await data.json();
// console.log(json);
console.log(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

// Optional Chaining
setListOfRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
// ListOfRestaurants(json?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

//Conditional Rendering: Shimmer UI
if(ListOfRestaurants.length === 0){
  return <Shimmer />
}

  return (
    <div className="body">
      <div className="filter">
        <input type= "text" className="search-box" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button className="search-btn" 
        onClick={()=>{
          //Filter the restraunt cards and update the UI
          console.log(searchText);

          const filteredRestaurant = ListOfRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setListOfRestaurants(filteredRestaurant);
          console.log(filteredRestaurant);

        }}>Search</button>
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
