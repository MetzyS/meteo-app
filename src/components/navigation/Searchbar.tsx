import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import cities from "../../data/current.city.list.min.json";

const Searchbar = () => {
  const [searchKey, setSearchKey] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showCityList, setShowCityList] = useState(false);

  const handleFilteredCities = (value: string) => {
    if (value.length < 1) {
      setFilteredCities([]);
    } else {
      setFilteredCities(
        cities.filter((item) =>
          item.name.toLowerCase().startsWith(value.toLowerCase())
        )
      );
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
          onChange={(e) => {
            setSearchKey(e.target.value);
            handleFilteredCities(e.target.value);
          }}
        />
      </label>
      <div className="absolute left-5 right-5 top-10 bottom-0 max-h-72 overflow-y-auto bg-slate-700 text-white flex h-fit flex-col shadow-md scrollbar">
        {filteredCities.length != 0 && (
          <ul>
            {filteredCities!.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="p-2 border-b border-b-slate-600 hover:bg-slate-500 w-full text-left"
                  onClick={(e) => {
                    setSearchKey(e.target.value);
                    handleFilteredCities("");
                  }}
                  value={item.name}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default Searchbar;
