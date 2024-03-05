import React from "react";

const AddIcon: React.FC<{ className?: string }> = ({ className: classes }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M17.75 10.2476H10.25V17.7476H7.75V10.2476H0.25V7.74756H7.75V0.247559H10.25V7.74756H17.75V10.2476Z"
        fill="white"
      />
    </svg>
  );
};

export default AddIcon;
