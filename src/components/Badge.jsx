const Badge = ({ label, type = "track" }) => {
  return <span className={`badge ${type}`}>{label}</span>;
};

export default Badge;
