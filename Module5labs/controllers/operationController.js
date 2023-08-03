const Operation = require("../Models/operations");
const operation = new Operation;

exports.addition=(req,res)=>{
    let n1=parseInt(req.query.num1);
    let n2=parseInt(req.query.num2);
    let sum= operation.addition(n1,n2);
    res.status(200);
    res.json({result: sum});
}
exports.substraction=(req,res)=>{
    let n1=parseInt(req.query.num1);
    let n2=parseInt(req.query.num2);
    let sum= operation.substraction(n1,n2);
    res.status(200);
    res.json({result: sum});
}
exports.multiply=(req,res)=>{
    let n1=parseInt(req.query.num1);
    let n2=parseInt(req.query.num2);
    let sum= operation.multiply(n1,n2);
    res.status(200);
    res.json({result: sum});
}
exports.divide=(req,res)=>{
    let n1=parseInt(req.query.num1);
    let n2=parseInt(req.query.num2);
    let sum= operation.divide(n1,n2);
    res.status(200);
    res.json({result: sum});
}