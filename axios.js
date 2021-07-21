import axios from "axios";

const instance=axios.create({
    baseURL:"https://space-t.herokuapp.com",
})

export default instance;