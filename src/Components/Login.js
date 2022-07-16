import React, { Component } from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

 class Login extends Component {
        constructor(){
          super();
          this.state={
            userInfo:{},
            error: false
          }

         
        }

        handleSubmit=async(event)=>{
           event.preventDefault();
           console.log('called')
           const{userInfo}=this.state;
           const resp= await axios.post('http://localhost:8081/login',{
            body:{...userInfo}
           })
           if(resp.status===200){
            this.setState({
              error: false
            })
            this.props.history.push('/bus')
           }else{
            this.setState({
              error: true
            })
           }
        }

        handleInputData(event){
           this.setState({
             userInfo:{
              ...this.state.userInfo,
              [event.target.name]:event.target.value
             }
           })
        }
  render() {
    const{userInfo,error}=this.state;
    console.log(userInfo)
    return (
      <div>
        <div className="d-flex justify-content-center align-items-center login bg-light text-center">
            <form className="sec" autoComplete='off' onSubmit={(event)=>this.handleSubmit(event)}>
                <h5 className="mb-4 text-danger">Login Form</h5>
                <div>
                    <input
                    type="text" name="username" className="form-control py-2"placeholder="username"autoComplete='off'
                    onChange={(event)=>this.handleInputData(event)} />
                </div>

                <div>
                    <input className="form-control py-2" type="password"  name="password" placeholder="password"  
                     onChange={(event)=>this.handleInputData(event)}/>
                </div>
                <input type="submit" value="Login" className="btn btn-warning w-100" />
                { error ? <span className="text-danger">Please enter proper credentials</span> : ''}
            </form>
            </div>
      </div>
    )
  }
}
export default withRouter(Login);
