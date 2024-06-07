const movieModel=require('../model/movieSchema')


const getMovies=async(req,res)=>{
    try {
        console.log('get the movieees');
        const movie=await movieModel.find({})
        res.json({status:'true',result:movie})
    } catch (error) {
        console.log('errorrrr===>',error);
        res.status(500).json({status:'false',error:error.message})
    }
}



const search=async(req,res)=>{
    try {
        let value=req.query.title
        const movies=await movieModel.find({title: new RegExp(value,'i')})
        console.log(movies.length);
        res.status(200).json({ status: 'true', result: movies });
    } catch (error) {
        console.log('errorrrr===>',error);
        res.status(500).json({status:'false',error:error.message})
    }
}

module.exports={
    getMovies,
    search
}