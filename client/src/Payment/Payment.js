import React from 'react';
import {Button} from 'react-bootstrap'
import Stack from '@mui/material/Stack';
import { withRouter } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const Payment = ()=>{
    const [open, setOpen] = React.useState(false);
    const [openPay, setOpenPay] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handlePaytmClick = ()=>{
        setOpenPay(true);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };
    return(
        <>
        <div className="text-center">
            <div className="container" style={{fontSize: "larger",fontWeight: "bold"}}>
                  Payment Gateway 
            </div>
        </div>
        <div className="container" style={{border: "solid gray",backgroundColor: "#96c4d6",borderRadius:"10px 10px 10px 10px"}}>
        <p>Do u want to pay through Paytm? If yes, Click on yes button below you.</p>
        <Button type="button" className="btn btn-info mb-3" onClick={handlePaytmClick}>Yes</Button>
        {openPay ?<>
        <p>Please pay at this number : 9999999999</p> 
        <Button className="btn btn-info mb-3"><a href="/home" style={{color:"floralwhite",textDecoration:"none"}}>Ok</a></Button>
        </>:null}
        </div>
        <hr />
        <div className="container">
            <h5>Other payment options </h5>
        <ol style={{border: "solid gray",backgroundColor: "#96c4d6",borderRadius:"10px 10px 10px 10px"}}>
            <li onClick={handleClick}><a href="/home" style={{color:"blue",textDecoration:"none"}}>Amazon Pay <i className="fa fa-amazon" aria-hidden="true"></i></a></li>
            <li onClick={handleClick}><a href="/home" style={{color:"blue",textDecoration:"none"}}>Google Pay <i className="fa fa-google-wallet" aria-hidden="true"></i></a></li>
            <li onClick={handleClick}><a href="/home" style={{color:"blue",textDecoration:"none"}}>Card <CreditCardIcon /></a></li>
        </ol>
        </div>
        {open ?
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{ vertical: "top",horizontal: "right"}} open={open} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Transaction Completed Successfully
                    </Alert>
                </Snackbar>
                    {/* <Alert severity="success">This is a success message!</Alert> */}
            </Stack>:null}
        </>
    )
}

export default Payment;