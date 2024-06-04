export type SelectOptionType = {
  value: string,
  label: string,
  [key: string]: string
}

type ClepherSelectProps = {
  label: string,
  includeSelect?: boolean,
  options: Array<SelectOptionType>,
  onSelect: (option: any) => void
}

const ClepherSelect = ({ label, options, includeSelect = false, onSelect }: ClepherSelectProps) => {
  return (
    <div className="form-control">
      <div className="label">
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
              const defaultSelected = idx === 0;
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