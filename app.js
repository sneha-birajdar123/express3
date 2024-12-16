import express from "express";
const app = express()
const PORT = 5000

// app.get("/",(req, res) => {
//     try {
//         res.status(200).json({msg :"Hello World!...."})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg : error})
//     }
// })
// app.listen(PORT, () =>{
//     console.log(`Server is Up and Running at ${PORT}`);
// })


// app.get("/add/:names", (req, res) => {
//     try {
//         let userName = req.params.names;
//         console.log(userName);
//         res.status(200).json({msg:userName})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: error })
//     }
// })



app.get("/add/:num1/:num2", (req, res) => {
    try {
        let number1 = req.params.num1
        let number2 = req.params.num2
        let addition = Number(number1) + Number(number2)
        res.status(200).json({ msg: addition })
        console.log(addition);
    } catch (error) {
        console.log(error);
    }
})


 
app.get("/sub/:num1/:num2", (req, res) => {
    try {
        let x = req.params.num1
        let y = req.params.num2
        let substract = Number(x) - Number(y)
        res.status(200).json({ substraction: substract })
    } catch (error) {
        console.log(error);
    }
})



app.get("/multi/:num1/:num2", (req, res) => {
    try {
        let x = req.params.num1
        let y = req.params.num2
        let multiply = Number(x) * Number(y)
        res.status(200).json({ multiplication: multiply })
    } catch (error) {
        console.log(error);
    }
})



app.get("/check/:num", (req, res) => {
    try {
        let number = req.params.num
        if (number % 2 === 0) {
            res.status(200).json({msg: "even"})
        } else {
            res.status(200).json({msg: "odd"})
        }
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server is Up and Running at ${PORT}`);
})



