import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CourseRegistrationScreen = () => {
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [registeredCourses, setRegisteredCourses] = useState([]);

  const handleRegistration = () => {
    // Validate if the course details are entered
    if (!courseId || !courseTitle) {
      alert('Please enter course details.');
      return;
    }

    // Check if the course is already registered
    const isCourseAlreadyRegistered = registeredCourses.some(course => course.id === courseId);
    if (isCourseAlreadyRegistered) {
      alert('Course already registered.');
      return;
    }

    // Register the course
    const newCourse = { id: courseId, title: courseTitle };
    setRegisteredCourses(prevCourses => [...prevCourses, newCourse]);

    // Clear the form fields
    setCourseId('');
    setCourseTitle('');

    alert(`Course Registered: ${courseTitle}`);
  };

  return (
    <View>
      <Text>Course Registration</Text>
      <TextInput
        placeholder="Course ID"
        value={courseId}
        onChangeText={setCourseId}
      />
      <TextInput
        placeholder="Course Title"
        value={courseTitle}
        onChangeText={setCourseTitle}
      />
      <Button title="Register Course" onPress={handleRegistration} />

      <Text>Registered Courses:</Text>
      {registeredCourses.map(course => (
        <Text key={course.id}>{course.title}</Text>
      ))}
    </View>
  );
};

export default CourseRegistrationScreen;
