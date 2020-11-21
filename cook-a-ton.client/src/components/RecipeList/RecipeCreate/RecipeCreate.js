import React, { useState, useEffect } from 'react';
import ImagesViewer from '../../ImagesViewer/ImagesViewer';
import './RecipeCreate.css';

import recipeDataService from '../../../dataService/RecipeDataService';
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

  const postRecipe = async () => {
    const someData = await recipeDataService.postRecipe(recipe);
    console.log(someData);
  };

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
            <Input
              placeholder="Recipe name"
              value={recipe.name}
              onChange={(event) =>
                setRecipe({ ...recipe, name: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item label="Course">
            <CourseFilter
              onSelect={(course) => setRecipe({ ...recipe, course })}
            />
          </Form.Item>
          <Form.Item label="Tags">
            <TagFilter onSelect={(tags) => setRecipe({ ...recipe, tags })} />
          </Form.Item>
        </Form>
      </div>
      <Button onClick={() => postRecipe()}>Click me to post (:</Button>
    </div>
  );
};

export default RecipeCreate;
