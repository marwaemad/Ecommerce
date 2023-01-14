export default function Sort({ sortBy }) {
  const handleOnClick = (selector) => {
    sortBy(selector);
  };
  return (
    <div className="px-5">
      <div className="dropdown inline-block relative">
        <button className="bg-blue-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center -10">
          <span className="mr-1">Sort</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 z-20 w-48 right-0">
          <li className="" onClick={() => handleOnClick("desc")}>
            <a
              className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Price:Hight To Low
            </a>
          </li>
          <li className="" onClick={() => handleOnClick("asc")}>
            <a
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Price :Low To High
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
