import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ setOpen }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setOpen(isDropdownOpen);
  }, [isDropdownOpen, setOpen]);

  return (
    <div className="relative w-full px-4 md:px-0">
      <Menu>
        {({ open }) => {
          if (open !== isDropdownOpen) {
            setIsDropdownOpen(open);
          }
          return (
            <>
              <Menu.Button className="flex items-center justify-between w-full py-2 text-xs text-black bg-white border border-black">
                Datenschutz und Impressum
                <FiChevronDown
                  className={`transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Menu.Button>
              <Menu.Items
                className={`${
                  open ? "block" : "hidden"
                } mt-2 absolute left-0 w-full  bg-white shadow-lg rounded border border-gray-200 divide-y divide-gray-100 z-20`}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://www.nordkurier.de/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        active
                          ? "bg-cyan-95 text-cyan-20 rounded-t-sm transition-colors duration-150"
                          : "text-gray-900"
                      } block px-4 py-2`}
                    >
                      Datenschutz
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://www.nordkurier.de/impressum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        active
                          ? "bg-cyan-95 text-cyan-20 rounded-b-sm transition-colors duration-150"
                          : "text-gray-900"
                      } block px-4 py-2`}
                    >
                      Impressum
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </>
          );
        }}
      </Menu>
    </div>
  );
};

export default Dropdown;
