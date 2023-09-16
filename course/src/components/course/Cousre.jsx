import './course.css'

const Course = ({ selectedCourses, reamainTime, totalTime }) => {
  const listItemStyle = {
    listStyle: 'none',
    fontSize : ' x-large',
  };
  return (
    <div>
      <h2 className="header1">Credit Hour Remaining {reamainTime} Hr</h2> 
      <h2>Course List:</h2>
      <ul>
        {selectedCourses.map((course, index) => (
          <li key={index} style={listItemStyle}>
          {`${index + 1}. ${course.Title}`}
        </li>
        ))}
      </ul>
      <h2>Total Time:{totalTime} Hrs</h2>
    </div>
  );
};

export default Course;