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
          item
          key={`grid-item-${index}`}
          container
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={2}>
            <Button
              key={`button-${index}-left`}
              sx={{ opacity: 0 }}
              disabled
            ></Button>
          </Grid>
          <Grid item xs={8}>
            <TextField
              key={`text-field-${index}`}
              label={`Option ${index + 1}`}
              color="secondary"
              value={value}
              onChange={(e) => updateOption(index, e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="small"
              key={`remove-button-${index}-right`}
              onClick={() => removeOption(index)}
              sx={{ opacity: index >= 2 ? 100 : 0 }}
              disabled={index >= 2 ? false : true}
            >
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <Button onClick={addOption}>Add option</Button>
      </Grid>
    </Grid>
  );
}
