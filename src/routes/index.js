import express from 'express';
import { performance } from "perf_hooks"
import queryRun from '../services/queryRun'
const routes = express.Router();

routes.get('/:query', async(req,res)=>{

    const {query} = req.params;
    try {
        const startTime = performance.now()
        const data = await queryRun(query)
        const endTime = performance.now()
        const time = endTime -startTime;

        if(data.status){
            res.status(200).json({
                query,
                time,
                data:data.data
            })
        }else{
            res.status(500).json({
                error:data.data
            })
        }
        
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
    

    // [
//   {
//   "query":"",
//   "single_indexes":"",
//   "double_inde":"",
//   }
// ]
});

export default routes;