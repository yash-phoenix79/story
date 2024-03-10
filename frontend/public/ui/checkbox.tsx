type props = {
  label?: string;
  onChange?: () => void;
  value?: string | number | boolean;
  name?: string;
  updateValue?: (value: string | number | boolean) => void;
  setFeildValue?: (name: string, value: string | number | boolean) => void;
};

const Checkbox = ({
  label,
  value,
  name,
  onChange,
  setFeildValue,
  updateValue,
}: props) => {
  return (
    <div className="flex items-center justify-start">
      <input
        id={name}
        type="checkbox"
        value={value}
        onChange={(e: any) => {
          console.log(e.target.checked);
          setFeildValue && name && setFeildValue(name, e.target.checked);
          updateValue && updateValue(e.target.checked);
        }}
      />
      {label && (
        <label htmlFor={name} className="pl-2 font-semibold">
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
