import React from "react";

type inputTypes = {
  label: string;
  name: string;
  onChange?: () => void;
  value?: any;
  placeholder: string;
  optionsList: Array<any>;
};

const CustomSelect = ({
  label,
  name,
  onChange,
  value,
  placeholder,
  optionsList,
}: inputTypes) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-[4px] text-[#23282B] font-montserrat t text-[13px] md:text-base font-medium">
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="w-full bg-white border-transparent border-b border-solid border-b-[#808080] rounded-[4px] px-4 py-3 text-[#23282B] font-montserrat text-base font-medium shadow-card placeholder:text-#999999 placeholder:font-montserrat  placeholder:font-normal ">
        <option
          selected
          disabled
          hidden
          className="text-[#999999] text-base font-montserrat font-medium">
          {placeholder}
        </option>
        {optionsList.map((option: any, i) => (
          <option
            className="flex items-start gap-[10px] font-montserrat font-medium text-base"
            key={i}
            value={option.name}>
            <span className="mx-1">{option.emoji}</span>&nbsp;&nbsp;
            <span className="mx-1">{option.name}</span>
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
