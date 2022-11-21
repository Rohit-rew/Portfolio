import ImageKit from "imagekit";

export const imagekit = new ImageKit({
    urlEndpoint: "https://ik.imagekit.io/ylyzsq6uc",
    publicKey: process.env.imagekitPublicKey,
    privateKey: process.env.imagekitPrivateKey,
})

export default function(req,res){
    let result = imagekit.getAuthenticationParameters()
    res.send(result);
}