import { CiSearch } from "react-icons/ci";
const Searchbar = () => {
  return (
    <div className="group">
      <label className="flex bg-neutral-100 w-fit rounded-md gap-2 py-1 text-neutral-500 m-auto shadow-md select-none group-hover:bg-white group-focus-within:bg-white ring-2 ring-transparent group-focus-within:ring-gray-400 group-focus-within:text-neutral-900">
        <CiSearch className="size-6 m-auto ml-2" />
        <input
          type="text"
          className="bg-transparent border-none outline-none rounded-r-md group-hover:bg-white group-focus-within:bg-white"
        />
      </label>
    </div>
  );
};
export default Searchbar;
