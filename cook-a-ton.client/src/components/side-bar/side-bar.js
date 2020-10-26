import React from "react";
import "./side-bar.css";
import { Input, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const SideBar = () => {
  const children = [];
  for (let i = 0; i < 10; i++) {
    children.push(<Option key={`Tagas-${i}`}>{`Tagas-${i}`}</Option>);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="side-bar">
      <div className="filter-section">
        <Search
          placeholder="input search text"
          allowClear
          onSearch={() => {}}
        />

        <Select placeholder="Course" onChange={handleChange} allowClear>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>

        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Tags"
          defaultValue={[]}
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
    </div>
  );
};

export default SideBar;
