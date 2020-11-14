import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import recipeTagDataService from '../../dataService/RecipeTagDataService';

//ant lib logic
const { Option } = Select;

const TagFilter = ({ onSelect = () => {} }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const renderTags = async () => {
      const { data } = await recipeTagDataService.getRecipeTags();

      setTags(data.data);
    };

    renderTags();
  }, []);

  const renderOptions = tags.map((tag) => {
    return <Option key={tag.name}>{tag.name}</Option>;
  });

  function handleChange(value) {
    onSelect(value);
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

export default TagFilter;
