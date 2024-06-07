const mongoose=require('mongoose')
const url = 'mongodb://127.0.0.1:27017/Hoomans';

module.exports.connectDB=()=>{
    mongoose.connect(url,{})
    .then(()=>{
        console.log('Database connected success');
    })
    .catch((err)=>{
        console.log(err+' Database connection Failed');
    })
}
