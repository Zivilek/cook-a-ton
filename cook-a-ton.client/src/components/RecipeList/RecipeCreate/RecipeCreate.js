import React, { useState, useEffect } from 'react';
import ImagesViewer from '../../ImagesViewer/ImagesViewer';
import './RecipeCreate.css';

import recipeCourseDataService from '../../../dataService/RecipeCourseDataService';
import Recipe from '../../../model/Recipe';

import { Form, Input, Select, Button, Radio } from 'antd';
import CourseFilter from '../../CourseFilter/CourseFilter';
import TagFilter from '../../TagFilter/TagFilter';
const { Option } = Select;

const RecipeCreate = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const [recipe, setRecipe] = useState(new Recipe());

  useEffect(() => {
    console.log(recipe);
  }, [recipe]);

  //
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;
  //

  return (
    <div className="recipe-create">
      <ImagesViewer />
      <div className="recipe-form">
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item label="Name">
            <Input placeholder="Recipe name" />
          </Form.Item>

          <Form.Item label="Course">
            <CourseFilter
              onSelect={(value) => setRecipe({ ...recipe, course: value })}
            />
          </Form.Item>
          <Form.Item label="Tags">
            <TagFilter
              onSelect={(value) => setRecipe({ ...recipe, tags: value })}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RecipeCreate;
