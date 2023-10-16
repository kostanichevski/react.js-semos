export const Salary = () => {
  const monthlySalary = 2000;

  return (
    <div>
      <h1>Add Salary</h1>
      <button onClick={() => dispatch(depositBalance(monthlySalary))}>
        Add my monthly salary
      </button>
      <button>Add my salary but asyncronious - after some time</button>
    </div>
  );
};
