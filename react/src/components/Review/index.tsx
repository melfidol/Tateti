import { StarRate } from "@mui/icons-material";
import { AlertProps, Box, Button, Rating, Snackbar, SnackbarOrigin, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import './reviews.css'

export interface State extends SnackbarOrigin {
    open: boolean;
  }

function Reviews(){

    const[name, setName] = useState("")
    const[lastName, setLastName] = useState("")
    const [rate, setRate] = useState<number | null>(3.5);
    const[message, setMessage] = useState("");
    const [hover, setHover] = useState(-1);
    const labels: { [index: string]: string } = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+'};
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const { vertical, horizontal, open } = state;
    
    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState });
        showRate();
    };
    const handleClose = () => {
        setState({ ...state, open: false });
      };
    
  
    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }

    function showRate(){
        if(name && lastName && rate){
            setMessage("You rated our page " + rate + " stars");
        }else{
            setMessage("Please enter all of the information!")
        }
    }
    
    return (
        <div className='container'>
            <h1 className='title' >Rate our Game!</h1>
            <Box sx={{
            width:' 100%',
            height:'100%',
            backgroundColor:'lightblue',
            gridColumn:2,
            gridRow:2,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'space-evenly'

            }}>
                
                <TextField  label="Name" variant="outlined"  className="style.formInput" onChange={e => setName(e.target.value)} id="name" type="text" name="Name" placeholder="Enter your Name"/>
                <TextField  label="Last Name" variant="outlined"  className="style.formInput" onChange={e => setLastName(e.target.value)} id="lastName" type="text" name="LastName" placeholder="Enter your Last Name"/>  
                <Box sx={{width:200, display:'flex', justifyItems:'center',alignItems:'center'}}>
                    <Rating sx={{mr:2, ml:2}} name="rating" value={rate} getLabelText={getLabelText} onChange={(e, newRate) => { setRate(newRate);}} precision={0.5}onChangeActive={(event, newHover) => {setHover(newHover);}}emptyIcon={<StarRate style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                    {rate !== null && (
                    <Box >{labels[hover !== -1 ? hover : rate]}</Box>)}
                </Box>
                <Button  variant="contained" type="submit" onClick={handleClick({vertical: 'top', horizontal: 'center'})}>Submit</Button>
                <Snackbar anchorOrigin={{ vertical, horizontal }} autoHideDuration={3000} open={open} onClose={handleClose} message={message} key={vertical + horizontal}/>
                </Box>
                
        </div>
    )
}
export default Reviews;
