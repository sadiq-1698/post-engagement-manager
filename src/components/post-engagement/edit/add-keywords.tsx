import ClepherBadge from "./clepher-badge";

type AddKeywordsProp = {
  value: string,
  header: string,
  keywords: Array<string>,
  setValue: React.Dispatch<string>,
  setKeywords: React.Dispatch<Array<string>>,
}

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

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    keyword: string,
    array: Array<string>,
    arraySetterFunc: React.Dispatch<Array<string>>,
    clearField: React.Dispatch<string>
  ) => {
    if (e.key === 'Enter') {
      const res = [...array, keyword];
      arraySetterFunc([...res]);
      clearField("");
    }
  };

  const handleAddKeyword = (
    keyword: string,
    array: Array<string>,
    arraySetterFunc: React.Dispatch<Array<string>>,
    clearField: React.Dispatch<string>
  ) => {
    const res = [...array, keyword];
    arraySetterFunc([...res]);
    clearField("");
  }

  return (
    <div className="form-control">
      <div className="label">
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