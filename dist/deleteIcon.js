const deleteIcon = ({ ...props }) => {
  const a = `<svg
  width="14"
  height="18"
  viewBox="0 0 14 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M10.5 1H13C13.55 1 14 1.45 14 2C14 2.55 13.55 3 13 3H1C0.45 3 0 2.55 0 2C0 1.45 0.45 1 1 1H3.5L4.21 0.29C4.39 0.11 4.65 0 4.91 0H9.09C9.35 0 9.61 0.11 9.79 0.29L10.5 1ZM3 18C1.9 18 1 17.1 1 16V6C1 4.9 1.9 4 3 4H11C12.1 4 13 4.9 13 6V16C13 17.1 12.1 18 11 18H3Z"
    fill="black"
    opacity="0.54"
  />
</svg>`;

return a
};

export { deleteIcon };
