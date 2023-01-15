import Month from './temp';

function Tempp() {
  const year = 2023;
  const months = Array.from(Array(12).keys()).map(month => month + 1);
  return (
    <div className="App">
      {months.map(month => (
        <Month key={month} year={year} month={month} />
      ))}
    </div>
  );
}

export default Tempp;

