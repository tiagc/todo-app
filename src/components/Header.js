import React from "react";

export function Test() {}

export function Header() {
  return (
    <div className="sticky top-0 z-10">
      <div className="mx-auto max-w-screen-sm px-4 pt-4 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between">
          <button
            className="bg-black text-2xl text-white border-black border-2 rounded-full px-4 hover:text-red-500 transition duration-150 ease-in"
            id="to-do-tab"
          >
            to-do
          </button>
          <button
            className="bg-white text-2xl text-black border-black border-2 rounded-full px-4 hover:text-red-500 transition duration-150 ease-in"
            id="to-buy-tab"
          >
            to-buy
          </button>
          <h1
            className="text-2xl text-white bg-black border-black border-2 rounded-full px-4"
            id="list-tab"
          >
            list
          </h1>
          <button
            className="bg-white justify-center border-black border-2 rounded-full px-2 active:scale-75 transition duration-150 ease-in focus:bg-red-500 focus:border-red-500 p-2"
            id="plus-tab"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="plus-icon w-4 h-4 hover:stroke-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="square"
            >
              <path d="M12 5v14m-7-7h14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
