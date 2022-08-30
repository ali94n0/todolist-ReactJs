// import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All", color: "#498205" },
  { value: "Completed", label: "Completed", color: "#498205" },
  { value: "Uncompleted", label: "Uncompleted", color: "#498205" },
];

const Navbar = ({ unCompletedTodos, onChange, selectedOption }) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  // const [status, setStatus] = useState("All");
  // const changeHandler = (e) => {
  //   setStatus(e.target.value);
  //   filterTodos(e.target.value);
  // };

  if (!unCompletedTodos)
    return (
      <header>
        <p>set your today todo's ...</p>
        <Select value={selectedOption} onChange={onChange} options={options} />
      </header>
    );
  return (
    <header>
      <div className="navText">
        <span>{unCompletedTodos}</span>
        <p>todo's is not completed.</p>
        {/* <select onChange={onSelect} value={status}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select> */}
      </div>
      <Select
        defaultValue={selectedOption}
        onChange={onChange}
        options={options}
      />
    </header>
  );
};

export default Navbar;
