import React, { Component} from 'react';
import ProductService from '../services/ProductService';
import editIcon from '../edit.svg';
import removeIcon from '../x.svg';
class ListProductComponents extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            key:'',
            product: []
        }
        this.addProduct=this.addProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
        this.editProduct=this.editProduct.bind(this);
    }
    show(){
        ProductService.getProduct().then((res)=>{
            this.setState({product: res.data})
        });
    }
    search(){
        ProductService.searchProduct({"key":this.props.match.params.key}).then((res)=>{
            if(res.data.status==="Fail"){
                alert("Not Found");
                ProductService.getProduct().then((res1)=>{
                    this.setState({product: res1.data})
                });
            } else {
                this.setState({product:res.data.data})
            }
        });
    }
    componentDidUpdate(prevProps){
        console.log('b3');
        if(this.props.match.params.key!==prevProps.match.params.key){
            this.componentDidMount();
        }
    }
    componentDidMount(){
        console.log('b2');
        //console.log(this.state.key);
        if(this.props.match.params.key===undefined){
            console.log('khong co');
            this.show();
        } else {
            this.search();
        }
        
    }
    
    addProduct(){
        this.props.history.push("/addProduct");
    }
    deleteProduct(id){
        ProductService.deleteProduct(id).then(() =>{
            this.setState({product: this.state.product.filter(product => product.id !== id)});
        });
    }
    editProduct(id){
        this.props.history.push(`/updateProduct/${id}`);
    }
    render() {
        console.log('b1');
        return (
            
            <div>
                <div className='container'>               
                <h1 className='text-center'>Products List</h1>
                    <div style={{textAlign:"right"}}>
                        <button className='btn btn-primary' onClick={this.addProduct}>
                            Add Product
                        </button>
                    </div>
                    <table className='table table-sm table-dark table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.product.map(
                                    product =>
                                    <tr key={product.id}>
                                        <td>{product.productName}</td>
                                        <td>{product.price} VND</td>
                                        <td>{product.amount}</td>
                                        <td>
                                        <button style={{marginRight:"30px"}} onClick={() => {this.editProduct(product.id)}} className='btn btn-info'><img src={editIcon} alt="logo"/></button>
                                        <button onClick={() => {this.deleteProduct(product.id)}} className='btn btn-danger'><img src={removeIcon} alt="logo"/></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div> 
            </div>
        );
    }
}

export default ListProductComponents;

