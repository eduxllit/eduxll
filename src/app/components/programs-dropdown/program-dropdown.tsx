"use client"
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function ProgramsDropdown() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["All Programs"]));

  const selectedValue = React.useMemo(() => {
    return Array.from(selectedKeys).join(", ").replace(/_/g, " ");
  }, [selectedKeys]);

  const handleSelectionChange = (selection:any) => {
    setSelectedKeys(new Set(selection));
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className="capitalize bg-transparent border-b rounded-none text-blue-800 text-lg"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="abroad">Study-abroad-programs</DropdownItem>
        <DropdownItem key="Popular">Popular Programs</DropdownItem>
        <DropdownItem key="Science">Data Science, AI & Machine Learning</DropdownItem>
        <DropdownItem key="MBA">MBA (Master of Business Administration)</DropdownItem>
        <DropdownItem key="Finance">Finance and Accounting</DropdownItem>
        <DropdownItem key="Information">Information Technology</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
