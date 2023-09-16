

const Course = ({ selectedCourses, reamainTime, totalTime }) => {
  const listItemStyle = {
    listStyle: 'none',
    fontSize : ' x-large',
  };
  return (
    <div>
      <h2>Selected Courses{selectedCourses.length}</h2>
      <h2>Remaning Time:{reamainTime} Hrs</h2> 
      <h2>Total Time:{totalTime} Hrs</h2>
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