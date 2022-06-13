import React, { ChangeEventHandler } from "react";
import "./search.style.css";

type SearchBoxProps = {
    className: string;
    placeholder: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const Search = ({ placeholder, handleChange }: SearchBoxProps) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
