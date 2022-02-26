import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class UpdateProductComponents extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.match.params.id,
            productName:'',
            price:0,
            amount:0,
        }
        this.changeProductName=this.changeProductName.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeAmount=this.changeAmount.bind(this);
        this.updateProduct=this.updateProduct.bind(this);
        this.cancel=this.cancel.bind(this);
    }
    componentDidMount(){
        console.log(this.state.id);
        ProductService.getProductById(this.state.id).then(res =>{
            let product=res.data.data;
            this.setState({
                productName: product.productName,
                price:product.price,
                amount:product.amount
            });
        }

        );
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
    cancel(){
        this.props.history.push('/products');
    }
    updateProduct=(e) => {
        e.preventDefault();
        let product = {
            productName:this.state.productName,
            price:this.state.price,
            amount:this.state.amount,
        }
        console.log('product =>'+JSON.stringify(product));
        ProductService.updateProduct(this.state.id,product).then(res => {
            this.props.history.push("/products");
        });
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{marginTop:"100px"}}>
                            <h1 className='text-center'>Update Product</h1>
                            <div className='card-body'>
                                <form action="">
                                    <div className='form-group'>
                                        <label htmlFor="">Product Name</label>
                                        <input className='form-control' type="text" name='pname' placeholder='Product Name' 
                                        value={this.state.productName} onChange={this.changeProductName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Price</label>
                                        <input className='form-control' type="number" name='price' placeholder='Price' 
                                        value={this.state.price} onChange={this.changePrice}/>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor="">Amount</label>
                                        <input className='form-control' type="number" name='amount' placeholder='Amount' 
                                        value={this.state.amount} onChange={this.changeAmount}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateProduct}>Update</button>
                                    <button className='btn btn-danger' onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateProductComponents;