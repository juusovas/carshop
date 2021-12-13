import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddCar(props) {

        const [open, setOpen] = React.useState(false);

        const[car, setCar] = React.useState({
            brand: '',
            model: '',
            color: '',
            fuel: '',
            year: '',
            price: '',
        })
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        const handleSave = () => {
            props.addCar(car);
            handleClose();
        };

        const inputChanged = (event) => {
            setCar({...car, [event.target.name]: event.target.value})
        }
    
return (
<div>

<Button style={{margin: 20}} variant="outlined" onClick={handleClickOpen}>
        Add New Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
<TextField
            autoFocus
            margin="dense"
            name= "brand"
            value= {car.brand}
            onChange={e => inputChanged(e)}
            label="Brand"
            fullWidth
          />

<TextField
            margin="dense"
            name= "model"
            value= {car.model}
            onChange={e => inputChanged(e)}
            label="Model"
            fullWidth
          />

<TextField
            margin="dense"
            name= "color"
            value= {car.color}
            onChange={e => inputChanged(e)}
            label="Color"
            fullWidth
          />

<TextField
            margin="dense"
            name= "year"
            value= {car.year}
            onChange={e => inputChanged(e)}
            label="Year"
            fullWidth
          />
<TextField
            margin="dense"
            name= "fuel"
            value= {car.fuel}
            onChange={e => inputChanged(e)}
            label="Fuel"
            fullWidth
          />
<TextField
            margin="dense"
            name= "price"
            value= {car.price}
            onChange={e => inputChanged(e)}
            label="Price"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
</div>

);
}

export default AddCar;