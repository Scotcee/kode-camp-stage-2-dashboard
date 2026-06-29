import Badge from "./Badge";
import StatBar from "./StatBar";

const StudentCard = ({
  student: { firstName, lastName, track, score, isActive, skills, avatar },
  grade,
}) => {
  return (
    <div className={`student-card ${isActive ? "active" : "inactive"}`}>
      <img src={avatar} alt={`${firstName} ${lastName}`} className="avatar" />

      <h2>{`${firstName} ${lastName}`}</h2>
      <div className="badge-group">
        <Badge label={track} type="track" />
        <Badge label={isActive ? "Active" : "Inactive"} type="status" />
        <Badge label={`Grade: ${grade}`} type="grade" />
      </div>
      <StatBar score={score} />

      <div className="skills">
        <strong>Skills:</strong>

        {skills.length > 0 ? (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills listed yet</p>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
