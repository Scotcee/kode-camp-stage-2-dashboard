function Header({ title, studentCount, averageScore }) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{`Total Students: ${studentCount}`}</p>
      <p>{`Class Average: ${averageScore.toFixed(1)}`}</p>
    </header>
  );
}

export default Header;
