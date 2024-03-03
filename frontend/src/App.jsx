import {useRef, React, useState } from 'react';
import { Typography,AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@material-ui/core';
//import QrCodeIcon from '@mui/icons-material/QrCode';
import QrCode2TwoToneIcon from '@mui/icons-material/QrCode2TwoTone';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap'
import swal from 'sweetalert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiButtonField } from './components/MuiButtonField';
import { Stack } from "@mui/material"
import axios from 'axios';
import QRCode from 'react-qr-code';

const App =() => {
  
    const [text,settext]= useState("");
    function genrateQr(e){
        setuser()
    }
    function handlechange(e){
      setuser(e.target.value)
    }
    const[invalid,setinvalid]=useState(false);
    const [user,setuser]=useState({
        product_name:"",
        manufactured_by:"",
        manufactured_date:new Date(),
        expdate:new Date()


    })
    let label, values;
    // const inputs = ['product_name', ' manufactured_by', 'manufactured_date',' expdate'];
    // const data = inputs.join(' ');
// const handlesubmit=(e)=>{
//     console.log(e)
// label=e.target.label;
// values=e.target.values
// setuser({
//     ...user,
//     [label]:values
// })
// }
// const register = async (e) => {
//    e.preventDefault();
//    const {product_name,  manufactured_by,  manufactured_date, expdate} =user;
//    const res = await fetch("/schema", {
//     method:"POST",
//     headers:{
//         "Content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//         product_name,  manufactured_by,  manufactured_date, expdate
//     })
//    });
//    const data=await res.json();
//    if(data.status===422||!data) {
//     window.alert("Invalid");
//     console.log("Invalid");
//    }
//    else{
//     window.alert("Successful");
//     console.log("Successful");
//    }
// }

const register=()=>{
    var c=/^[a-zA-Z]*$/;
  if
  (user. product_name.length==0  || user. manufactured_date.length=="fghg"
     || user.expdate.length=="ngf" 
    )

    {
    setinvalid(true);
    swal({
      title: "Failed",
      text: "Enter all fields",
      icon: "warning",
      dangerMode: true,
    })
  }else{
    const reqbody={...user}
  //const {product_name, manufactured_by, manufactured_date,expdate}=user
  axios.post("http://localhost:5000/schema",reqbody).then(res=>console.log(res))
  .alert(swal({
    title: "Details Added Successfully",
   
    icon: "success",
     
    button:"OK"
  }));
}
}
    return(
        <>
            <CssBaseline />
            <AppBar position = "relative">
                <Toolbar style={{}}>
                    <QrCode2TwoToneIcon />
                        <Typography variant="h6">
                        Product Details
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                    <Typography variant="h5" align="center" color="textPrimary" >
                      Enter Your Details here
                    </Typography>
                  {  console.log("user",user)}
                   {/* <MuiTextField />
                   <MuiButtonField /> */}
                    </Container>
                </div>
                <Stack spacing={4}>
                <Stack  direction = 'column' spacing={2} style={{padding:'6px 6px'}}>
                <TextField label='Product Name' variant="filled"  onChange={(event)=>setuser({...user,product_name:event.target.value})} style={{color:'black'}}/>
                <TextField  label='Manufactured By' variant="filled"   onChange={(event)=>setuser({...user,manufactured_by:event.target.value})}/>
                <DatePicker selected={user.manufactured_date} onChange={(date) => setuser(date)} /> 

                <TextField  label='Expiry Date' variant="filled"  />
                <DatePicker selected={user.expdate} onChange={date=> setuser(date.getDate())} />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <KeyboardDatePicker
   style={{margin:"0.8rem 0.8rem",padding:' 0.4rem',width:'20%'}}
    id="date-picker-dialog"
    
    label="Manufactured Date"
    format="dd/MM/yyyy"
    value={user.manufactured_date}
    onChange={date => setuser(date)}
    KeyboardButtonProps={{
      'aria-label': 'change date',
    }}
  />
</MuiPickersUtilsProvider>
<MuiPickersUtilsProvider utils={DateFnsUtils}>
  <KeyboardDatePicker
    style={{margin:"0.8rem 0.8rem",padding:' 0.4rem',width:'20%'          }}
    id="date-picker-dialog"
    label="Expiry date"
    format="dd/MM/yyyy"
    value={user.expdate}
    onChange={date => setuser(date)}
    KeyboardButtonProps={{
      'aria-label': 'change date',
    }}
  />
</MuiPickersUtilsProvider>

                </Stack>
                <Button variant="Contained " onClick={register} style={{fontSize:'1.1rem',color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.8rem 30rem ',transition:'0.3s linear all',padding:' 0.4rem',width:'20%'}}>Submit</Button> 
                </Stack>
{/*                
                <QRCode 
                style={{margin:'0.8rem 30rem'}}
                value={
               
                `Product Name: ${user.product_name}, 
                Manufactured By: ${user.manufactured_by},
                Manufactured_date: ${user.manufactured_date}, 
                Expdate: ${user.expdate}`} /> */}

            </main>
            <div>
            
    <div>
      {/* <p>Enter company name</p>
      <input type="text" value={user}  onChange={(event)=>setuser({...user,product_name:event.target.value})} ></input>
      */}
     <button style={{fontSize:'1.1rem',color:'white',border:'2px solid #696969',backgroundColor:'#696969',cursor:'pointer',margin:'0.8rem 30rem ',transition:'0.3s linear all',padding:' 0.4rem',width:'20%'}}>Generate</button>
     
           
 
    </div>
            </div>
   
        </>
    );
}
export default App;

