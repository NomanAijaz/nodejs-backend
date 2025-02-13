import dotenv from 'dotenv'
import {app} from './app.js'

import connectDatabase from './database/index.js'
dotenv.config({
    path:'.env'
})


connectDatabase().then(()=>{
    const PORT  = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
    
})
}).catch(err=>{
    console.log("Database connection failed: ",err);
    
})

