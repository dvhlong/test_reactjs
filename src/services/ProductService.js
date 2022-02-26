import axios from "axios";
const Product_Base_Url="http://localhost:8080/products/";
class ProductService {
    getProduct(){
        return axios.get(Product_Base_Url);
    }
    addProduct(product){
        return axios.post("http://localhost:8080/products/add",product);
    }
    deleteProduct(id){
        return axios.delete("http://localhost:8080/products/"+id);
    }
    getProductById(id){
        return axios.get("http://localhost:8080/products/"+id);
    }
    updateProduct(id,product){
        return axios.put("http://localhost:8080/products/"+id,product);
    }
    searchProduct(key){
        console.log(key);
        return axios.post("http://localhost:8080/products/search",key);
    }
}
export default new ProductService()