// DECRYPT :

// encrypted text + key = decrypted text

import jwt from "jsonwebtoken"

function getData() {
    try {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU25laGEiLCJhZ2UiOjIwLCJpc0FsaXZlIjp0cnVlLCJpYXQiOjE3MzQxNjI3ODIsImV4cCI6MTczNDE2NjM4Mn0.HboAKQVkpktz8YlEyExXY2ovTTPjzDOMPy9jvwdwcP8"
        let key = "SNEHA"
        let verify = jwt.verify(token, key)
        console.log(verify);
        if (verify) {
            console.log("matched");
        } else {
            console.log("not matched");
        }
    } catch (error) {
        console.log(error);
    }
}
getData()