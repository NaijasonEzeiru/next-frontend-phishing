import cookie from "cookie";

export default async (req, res) => {
  try{  if(req.method === "POST") {
        const {identifier, password} = req.body;
        const loginInfo = {
            "identifier": identifier,
            "password": password
        }

       const login = await fetch("http://localhost:1337/auth/local", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(loginInfo)
        }) 
        const loginResponse = await login.json();

        if(login.ok) {
            res.setHeader(
                "Set-Cookie",
            cookie.serialize("token", loginResponse.jwt, {
                httpOnly: true,
                      maxAge: 30 * 24 * 60 *60,
                      sameSite: "strict",
                       path: "/",
                    }))
            res.status(200).json({user: loginResponse.user, success: "You are now sucessfully logged in"})
        } else {
            res.status(loginResponse.statusCode).json({message: loginResponse.message[0].messages[0].message})
        }
    }   else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `method ${req.method} not allowed` });
    }} catch(err) {return res.status(500).json({message: "Ooops! Can not connect to the server. \nCould be a problem with your network or our server is down"})}
    
};