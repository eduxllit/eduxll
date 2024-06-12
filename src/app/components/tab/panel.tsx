"use client";
import React from "react";

type TabPanelProps = {
  children?: React.ReactNode;
  active?: boolean;
};

const TabPanel = ({ active, children }: TabPanelProps) => {
  return <React.Fragment>{active && children}</React.Fragment>;
};

export default TabPanel;
