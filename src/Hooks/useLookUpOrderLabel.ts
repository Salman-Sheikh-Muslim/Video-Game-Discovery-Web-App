import React from 'react'

const sortOrders = [
     { value: "", label: "Relevance" }, //Default Order
    { value: "added", label: "Date Added" }, //Adding hypen to show newest games first
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
 
      const useLookUpOrderLabel = (order: string | undefined) => {
        const selectedOrder = sortOrders.find((item) => item.value === order);
        return selectedOrder
        //  ? selectedOrder.label : "";
      };



export default useLookUpOrderLabel;