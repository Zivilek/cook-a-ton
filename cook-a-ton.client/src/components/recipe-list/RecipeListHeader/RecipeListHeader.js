import React, { useState } from "react";
import "./RecipeListHeader.css";

import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { Modal } from "antd";

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
    <div className="recipe-list-header">
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
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default RecipeListHeader;
