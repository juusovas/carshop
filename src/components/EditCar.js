import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function EditCar(props) {

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
            console.log(props.car);
            setCar({
                brand: props.car.data.brand, 
                model: props.car.data.model, 
                color: props.car.data.color, 
                fuel: props.car.data.fuel, 
                year: props.car.data.year, 
                price: props.car.data.price, 
            })
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };

        const handleSave = () => {
            props.editCar(props.car.value, car);
            handleClose();
        };

        const inputChanged = (event) => {
            setCar({...car, [event.target.name]: event.target.value})
        }
    
return (
<div>

<Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Car</DialogTitle>
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

export default EditCar;