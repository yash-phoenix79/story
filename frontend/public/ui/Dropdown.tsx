type props = {
  updateValue?: (value: string) => {};
  options?: any;
  label?: string;
  optionsClassname?: string;
  optionValuesClassname?: string;
  setFieldValue?: (name: any, value: any) => void;
  name?: string;
  value?: string;
  error?: string;
  touched?: boolean;
};

export const Dropdown = ({
  options,
  label,
  optionsClassname,
  optionValuesClassname,
  name,
  updateValue,
  setFieldValue,
  touched,
  error,
  value,
}: props) => {
  return (
    <div className=" text-black">
      {label && <label className="font-semibold text-white">{label}</label>}

      <select
        value={options.value}
        onChange={(e: any) => {
          const selectedValue = e.target.value;
          setFieldValue && name && setFieldValue(name, selectedValue);
          updateValue && name && updateValue(selectedValue);
        }}
        className={` text-center uppercase ${optionsClassname}`}
      >
        {options.map((eachOption: any, i: number) => {
          return (
            <option
              key={i}
              className={`${optionValuesClassname}`}
              value={eachOption.value}
            >
              {eachOption.name}
            </option>
          );
        })}
      </select>
      {touched && error && <p className="text-red-600">{error}</p>}
    </div>
  );
};
