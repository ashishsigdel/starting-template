"use client";
import { Count, PopupMessage } from "@/components/common";
import { ThemeToggler } from "@/utils";
import { useDispatch } from "react-redux";
import { setMessage } from "@/redux/features/popupMessageSlice";

export default function Home() {
  const dispatch = useDispatch();
  const popupHandle = (message: string, type: string, showOn: string) => {
    dispatch(
      setMessage({
        message: message,
        type: type,
        showOn: showOn,
      })
    );
  };
  return (
    <div className="bg-light dark:bg-dark">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center gap-5">
          <div className="flex gap-3 items-center">
            <p className="text-[26px] text-skin font-bold">Currrent Theme: </p>
            <div className="text-[26px] text-skin font-bold dark:hidden">
              Light
            </div>
            <div className="text-[26px] text-skin font-bold hidden dark:block">
              Dark
            </div>
          </div>
          <ThemeToggler />
        </div>
        <Count />

        <div className="flex justify-center flex-col items-center">
          <div className="text-[26px] text-black dark:text-white mt-5 font-bold underline">
            Color Test
          </div>
          <div className="text-[26px] text-danger font-bold ">Danger</div>
          <div className="text-[26px] text-success font-bold ">Success</div>
          <div className="text-[26px] text-warning font-bold">Warning</div>
        </div>
        <div className="mt-5 flex justify-center flex-col items-center">
          <PopupMessage messageShowOn={"test"} />
          <div className="flex gap-x-3">
            <button
              className="bg-danger px-3 py-2 rounded-lg"
              onClick={() =>
                popupHandle("This is Error Popup.", "error", "test")
              }
            >
              Show Popup
            </button>
            <button
              className="bg-success px-3 py-2 rounded-lg"
              onClick={() =>
                popupHandle("This is success Popup.", "success", "test")
              }
            >
              Show Popup
            </button>
            <button
              className="bg-blue-500 px-3 py-2 rounded-lg"
              onClick={() => popupHandle("This is Info Popup.", "info", "test")}
            >
              Show Popup
            </button>
            <button
              className="bg-warning px-3 py-2 rounded-lg"
              onClick={() =>
                popupHandle("This is Warning Popup.", "warning", "test")
              }
            >
              Show Popup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
