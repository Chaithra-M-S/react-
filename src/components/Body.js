import RestaurentCard from "./RestaurentCard";

import { useState } from 'react';
import resobj from "../utils/mockdata";




const Body = () => {

  //states variables-super powerfull variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resobj);



  //NormAL VARIABLE
  // let listOfRestaurantsjs = [
  //   {

  //     "info": {
  //       "id": "23700",
  //       "name": "McDonald's",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/2cf6a7b8-507f-4908-95fa-a8ac271eafa8_23700.JPG",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": [
  //         "Burgers",
  //         "Beverages",
  //         "Cafe",
  //         "Desserts"
  //       ],
  //       "avgRating": 4.4,
  //       "deliveryTime": 14,

  //     },
  //   },
  //   {
  //     "info": {
  //       "id": "23831",
  //       "name": "Domino's Pizza",
  //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/8f8228e9-e42a-420c-8c17-8604822cec8e_23831.JPG",
  //       "costForTwo": "₹400 for two",
  //       "cuisines": [
  //         "Pizzas",
  //         "Italian",
  //         "Pastas",
  //         "Desserts"
  //       ],
  //       "avgRating": 3.8,
  //       "deliveryTime": 20,

  //     }
  //   }


  // ];
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search restaurants..." />
        <button>Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filterLogic = listOfRestaurants.filter((res) => { return res.info.avgRating > 4 });
          setListOfRestaurants(filterLogic)
        }}>
          Top Rated Restaurants</button>
      </div >
      <div className="res-container">
        {
          listOfRestaurants.map((restaurant) => (
            <RestaurentCard resData={restaurant} key={restaurant.info.id}></RestaurentCard>
          ))}


      </div>
    </div >
  )
}

export default Body;