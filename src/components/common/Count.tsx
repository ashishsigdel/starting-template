"use client";
import { decrement, increment } from "@/redux/features/countSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Count() {
  const count = useSelector((state: any) => state.count.count);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const handleIncrement = async () => {
    setLoading(true);
    await delay(1000);
    try {
      dispatch(increment());
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleDecrement = async () => {
    setLoading(true);
    try {
      if (count === 0) throw new Error("Cannot decrease below 0.");
      dispatch(decrement());
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleIncreaseClick = () => {
    toast.promise(
      new Promise<void>((resolve, reject) =>
        handleIncrement().then(resolve).catch(reject)
      ),
      {
        loading: "Increasing...",
        success: "Increased Successfully!",
        error: (err) => err.message || "An error occurred.",
      }
    );
  };

  const handleDecreaseClick = () => {
    toast.promise(
      new Promise<void>((resolve, reject) =>
        handleDecrement().then(resolve).catch(reject)
      ),
      {
        loading: "Decreasing...",
        success: "Decreased Successfully!",
        error: (err) => err.message || "An error occurred.",
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl text-black font-bold dark:text-white">
        Count: {count}
      </div>

      <div className="flex gap-x-2">
        <div
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
          onClick={handleIncreaseClick}
        >
          +
        </div>
        <div
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:ring-red-300 cursor-pointer"
          onClick={handleDecreaseClick}
        >
          -
        </div>
      </div>
    </div>
  );
}
