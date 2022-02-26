import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import searchIcon from '../search.svg';
function HeaderComponents() {
    const [key,setKey] = useState('');
    let history = useHistory();
    function Home(){
        history.push("/products");
    }
    function logout() {
        localStorage.removeItem("username");
        history.push("/");
    }
    function changeKey(e){
        setKey(e.target.value);
    }
    function search(){
        console.log(key);
        if(key===''){
            alert('Please type keyword to search');
        } else {
            history.push(`/products/${key}`);
        }
    }
    return (
        <div>
                <header>
                    <nav className='navbar navbar-dark bg-primary'>
                    <button className="navbar-brand btn btn-secondary" style={{marginLeft:"50px"}} onClick={Home}>Home</button>
                    <div style={{marginRight:"30px"}}>
                    <div class="row">
                        <div class="col-auto">
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search Product Name" value={key}
                            onChange={changeKey}/>
                        </div>
                        <div class="col-auto">
                            <button className="btn btn-dark" onClick={search}><img src={searchIcon} alt="logo"/></button>
                        </div>
                    </div>
                    </div>
                    <div style={{marginRight:"30px"}}>
                    <label style={{color:"white",marginRight:"30px"}}>Welcome, {localStorage.getItem("username")}</label>
                    <button className='btn btn-warning' onClick={logout}>
                        Logout
                    </button>
                    </div>
                    </nav>
                </header>
            </div>
    );
}
export default HeaderComponents;