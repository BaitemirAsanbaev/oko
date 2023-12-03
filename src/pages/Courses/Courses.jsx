import CourseCard from "../../components/CourseCard/CourseCard.jsx";

export default function Courses() {
  return (
    <div className='page'>
      <h1>Наши Курсы</h1>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap"
      }}>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
      </div>
    </div>
  )
}
