import { CountryCodes } from "@/utils/countryCodes";
import { Dropdown } from "./Dropdown";
import Input from "./input";
type props = {
  label?: string;
  phoneCodes: any;
  optionsClassName?: string;
  optionValuesClassName?: string;
  inputClassName?: string;
  placeHolder?: string;
  updateValue?: (value: string) => void;
  setFieldValue?: (name: string, value: any) => void;
  name?: string;
  values?: any;
  code: string;
  value: string;
};

export const Phone = ({
  label,
  optionsClassName,
  optionValuesClassName,
  inputClassName,
  placeHolder,
  updateValue,
  name,
  code,
  value,
  values,
  setFieldValue,
}: props) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <div className="flex h-full w-full justify-center items-center border border-gray-500">
        <div className="w-3/12 md:w-1/12">
          <Dropdown
            label=""
            options={CountryCodes.map((item) => {
              return {
                name: `${item.dial_code} (${item.name})`,
                value: item.dial_code,
              };
            })}
            name={code}
            setFieldValue={setFieldValue}
            value={values[code]}
            optionsClassname={`h-[38px] w-full bg-transparent !border-none border text-white  text-center  !rounded-r-none ${optionsClassName}`}
            optionValuesClassname={`text-black ${optionValuesClassName}`}
          />
        </div>
        <div className="w-full">
          <Input
            className={`${inputClassName}`}
            placeholder={placeHolder}
            name={value}
            setFieldValue={setFieldValue}
            value={values[value]}
          />
        </div>
      </div>
    </div>
  );
};
