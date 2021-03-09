import PropTypes from "prop-types";

const Input = ({ label }) => {
  return (
    <div className="pb-4">
      <label className="pr-6" htmlFor={label.toLowerCase()}>
        {label}
      </label>
      <input
        className="border-gray border-2 pb-2 flex-col flex justify-center"
        id={label.toLowerCase().replace(" ", "-")}
        type="text"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
