import ClepherBadge from "components/common/clepher-badge";

type AddKeywordsProp = {
  value: string,
  header: string,
  keywords: Array<string>,
  setValue: React.Dispatch<string>,
  setKeywords: React.Dispatch<Array<string>>,
}

/**
 * This component allows users to add keywords to a list and displays them using the ClepherBadge component.
 * It provides functionalities to add, remove, and manage keywords.
 * 
 * @component
 * 
 * @param {object} props - The properties object.
 * @param {string} props.value - The current value of the input field.
 * @param {string} props.header - The header text to be displayed above the input field.
 * @param {Array<string>} props.keywords - The list of keywords to be displayed.
 * @param {React.Dispatch<string>} props.setValue - The function to set the input field's value.
 * @param {React.Dispatch<Array<string>>} props.setKeywords - The function to set the list of keywords.
 */
const AddKeywords = ({
  value,
  header,
  keywords,
  setValue,
  setKeywords,
}: AddKeywordsProp) => {

  const handleCloseBadge = (array: Array<string>, idx: number, setterFunc: React.Dispatch<Array<string>>) => {
    const res = array.filter((label: string, i: number) => i !== idx);
    setterFunc([...res]);
  }

  const handleChangeVal = (e: React.ChangeEvent<HTMLInputElement>, setterFunc: React.Dispatch<string>) => {
    setterFunc(e.target.value);
  }

  const handleAddKeyword = (
    keyword: string,
    array: Array<string>,
    arraySetterFunc: React.Dispatch<Array<string>>,
    clearField: React.Dispatch<string>
  ) => {
    if (keyword.trim().length < 1) return;
    if (array.includes(keyword.trim())) {
      clearField("");
      return;
    }
    const res = [...array, keyword];
    arraySetterFunc([...res]);
    clearField("");
  }

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    keyword: string,
    array: Array<string>,
    arraySetterFunc: React.Dispatch<Array<string>>,
    clearField: React.Dispatch<string>
  ) => {
    if (e.key === 'Enter') handleAddKeyword(keyword, array, arraySetterFunc, clearField);
  };

  return (
    <div className="form-control">
      <div className="label !pl-0">
        <span className="label-text">
          {header}
        </span>
      </div>
      <div className="mb-2.5">
        {
          keywords.map((keyword, idx) => {
            return (
              <ClepherBadge
                label={keyword}
                key={keyword + "|" + idx}
                onClose={() => handleCloseBadge(keywords, idx, setKeywords)}
              />
            );
          })
        }
      </div>
      <div className="join">
        <input
          value={value}
          placeholder="Specify Keywords"
          onChange={(e) => handleChangeVal(e, setValue)}
          onKeyDown={(e) => handleKeyPress(e, value, keywords, setKeywords, setValue)}
          className="input join-item w-full input-bordered focus:outline-offset-0"
        />
        <button
          className="btn join-item btn-primary"
          onClick={() => handleAddKeyword(value, keywords, setKeywords, setValue)}
        >
          Add Keyword
        </button>
      </div>
    </div>
  );
}

export default AddKeywords;