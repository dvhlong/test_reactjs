import React, { Component } from 'react';
import AccountService from '../services/AccountService';
class LoginComponents extends Component {
  constructor(props) {
    super(props);
    
    this.state={
        account: []
    }
    this.enterUsername=this.enterUsername.bind(this);
    this.enterPassword=this.enterPassword.bind(this);
    this.login=this.login.bind(this);
    this.register=this.register.bind(this);

  }
  enterUsername=(event)=>{
    this.setState({username: event.target.value});
  }
  enterPassword=(event)=>{
    this.setState({password: event.target.value});
  }
  login=(e)=>{
    e.preventDefault();
    let account ={
      username:this.state.username,
      password:this.state.password,
    }
    console.log(JSON.stringify(account));
    AccountService.checkLogin(account).then(res =>{
      console.log(res.data);
      if (res.data.status!=="Fail") {
        localStorage.setItem("username",res.data.data.username);
        console.log(localStorage.getItem("username"));
        this.setState({account:res.data.data});
        this.props.history.push('/products');
      } else {
        alert('Username or Password is not correct');
      }
    });
  }
  register(){
    this.props.history.push('/register');
  }
  render() {
    return (
      <div>
        <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:"100px"}}>
                            <h1 className='text-center'>LOGIN</h1>
                            <div className='card-body'>
                                <form action="">
                                    <div className='mb-3 row'>
                                        <label htmlFor="un" className='col-sm-auto col-form-label'>Username:</label>
                                        <input id="un" className='form-control' type="text" placeholder='Please enter your username' 
                                        value={this.state.username} onChange={this.enterUsername}/>
                                    </div>
                                    <div className='mb-3 row'>
                                        <label htmlFor="pass" className='col-sm-auto col-form-label'>Password:</label>
                                        <input id='pass' className='form-control' type="Password" placeholder='Please enter your password' 
                                        value={this.state.password} onChange={this.enterPassword}/>
                                    </div>
                                    <div style={{maginTop:"10px"}}>
                                    <button className='btn btn-success' onClick={this.login}>Login</button>
                                    <button className='btn btn-danger' onClick={this.register} style={{marginLeft:"10px"}}>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    );
  }
}

export default LoginComponents;
