import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class AddProductComponents extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            productName:'',
            price:0,
            amount:0,
        }
        this.changeProductName=this.changeProductName.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeAmount=this.changeAmount.bind(this);
        this.addNewProduct=this.addNewProduct.bind(this);
    }
    changeProductName=(event)=>{
        this.setState({productName: event.target.value});
    }
    changePrice=(event)=>{
        this.setState({price: event.target.value});
    }
    changeAmount=(event)=>{
        this.setState({amount: event.target.value});
    }
    addNewProduct=(e) => {
        e.preventDefault();
        let product = {
            productName:this.state.productName,
            price:this.state.price,
            amount:this.state.amount,
        }
        console.log('product =>'+JSON.stringify(product));
        ProductService.addProduct(product).then((res) => {
            this.props.history.push('/products');
        });
    }
    cancel(){
        this.props.history.push('/products');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:"100px"}}>
                            <h1 className='text-center'>Add Product</h1>
                            <div className='card-body'>
                                <form action="">
                                    <div className='mb-3 row'>
                                        <label className='col-sm-auto col-form-label' htmlFor="">Product Name</label>
                                        <input className='form-control' type="text" name='pname' placeholder='Product Name' 
                                        value={this.state.productName} onChange={this.changeProductName}/>
                                    </div>
                                    <div className='mb-3 row'>
                                        <label className='col-sm-auto col-form-label' htmlFor="">Price</label>
                                        <input className='form-control' type="number" name='price' placeholder='Price' 
                                        value={this.state.price} onChange={this.changePrice}/>
                                    </div>
                                    <div className='mb-3 row'>
                                        <label className='col-sm-auto col-form-label' htmlFor="">Amount</label>
                                        <input className='form-control' type="number" name='amount' placeholder='Amount' 
                                        value={this.state.amount} onChange={this.changeAmount}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.addNewProduct}>Add</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProductComponents;