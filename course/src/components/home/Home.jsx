import { useEffect, useState } from 'react'
import './home.css'
import Cousre from '../course/Cousre'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { BsBook } from 'react-icons/Bs';

function Home() {
    const [allcourses, setAllcourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [reamainTime, setReamainTime] = useState(20);
    const [totalTime, setTotalTime] = useState(0)


    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllcourses(data))
    }, [])

    const handleSelecteCourse = (course) => {
      const isExist = selectedCourses.find(item => item.id == course.id);
      let count = course.Time;

       if(isExist) {
         alert('allready selected')
       }
       else{
        selectedCourses.forEach(item =>{
          count = count + item.Time;
        });
        const totalReamainTime = 20 - count;
         setTotalTime(count);
         if(count >= 20){
           alert("you have alredy 20 hrs plus")
         } else{
         setReamainTime(totalReamainTime)
        setSelectedCourses([...selectedCourses,course]);
        }
       } 
      };
  return (
    <div className='container'>
        <div className="home-container">
            <div className="card-container">
                {
                    allcourses.map(course => 
                        <div key={course.id} className="card">
                    <div className="card-img">
                    <img className='photo' src={course.Image} alt="" />
                    </div>
                    <h2>{course.Title}</h2>
                    <p>
                      <small>
                          {course.Description}
                      </small>
                    </p>
                    <div className="info">
                      <h2>${course?.Price}</h2>
                      <h2><BsBook /> {course?.Time}hrs</h2>
                    </div>
                    <button onClick={() =>handleSelecteCourse(course)} className='card-btn'>Select</button>
                  </div>)
                }
            </div>
            <div className="cart">
                <Cousre selectedCourses={selectedCourses} reamainTime={reamainTime} totalTime={totalTime}></Cousre>
            </div>
        </div>  
    </div>
  )
}

export default Home
