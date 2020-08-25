import React,{Component} from 'react';
import "./Fontawsomeicons/index.js";
import './loginform.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import logo1 from '../assets/images/logo1.png'; 



  

  

  

class Login extends Component{
    constructor(){
    super()

};
render(){
    return( 
        <center>
        <div className="Login-container">
        <form>
            <div>
               {  <img src={logo1} alt="Logo" /> }
                <h1>Login</h1>
                </div>

        
                
              
                
                
              
                <div className="myphone">
                    <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <FontAwesomeIcon icon ="phone"/>
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Enter phone number" type="text"/>
                    </Grid>
                    </Grid>
                </div>
               
                
                <br></br>
                <div className="mycheck">
                
                <input type='checkbox'/> Remember me
                </div>
                <br></br>
                <br></br>
                <input className="butn" type="submit" value="Login"></input>
            
        
                

               
	
                </form>


        </div>
        </center>
    );

    

}
}
export default Login



