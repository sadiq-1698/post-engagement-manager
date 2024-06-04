type ClepherSelectProps = {
  label: string,
  options: Array<string>,
  includeSelect?: boolean
}

const ClepherSelect = ({ label, options, includeSelect = false }: ClepherSelectProps) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text">
          {label}
        </span>
      </div>
      <div className="form-control">
        <select spellCheck={true} autoComplete="on" className="select select-bordered w-full">
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
                <option value={el} selected={defaultSelected}>
                  {el}
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