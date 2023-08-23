import React from "react";

type inputTypes = {
  label: string;
  name: string;
  onChange?: any;
  value?: any;
  placeholder: string;
};

const CustomInput = ({
  label,
  name,
  onChange,
  value,
  placeholder,
}: inputTypes) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-medium">
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full bg-white border-transparent border-b border-solid border-b-[#808080] rounded-[4px] px-4 py-3 text-[#23282B] font-montserrat text-base font-medium shadow-card placeholder:text-#999999 placeholder:font-montserrat  placeholder:font-normal "
      />
    </div>
  );
};

export default CustomInput;

export const CustomMultiLineInput = ({
  label,
  name,
  onChange,
  value,
  placeholder,
}: inputTypes) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-[4px] text-[#23282B] font-montserrat text-[13px] md:text-base font-medium">
        {label}
      </label>
      <textarea
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        autoComplete="on"
        rows={5}
        className="w-full bg-white border-transparent border-b border-solid border-b-[#808080] rounded-[4px] px-4 py-3 text-[#23282B] font-montserrat text-base font-medium shadow-card placeholder:text-#999999 placeholder:font-montserrat  placeholder:font-normal  resize-none"
      />
    </div>
  );
};
