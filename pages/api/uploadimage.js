import ImageKit from "imagekit";

export const imagekit = new ImageKit({
    urlEndpoint: "https://ik.imagekit.io/ylyzsq6uc",
    publicKey: "public_AHmlYI8eWoxqSutDX1YvCCGNX2k=",
    privateKey: "private_ZYfsN95uyGp3Ue1tPG7d1iKq9dI=",
})

export default function(req,res){
    let result = imagekit.getAuthenticationParameters()
    res.send(result);
}