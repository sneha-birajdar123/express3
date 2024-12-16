import axios from "axios"
async function apiCall() {
    try {
        let responceData = await axios.get("http://localhost:5000")
        console.log(responceData.data);
    } catch (error) {
        console.log(error);
    }
}
apiCall()