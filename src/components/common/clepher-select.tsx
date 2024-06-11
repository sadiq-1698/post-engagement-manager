import { SelectOptionType } from "types/global";

type ClepherSelectProps = {
  label: string,
  includeSelect?: boolean,
  options: Array<SelectOptionType>,
  onSelect: (option: any) => void
}

/**
 * This component renders a labeled select dropdown with optional initial "Select" option.
 * It supports providing a list of options and a callback function to handle option selection.
 * 
 * @component
 * 
 * @param {object} props - The properties object.
 * @param {string} props.label - The label to be displayed above the select dropdown.
 * @param {boolean} [props.includeSelect=false] - Whether to include an initial "Select" option. Defaults to false.
 * @param {Array<SelectOptionType>} props.options - The list of options to be displayed in the dropdown.
 * @param {function} props.onSelect - The callback function to be called when an option is selected.
 * 
 * @typedef {object} SelectOptionType - The type for each option in the select dropdown.
 * @property {string} label - The display label for the option.
 * @property {string} value - The value of the option.
 * 
 * @typedef {object} ClepherSelectProps - The type for ClepherSelect component properties.
 * @property {string} label - The label to be displayed above the select dropdown.
 * @property {boolean} [includeSelect=false] - Whether to include an initial "Select" option. Defaults to false.
 * @property {Array<SelectOptionType>} options - The list of options to be displayed in the dropdown.
 * @property {function} onSelect - The callback function to be called when an option is selected.
 */
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