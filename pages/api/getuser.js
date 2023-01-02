import { AuthService } from "../../lib/auth/firebase_authService";


export default function (req,res){

    const _authService = new AuthService()
    const user = _authService.currentUser()
    console.log(user.currentUser)
    res.status(200).json(user.currentUser)

}