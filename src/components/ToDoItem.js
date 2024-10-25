import React from "react";

export function ToDoItem({ item, onDelete }) {
  return (
    <li className="transform translate-y-8 transition-transform duration-300 ease-in-out bg-black text-white font-light text-base rounded-3xl mx-6 pl-4 px-2 py-2 flex justify-between items-center group">
      {item}
      <button
        onClick={onDelete}
        className="bg-red-500 active:scale-75 justify-center rounded-full px-2 hover:bg-black transition duration-150 ease-in p-2"
        id="cross"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="plus-icon size-4 rotate-45"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="square"
        >
          <path d="M12 5v14m-7-7h14" />
        </svg>
      </button>
    </li>
  );
}
