import React from 'react'
import { sortOrders } from '../entities/sortOrders';

      const useLookUpOrderLabel = (order: string | undefined) => {
        const selectedOrder = sortOrders.find((item) => item.value === order);
        return selectedOrder
        //  ? selectedOrder.label : "";
      };



export default useLookUpOrderLabel;