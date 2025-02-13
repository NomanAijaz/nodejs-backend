import { asyncHandler } from "../utils/asyncHandler.js"

const registeration = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message:"OK"
    })
})

export {registeration}