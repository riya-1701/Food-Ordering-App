import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  // console.log(resData.info.sla.deliveryTime);
  return (
    <div className="res-card bg-gray-200 hover:bg-gray-300 border-2 m-4 p-4 w-[250px] rounded-lg">
      <img
        className="res-logo h-60 w-full rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="DOSA PIC"
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRating}</h4>
      <h4>Rs. 400 for two</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
