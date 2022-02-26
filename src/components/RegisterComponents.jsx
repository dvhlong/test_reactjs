import React, { Component } from 'react';
import AccountService from '../services/AccountService';
class RegisterComponents extends Component {
    constructor(props) {
    super(props);
    
    this.state={
        confirmPass:'',
        account: [

        ]
    }
    this.enterUsername=this.enterUsername.bind(this);
    this.enterPassword=this.enterPassword.bind(this);
    this.enterConfirmPassword=this.enterConfirmPassword.bind(this);
    this.register=this.register.bind(this);
    this.back=this.back.bind(this);
    }
    enterUsername=(event)=>{
        this.setState({username: event.target.value});
    }
    enterPassword=(event)=>{
        this.setState({password: event.target.value});
    }
    enterConfirmPassword=(event)=>{
        this.setState({confirmPass:event.target.value});
    }
    register=(e)=>{
        e.preventDefault();
        if(this.state.confirmPass===this.state.password){
        let account ={
            username:this.state.username,
            password:this.state.password,
        }
        console.log(JSON.stringify(account));
        AccountService.createAccount(account).then(res =>{
        console.log(res.data);
        if (res.data.status!=="Fail") {
            alert('Create Successful');
            this.props.history.push('/');
        } else {
            alert('Username existed');
        }
        });
        } else {
            alert('Confirm password is not true');
        }
    }
    back(){
    this.props.history.push('/');
    }
    render() {
    return (
    <div>
        <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:"100px"}}>
                            <h1 className='text-center'>Create new Account</h1>
                            <div className='card-body'>
                                <form action="">
                                    <div className='mb-3 row'>
                                        <label htmlFor="" className='col-sm-auto col-form-label'>Username:</label>
                                        <input className='form-control' type="text" placeholder='Please enter new username' 
                                        value={this.state.username} onChange={this.enterUsername}/>
                                    </div>
                                    <div className='mb-3 row'>
                                        <label htmlFor="" className='col-sm-auto col-form-label'>Password:</label>
                                        <input className='form-control' type="Password" placeholder='Please enter new password' 
                                        value={this.state.password} onChange={this.enterPassword}/>
                                    </div>
                                    <div className='mb-3 row'>
                                        <label htmlFor="" className='col-sm-auto col-form-label'>Confirm Password:</label>
                                        <input className='form-control' type="Password" placeholder='Please retype new password' 
                                        value={this.state.confirmPass} onChange={this.enterConfirmPassword}/>
                                    </div>
                                    <div style={{maginTop:"10px"}}>
                                    <button className='btn btn-success' onClick={this.register}>Register</button>
                                    <button className='btn btn-danger' onClick={this.back} style={{marginLeft:"10px"}}>Back</button>
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

export default RegisterComponents;
