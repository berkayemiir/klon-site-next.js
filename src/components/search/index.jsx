"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HiOutlineX, HiOutlineSearch } from "react-icons/hi";
import sanitizeHtml from "sanitize-html";

const Search = ({ open, setOpen, searchData }) => {
  const [searchKey, setSearchKey] = useState("");
  const [initialData] = useState(searchData);
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    const filtered = initialData.filter((item) =>
      item.title
        .toLocaleLowerCase("tr")
        .includes(searchKey.toLocaleLowerCase("tr"))
    );

    if (filtered.length > 0 && searchKey.length >= 3) {
      setFilteredData(filtered);
    }

    if (searchKey.length < 3) {
      setFilteredData([]);
      setErrorMessage("Aranacak kelime en az 3 karakter olmalıdır.");
    }

    if (searchKey.length >= 3 && filtered.length === 0) {
      setFilteredData([]);
      setErrorMessage("Aranan kelimeye uygun sonuç bulunamadı.");
    }
  };

  const handleEscape = () => {
    setOpen(false);
    setSearchKey("");
    setFilteredData([]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleEscape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return open ? (
    <div className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-50 z-20 flex items-center justify-center px-4 lg:px-0">
      <div className="w-[46rem] max-h-[60vh] rounded bg-white shadow-xl px-4 pt-6 pb-16 overflow-hidden">
        <div className="text-2xl flex justify-end text-gray-400">
          <button onClick={() => setOpen(false)}>
            <HiOutlineX />
          </button>
        </div>
        <div className="text-center tracking-wider font-semibold text-gray-800 mb-6">
          Kapatmak için ESC ye basın
        </div>

        <div className="flex items-center gap-4 h-12">
          <input
            type="text"
            className="w-full border border-[#727475] px-4 py-2 text-lg rounded-full h-full hover:border-[#1f354d] focus:border-[#1f354d] active:border-[#1f354d] transition-all duration-300 ease-in-out outline-0 placeholder:text-sm tracking-wide"
            placeholder="Aranacak kelimeyi giriniz..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button
            className="bg-[#727475] text-white px-10 py-2 rounded-full h-full transition-all duration-300 ease-in-out hover:bg-[#1f354d]"
            onClick={handleSearch}
          >
            <HiOutlineSearch />
          </button>
        </div>
        {filteredData && filteredData.length > 0 && (
          <div className="w-full flex flex-col overflow-y-auto max-h-[60vh] pb-[150px]">
            <div className="text-[#70bd86] font-bold text-lg py-4 inline-block">
              Toplam {filteredData.length} sonuç bulundu.
            </div>

            {filteredData.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="bg-white border border-gray-200 rounded-lg shadow p-4 mb-4 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <div className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {item.title}
                </div>
                <div className="font-normal text-sm text-gray-700 line-clamp-3">
                  {sanitizeHtml(item.spot, {
                    allowedTags: [],
                    allowedAttributes: {},
                  })}
                </div>
              </Link>
            ))}
          </div>
        )}

        {errorMessage && (
          <div className="text-red-500 text-sm mt-5 text-center">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default Search;
