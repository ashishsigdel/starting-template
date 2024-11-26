"use client";
import { decrement, increment } from "@/redux/features/countSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Count() {
  const count = useSelector((state: any) => state.count.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    if (count === 0) return toast.error("Count can't be less than 0");
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col justify-center items-center space-x-2">
      <div className="text-2xl text-black font-bold dark:text-white">
        Count: {count}
      </div>

      <div className="flex gap-x-2">
        <div
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
          onClick={handleIncrement}
        >
          +
        </div>
        <div
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-300 cursor-pointer"
          onClick={handleDecrement}
        >
          -
        </div>
      </div>
    </div>
  );
}
