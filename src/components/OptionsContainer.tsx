import { Button, TextField, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <Grid container direction="column" spacing={2}>
      {options.map((value, index) => (
        <Grid
          key={`grid-item-${index}`}
          container
          direction="row"
          alignItems="center"
          spacing={2}
        >
          {index >= 2 ? (
            <Grid item>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                size="small"
                key={`remove-button2-${index}`}
                onClick={() => removeOption(index)}
                fullWidth
                // sx={{ display: 'none' }}
              >
                Remove
              </Button>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item>
            <TextField
              key={`text-field-${index}`}
              label={`Option ${index + 1}`}
              color="secondary"
              value={value}
              onChange={(e) => updateOption(index, e.target.value)}
              fullWidth
              sx={{ width: '100%' }} // Ensure the TextField takes up the full width of its container
            />
          </Grid>
          {index >= 2 ? (
            <Grid item>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                size="small"
                key={`remove-button-${index}`}
                onClick={() => removeOption(index)}
                fullWidth
              >
                Remove
              </Button>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      ))}
      <Grid item>
        <Button onClick={addOption}>Add option</Button>
      </Grid>
    </Grid>
  );
}
