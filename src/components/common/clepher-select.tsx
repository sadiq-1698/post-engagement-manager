import { SelectOptionType } from "types/global";

type ClepherSelectProps = {
  label: string,
  includeSelect?: boolean,
  options: Array<SelectOptionType>,
  onSelect: (option: any) => void
}

const ClepherSelect = ({ label, options, includeSelect = false, onSelect }: ClepherSelectProps) => {
  return (
    <div className="form-control">
      <div className="label !px-0">
        <span className="label-text">
          {label}
        </span>
      </div>
      <div className="form-control">
        <select
          spellCheck={true}
          autoComplete="on"
          className="select select-bordered w-full"
          onChange={(e) => onSelect(options.find(el => el.value === e.target.value))}
        >
          {
            includeSelect &&
            <option value="" disabled={true} selected={true}>
              Select
            </option>
          }
          {
            options.map((el, idx) => {
              const defaultSelected = idx === 0 && !includeSelect;
              return (
                <option value={el.value} selected={defaultSelected}>
                  {el.label}
                </option>
              );
            })
          }
        </select>
      </div>
    </div>
  );
}

export default ClepherSelect;