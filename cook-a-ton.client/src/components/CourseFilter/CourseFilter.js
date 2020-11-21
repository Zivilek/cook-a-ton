import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import recipeCourseDataService from '../../dataService/RecipeCourseDataService';

//ant lib logic
const { Option } = Select;

const CourseFilter = ({ onSelect = () => {} }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await recipeCourseDataService.getCourses();

      setCourses(data.data);
    };

    getCourses();
  }, []);

  const renderOptions = courses.map((course) => {
    return <Option key={course._id}>{course.name}</Option>;
  });

  function handleChange(value) {
    onSelect(value);
  }

  return (
    <Select placeholder="Course" onChange={handleChange} allowClear>
      {renderOptions}
    </Select>
  );
};

export default CourseFilter;
