import React from "react";

export function ToDoList({ items, onAdd, onDelete }) {
  return (
    <div className="sticky top-[70px] z-10 textbar flex justify-between bg-black rounded-full pl-4 px-2 py-2 mt-2 mx-4">
      <input
        type="text"
        className="sticky placeholder:text-gray-200 text-white italic bg-transparent outline-none w-full p-2"
        id="input-box"
        placeholder="note something..."
        autoComplete="off"
      />
      <button
        type="button"
        id="buttonAdd"
        onClick={onAdd}
        className="hover:bg-black active:scale-75 duration-150 ease-in bg-red-500 rounded-full px-4 py-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="red-plus-icon size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="square"
        >
          <path d="M12 5v14m-7-7h14" />
        </svg>
      </button>
    </div>
  );
}
