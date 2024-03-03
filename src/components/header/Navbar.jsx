"use client";

import Link from "next/link";
import Search from "../search";
import { HiMenu, HiOutlineX, HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

const Navbar = ({ data, searchData }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(null);

  return (
    <div className="bg-[#1f354d] py-3">
      <div className="container mx-auto px-4">
        <div className="">
          <ul className="hidden text-lg text-white lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center">
              {data.map((item) => (
                <div
                  className="flex items-center justify-center group relative z-10 before:content-[''] before:absolute before:w-full before:h-4 before:top-7 before:left-0 before:z-0 before:block"
                  key={item.id}
                >
                  <Link
                    className=" hover:bg-white hover:text-black hover:rounded-lg px-2 py-2 text-sm group-hover:bg-white group-hover:text-black group-hover:rounded-lg xl:px-4"
                    href={
                      item.url === "/duyuru-ve-haber" ? "/haberler" : item.url
                    }
                    key={item.id}
                    onClick={() => setShowMenu(false)}
                  >
                    {item.name}
                  </Link>

                  {item.children.length > 0 && (
                    <ul className="w-full hidden group-hover:block bg-white absolute rounded-lg z-10 border-b-4 border-[#1f354d] top-10">
                      {item.children.map((item) => (
                        <li key={item.id} className="py-1 px-2">
                          <Link
                            className="text-black hover:rounded-lg hover:text-[#1f354d] text-sm"
                            href={item.url}
                            key={item.id}
                            onClick={() => setShowMenu(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <button onClick={() => setShowSearch(true)}>
              <HiOutlineSearch />
            </button>
          </ul>
          <div
            className={`fixed h-screen w-full max-w-80 transition-all left-0 top-0 text-lg bg-[#1f354d] text-white z-20 -translate-x-80 lg:hidden ${
              showMenu === true ? "translate-x-0" : ""
            }`}
          >
            <div className="relative">
              <ul className="py-10">
                {data.map((item) => (
                  <div key={item.id}>
                    <Link
                      className="w-full px-4 py-2 text-sm"
                      href={
                        item.url === "/duyuru-ve-haber" ? "/haberler" : item.url
                      }
                      key={item.id}
                      onClick={() => setShowMenu(false)}
                    >
                      {item.name}
                    </Link>

                    {item.children.length > 0 && (
                      <ul>
                        {item.children.map((item) => (
                          <li key={item.id}>
                            <Link
                              className="px-4 py-2 text-sm"
                              href={item.url}
                              key={item.id}
                              onClick={() => setShowMenu(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </ul>
              <button
                onClick={() => setShowMenu(false)}
                className="text-white text-3xl absolute top-2 right-2 lg:hidden"
              >
                <HiOutlineX />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between lg:hidden">
            <button
              onClick={() => setShowMenu(true)}
              className="text-white text-3xl"
            >
              <HiMenu />
            </button>
            <button
              onClick={() => setShowSearch(true)}
              className="text-white text-2xl"
            >
              <HiOutlineSearch />
            </button>
          </div>
          <Search
            open={showSearch}
            setOpen={setShowSearch}
            searchData={searchData}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
