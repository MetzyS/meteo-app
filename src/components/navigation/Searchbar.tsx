import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
  return (
    <div className="group z-20 cursor-pointer">
      <label className="flex bg-slate-800 w-fit rounded-md gap-2 py-1 text-slate-500 m-auto shadow-md select-none group-hover:bg-slate-700 group-hover:text-slate-400 group-focus-within:bg-slate-700 ring-2 ring-transparent group-focus-within:ring-slate-500 group-focus-within:text-slate-400">
        <CiSearch className="size-6 m-auto ml-2" />
        <input
          type="text"
          className="bg-transparent border-none outline-none rounded-r-md group-hover:bg-slate-700 group-focus-within:bg-slate-700"
        />
      </label>
    </div>
  );
};
export default Searchbar;
