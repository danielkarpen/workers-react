import PropTypes from "prop-types";

const Row = ({ id, name, job, handler }) => {
  return (
    <tr data-id={id} className="border-b">
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <button
          onClick={handler}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

Row.defaultProps = {
  job: "N/A",
};

export default Row;
