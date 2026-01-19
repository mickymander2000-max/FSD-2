import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';

export default function LoadingButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="Loading button group">
      <Button>Submit</Button>
      <Button>Fetch data</Button>
      <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />}>
        Save
      </LoadingButton>
    </ButtonGroup>
  );
}
