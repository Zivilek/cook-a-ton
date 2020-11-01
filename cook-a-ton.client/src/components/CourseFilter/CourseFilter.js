import React, { useEffect, useState } from "react";
import client from "../../api/client";
import { Select } from "antd";

//ant lib logic
const { Option } = Select;

const CourseFilter = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const { data } = await client.get("/userCourse");

      setCourses(data.data);
    };

    getCourses();
  }, []);

  const renderOptions = courses.map((course) => {
    return <Option key={course._id}>{course.name}</Option>;
  });

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Select placeholder="Course" onChange={handleChange} allowClear>
      {renderOptions}
    </Select>
  );
};

export default CourseFilter;
