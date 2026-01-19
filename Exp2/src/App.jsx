import { Container, Stack, Divider } from '@mui/material'

import Checkboxes from './components/Checkbox.jsx'
import ButtonBasic from './components/Button.jsx'
import ContinuousSlider from './components/Slider.jsx'
import BasicSelect from './components/Dropdown.jsx'
import LoadingButtonGroup from './components/loading.jsx'
import SinglePageApp from './components/Spa.jsx'

function App() {
  return (
    <Container maxWidth="sm">
      <Stack spacing={3} alignItems="center">

        <SinglePageApp />

        <Divider flexItem />

        <Checkboxes />
        <ButtonBasic />
        <ContinuousSlider />
        <BasicSelect />
        <LoadingButtonGroup />

      </Stack>
    </Container>
  )
}

export default App
