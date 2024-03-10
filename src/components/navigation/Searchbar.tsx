import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import cities from "../../data/current.city.list.min.json";

const Searchbar = () => {
  // const test = Object.entries(cities);
  const [searchKey, setSearchKey] = useState(undefined);
  const [filteredCities, setFilteredCities] = useState(undefined);
  const [showCityList, setShowCityList] = useState(false);
  // console.log(test);
  // const cities = Object.entries(props.data);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value.length < 3) {
      setSearchKey(undefined);
      setFilteredCities(undefined);
      setShowCityList(false);
    } else {
      setSearchKey(e.target.value);
      setFilteredCities(
        cities.filter((item) =>
          item.name.toLowerCase().startsWith(searchKey.toLowerCase())
        )
      );
      setShowCityList(true);
    }
  };
  return (
    <div className="group z-20 cursor-pointer relative px-5">
      <label className="flex bg-slate-800 rounded-md gap-2 py-1 text-slate-500 m-auto shadow-md select-none group-hover:bg-slate-700 group-hover:text-slate-400 group-focus-within:bg-slate-700 ring-2 ring-transparent group-focus-within:ring-slate-500 group-focus-within:text-slate-400">
        <CiSearch className="size-6 ml-2" />
        <input
          type="text"
          className="bg-transparent border-none outline-none rounded-r-md group-hover:bg-slate-700 group-focus-within:bg-slate-700"
          value={searchKey}
          onChange={handleSearch}
        />
      </label>
      <div className="absolute left-5 right-5 top-10 bottom-0 max-h-72 overflow-y-scroll bg-slate-700 text-white flex h-fit flex-col">
        {showCityList && (
          <ul>
            {filteredCities!.map((item) => (
              <li
                className="p-2 border-b border-b-slate-600 hover:bg-slate-500"
                onClick={(e) => {
                  setSearchKey(e.target.textContent);
                  setShowCityList(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Searchbar;
