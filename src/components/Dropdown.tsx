import React, { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ setOpen }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setOpen(isDropdownOpen);
  }, [isDropdownOpen, setOpen]);

  return (
    <div className="relative w-full px-4 transition-all duration-150 md:px-0 ">
      <Menu>
        {({ open }) => {
          if (open !== isDropdownOpen) {
            setIsDropdownOpen(open);
          }
          return (
            <>
              <Menu.Button className="flex items-center justify-between w-full px-4 py-2 text-xs text-black bg-white border border-black">
                Impressum und Datenschutz
                <FiChevronDown
                  className={`transform transition-transform ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Menu.Button>
              <Menu.Items
                className={`${
                  open ? "block" : "hidden"
                }  left-4 w-full md:left-0 border  border-black text-xs bg-white font-medium z-20`}
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://www.nordkurier.de/impressum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        active
                          ? "bg-cyan-95 text-cyan-20 border  transition-colors duration-150"
                          : "text-gray-900"
                      } block px-4 py-2`}
                    >
                      Impressum
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="https://www.nordkurier.de/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        active
                          ? "bg-cyan-95 text-cyan-20 font-medium border border-t-gray-300 transition-colors duration-150"
                          : "text-gray-900 "
                      } block px-4 py-2`}
                    >
                      Datenschutz
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
