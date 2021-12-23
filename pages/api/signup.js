import cookie from "cookie";

export default async (req, res) => {
 try{   if (req.method === "POST") {
        const {username, email, password} = req.body
        const regInfo = {
            "username": username,
            "email": email,
            "password": password,
        }
        console.log(regInfo)
        const regRes = await fetch("http://localhost:1337/auth/local/register", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        body: JSON.stringify(regInfo),
    });

    const data = await regRes.json();
    if (regRes.ok) {
        res.setHeader (
            "Set-Cookie",
            cookie.serialize("token", data.jwt, {
                httpOnly: true,
                      maxAge: 30 * 24 * 60 *60,
                      sameSite: "strict",
                       path: "/",
                    }))
            res.status(200).json({user: data.user})
        } else {
            res.status(data.statusCode).json({message: data.message[0].messages[0].message})
        }
    }   else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `method ${req.method} not allowed` });
    }}
    catch(err) {return res.status(500).json({message: "Ooops! Can not connect to the server. \nCould be a problem with your network or our server is down"})}
};