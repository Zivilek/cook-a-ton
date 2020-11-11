import React, { useState } from 'react';
import './RecipeListHeader.css';

import RecipeCreate from '../RecipeCreate/RecipeCreate';

import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import { Modal } from 'antd';

const RecipeListHeader = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div className="RecipeList-header">
      <Button
        className="add-recipe-button"
        icon={<PlusCircleOutlined />}
        onClick={showModal}
      >
        Add recipe
      </Button>

      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        height={1000}
      >
        <RecipeCreate />
      </Modal>
    </div>
  );
};

export default RecipeListHeader;
