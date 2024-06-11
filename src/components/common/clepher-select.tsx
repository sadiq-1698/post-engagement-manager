import { SelectOptionType } from "types/global";

type ClepherSelectProps = {
  label: string,
  includeSelect?: boolean,
  options: Array<SelectOptionType>,
  onSelect: (option: any) => void
}

const ClepherSelect = ({ label, options, includeSelect = false, onSelect }: ClepherSelectProps) => {
  const defaultValue = includeSelect ? "" : options[0]?.value;

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
          defaultValue={defaultValue}
          className="select select-bordered w-full"
          onChange={(e) => onSelect(options.find(el => el.value === e.target.value))}
        >
          {
            includeSelect &&
            <option value="" disabled={true}>
              Select
            </option>
          }
          {
            options.map((el, idx) => {
              return (
                <option key={el.label + "-|-" + idx} value={el.value}>
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