import axios from "axios";
class AccountService {
    checkLogin(account){
        return axios.post("http://localhost:8080/users/login",account); 
    }
    createAccount(account){
        return axios.post("http://localhost:8080/users/register",account);
    }
}
export default new AccountService();