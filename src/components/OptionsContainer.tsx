type propsInfo = {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

// Chose Props over Context since the options handling logic is specific to the App component and not likely to be reused elsewhere
// pros: Simplicity and Directness + Reusability
// cons: Limited Scope: This component is tightly coupled with its parent (App) component.
export default function OptionsContainer(props: propsInfo): JSX.Element {
  const { options, setOptions } = props;

  function addOption(): void {
    const addedOption = `Option ${options.length + 1}`;
    setOptions([...options, addedOption]);
  }

  function updateOption(index: number, newOption: string): void {
    const newOptions = [...options];
    newOptions[index] = newOption;
    setOptions(newOptions);
  }

  function removeOption(index: number): void {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  }

  return (
    <div>
      {options.map((value, index) => (
        <div key={`${value}-${index}`}>
          <input
            value={value}
            onChange={(e) => {
              updateOption(index, e.target.value);
            }}
          />
          {index >= 2 ? (
            <button
              key={index}
              onClick={() => {
                removeOption(index);
              }}
            >
              Remove option
            </button>
          ) : (
            <></>
          )}
        </div>
      ))}
      <div>
        <button onClick={addOption}>Add option</button>
      </div>
    </div>
  );
}
