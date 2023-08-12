import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function SortDropdown({ onSortChange, onRatingSortChange }) {
  return (
    <DropdownButton id="sort-dropdown" title="Sort By">
      <Dropdown.Item onClick={() => onSortChange("highToLow")}>
        Price: High to Low
      </Dropdown.Item>
      <Dropdown.Item onClick={() => onSortChange("lowToHigh")}>
        Price: Low to High
      </Dropdown.Item>
      <Dropdown.Item onClick={() => onRatingSortChange("highToLower")}>
        Rating: High to Lower
      </Dropdown.Item>
      <Dropdown.Item onClick={() => onRatingSortChange("lowToHigher")}>
        Rating: Low to Higher
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default SortDropdown;
