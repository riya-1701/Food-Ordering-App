import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData?.info;
  // console.log(resData.info.sla.deliveryTime);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="DOSA PIC"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRating}</h4>
      <h4>Rs. 400 for two</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
