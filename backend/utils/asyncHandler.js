export default function asyncHandler (fn){
    return async (req, res, next) => {
        try {
            await fn(req,res,next)
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}
