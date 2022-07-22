import { Button } from '@material-ui/core'
import React from 'react'
export const Botones = () => {
  return (
    <div>Buttones 
        <Button variant="contained">Default</Button>
        <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
Ingredsa
</Button>
<Button variant="contained" color="secondary">
  salir
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>

    </div>
  )
}
