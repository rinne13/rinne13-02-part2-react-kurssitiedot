const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    console.log('Current sum:', sum);
    console.log('Current part:', part);
    return sum + part.exercises;
  }, 0);

  return <h3>Total number of exercises: {totalExercises}</h3>;
};

export default Total;
