import { Count } from "@/components/common";
import { ThemeToggler } from "@/utils";

export default function Home() {
  return (
    <div className="bg-light dark:bg-dark">
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex gap-5">
          <ThemeToggler />
          <button>
            <div className="text-[26px] text-skin font-bold dark:hidden">
              Light
            </div>
            <div className="text-[26px] text-skin font-bold hidden dark:block">
              Dark
            </div>
            <div className="text-[26px] text-danger font-bold ">Danger</div>
            <div className="text-[26px] text-success font-bold ">Success</div>
            <div className="text-[26px] text-warning font-bold">Warning</div>
          </button>
        </div>
        <Count />
      </div>
    </div>
  );
}
