import React, { useEffect, useState } from "react";
import client from "../../api/client";
import { Select } from "antd";

//ant lib logic
const { Option } = Select;

const RecipeFilter = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const renderTags = async () => {
      const { data } = await client.get("/userRecipeTag");

      setTags(data.data);
    };

    renderTags();
  }, []);

  const renderOptions = tags.map((tag) => {
    return <Option key={tag.name}>{tag.name}</Option>;
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select
      mode="multiple"
      allowClear
      placeholder="Tags"
      onChange={handleChange}
    >
      {renderOptions}
    </Select>
  );
};

export default RecipeFilter;
