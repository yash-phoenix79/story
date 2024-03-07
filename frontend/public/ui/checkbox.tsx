type props = {
  label?: string;
  onChange?: () => void;
  value?: string | number | boolean | undefined;
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
        type="checkbox"
        value={""}
        onChange={(e: any) => {
          setFeildValue && name && setFeildValue(name, e.target.Checked);
          updateValue && updateValue(e.target.Checked);
        }}
      />
      {label && <label className="pl-2 font-semibold">{label}</label>}
    </div>
  );
};

export default Checkbox;
