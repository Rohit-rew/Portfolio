import { FirebaseError } from "firebase/app"
import { AuthService } from "../../lib/auth/firebase_authService"


export default async function(req,res){
    const _authService = new AuthService()

    const {email , password} = req.body

    try {
        const userCreds = await _authService.loginUser(email , password)
        console.log(userCreds)
        res.status(200).json(userCreds)
    } catch (error) {
        console.log(error.code)
        if(error instanceof FirebaseError){
            if(error.code == "auth/wrong-password"){
                res.status(404).json("Wrong password")
            }else if(error.code == "auth/too-many-requests"){
                res.status(429).json("Too many requests please try after some time")
            }else if(error.code == "auth/user-not-found"){
                res.status(404).json("User not found")
            }else if(error.code == "auth/invalid-email"){
                res.status(404).json("Invalid email")
            }else{
                res.status(404).json((error.code).split("/")[1])
            }
        }else{
            res.status(404).json("something went wrong")
        }
    }
}