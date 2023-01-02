import { AuthService } from "../../lib/auth/firebase_authService"


export default async function(req,res){
    const {email , password} = req.body
    
    const _authService = new AuthService()
    const userCreds = await _authService.loginUser(email , password)
    res.status(200).json(userCreds)
}