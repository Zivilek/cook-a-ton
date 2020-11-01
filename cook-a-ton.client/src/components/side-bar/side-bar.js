import React from "react";
import "./side-bar.css";
import { Input } from "antd";

import TagFilter from "../TagFilter/TagFilter";
import CourseFilter from "../CourseFilter/CourseFilter";

const { Search } = Input;

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="filter-section">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={() => {}}
        />

        <CourseFilter />
        <TagFilter />
      </div>
    </div>
  );
};

export default SideBar;
