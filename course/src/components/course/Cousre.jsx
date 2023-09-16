

const Course = ({ selectedCourses }) => {
  const listItemStyle = {
    listStyle: 'none',
    fontSize : ' x-large',
  };
  return (
    <div>
      <h1>list item</h1>
      <h2>Selected Courses{selectedCourses.length}</h2>
      <ul>
        {selectedCourses.map((course, index) => (
          <li key={index} style={listItemStyle}>
          {`${index + 1}. ${course.Title}`}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;