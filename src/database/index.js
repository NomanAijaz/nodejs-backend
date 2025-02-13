import mongoose from 'mongoose'

const connectDatabase = async ()=>{
    try{        
        if (!process.env.MONGODB_URL || !process.env.DB_NAME) {
            throw new Error('MongoDB connection details are missing in environment variables');
        }
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log(`Database connect successfully on host: ${connectionInstance.connection.host}`)
    }catch(error){
        console.error(`Database connection failed: ${error}`)
        process.exit(1)
    }
}
export default connectDatabase