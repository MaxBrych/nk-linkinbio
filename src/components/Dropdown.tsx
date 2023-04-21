import React, { useCallback } from "react";
import Select from "react-select";

const Dropdown: React.FC = () => {
  const handleSelectChange = useCallback((option: any) => {
    if (option) {
      window.location.href = option.value;
    }
  }, []);

  const options = [
    { value: "https://www.nordkurier.de/datenschutz", label: "Datenschutz" },
    { value: "https://www.nordkurier.de/impressum", label: "Impressum" },
  ];

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: "100%",
      height: "48px",
      marginTop: "16px",
      fontSize: "14px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#4A5568",
      backgroundColor: "white",
      borderColor: "#CBD5E0",
      borderRadius: "4px",
    }),
    option: (provided: any) => ({
      ...provided,
      textAlign: "center",
      color: "#DDDDDD",
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <Select
      options={options}
      placeholder="Datenschutz und Impressum"
      onChange={handleSelectChange}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default Dropdown;
