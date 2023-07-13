import axios from "axios";

let allProducts = [];
let fetchData = async () => {
    try {
        allProducts = await axios.get("http://localhost:5000/itemsshow/");
        return allProducts.data
    } catch (err){
        console.log(err)
    }
}
export { fetchData }
