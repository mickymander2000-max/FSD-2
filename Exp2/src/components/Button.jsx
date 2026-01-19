import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ButtonBasic() {
  return (
    <>
        <Button size="small" variant='outlined'>Small</Button>
        <Button size="medium" variant='contained'>Medium</Button>

       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
    </>
    
  

  ) 

}
