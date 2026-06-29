import StudentCard from "./StudentCard";

const StudentList = ({
  students,
  title = "All Students",
  children,
  getGrade,
}) => {
  return (
    <section className="student-section">
      <h2>{title}</h2>

      {students.length > 0 ? (
        <div className="student-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              grade={getGrade(student.score)}
            />
          ))}
        </div>
      ) : (
        <p>No students to display</p>
      )}

      {children}
    </section>
  );
};

export default StudentList;
