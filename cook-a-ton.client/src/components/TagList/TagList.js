import React from 'react';
import { Tag } from 'antd';

const TagList = ({ tags }) => {
  const renderTagList = tags.map((tag) => {
    return <Tag color="green">{tag.name}</Tag>;
  });

  return <div>{renderTagList}</div>;
};

export default TagList;
