import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {EditresModal} from './EditresModal';
import {ChangeresadminModal} from './ChangeresadminModal'; 


const API = 'http://localhost:4000/super_admin/restaurants';
const API1= 'http://localhost:4000/super_admin/delrestaurant/'; 

class Viewrestaurant extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      editresModalshow:false,
      changeresadminModalshow:false
    }
  }

  
  
  
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({restaurants: data }));
  }
   




  delRestaurant(id)
  {
    if(window.confirm('are you sure?')){
      fetch('http://localhost:4000/super_admin/delrestaurant/'+ id, {
        method:'DELETE',
        headers: {
    
          "Content-Type": "application/json"

        }
      }

      ).then(function(response) {
        if (response.ok) {
          alert('Record Deleted Successfully')
          window.location.reload(false);
          return true;
              } else {
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }})
    
  }
  }

   
  

  
  render() {
    const { restaurants, resname, restaurant_id, resloc, adname, admin_id} = this.state;
      let editresModalClose=()=> this.setState({editresModalShow:false});  
      let changeresadminModalClose=()=> this.setState({changeresadminModalShow:false});  
     


    return (
      <div style={{marginTop:"80px", marginBottom:"50px"}}>

        <center>
         <TableContainer component={Paper} style={{width:"80%", border:"1"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Name</b> </TableCell>
            <TableCell align="none"><b>Location</b></TableCell>
            <TableCell align="none"><b>Restaurant Admin</b></TableCell>
            <TableCell align="none"><b>Delete</b></TableCell>
            <TableCell align="none"><b>Update Restaurant details</b></TableCell>
            <TableCell align="none"><b>Change Restaurant Admin</b></TableCell>
            {/* <TableCell align="none"><b>password</b></TableCell> */}
        
            
    
        
      

 
            
          </TableRow>
        </TableHead>
        <TableBody>
          {(restaurants.map(restaurant =>
            <TableRow key={restaurant._id}>
               
              <TableCell align="left">{restaurant.name}</TableCell>
              <TableCell align="none">{restaurant.location}</TableCell>
              <TableCell align="none">{restaurant.restaurant_admin.username}</TableCell> 
             
              
     
              <TableCell><Button className="button" variant="danger" size="sm" onClick={()=>this.delRestaurant(restaurant._id)}>Delete</Button></TableCell> 
              <TableCell>
                <ButtonToolbar>
                <Button  variant="primary" size="sm" onClick={()=>this.setState({editresModalShow: true, resname:restaurant.name, restaurant_id: restaurant._id, resloc:restaurant.location})}>Update</Button>
                <EditresModal
                 show={this.state.editresModalShow}
                 onHide={editresModalClose}
                 resname={resname}
                 restaurant_id={restaurant_id}
                 resloc={resloc}
                 

                ></EditresModal>

                
                </ButtonToolbar>
                </TableCell>   
                <TableCell>
                <ButtonToolbar>
                <Button  variant="primary" size="sm" onClick={()=>this.setState({changeresadminModalShow: true, adname:restaurant.restaurant_admin.username, admin_id:restaurant.restaurant_admin._id})}>Change</Button>
                <ChangeresadminModal
                 show={this.state.changeresadminModalShow}
                 onHide={changeresadminModalClose}
                 adname={adname}
                 admin_id={admin_id}
               
                

                ></ChangeresadminModal>

                
                  </ButtonToolbar>
                  </TableCell>  
                  {/* <TableCell align="none">{restaurant.restaurant_admin.password}</TableCell> */} 
                  
                  
                  
                  
            </TableRow>

            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </center>

      </div>
    );

  }
}

export default Viewrestaurant;