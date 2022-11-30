import React from "react";

const Spinner = () => {
  return (
    <div>
      <progress className="progress progress-primary w-56" max="100"></progress>
      <progress
        className="progress progress-secondary w-56"
        max="100"
      ></progress>
      <progress className="progress progress-accent w-56" max="100"></progress>
      <progress className="progress progress-info w-56" max="100"></progress>
      <progress className="progress progress-error w-56" max="100"></progress>
    </div>
  );
};

export default Spinner;
