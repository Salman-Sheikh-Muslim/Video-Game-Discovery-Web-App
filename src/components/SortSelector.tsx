import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "../storeGameQuery";
import { sortOrders } from "../entities/sortOrders";

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  console.log("Sort Order: " + currentSortOrder);
  return (
    //Menu chakra defined component can be used to render a beauiful drop down list.
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order By {currentSortOrder?.label || "Relevance"}
        {/* labeling relevance as default sort order */}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
