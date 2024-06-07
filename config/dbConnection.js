const mongoose=require('mongoose')
// const url = 'mongodb://127.0.0.1:27017/Hoomans';
const url='mongodb+srv://aswanthrtech:Aswr200018@cluster0.dmaekjp.mongodb.net/Hoomans'

module.exports.connectDB=()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('Database connected success');
    })
    .catch((err)=>{
        console.log(err+' Database connection Failed');
    })
}
