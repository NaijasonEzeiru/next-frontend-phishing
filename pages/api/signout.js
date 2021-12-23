import cookie from "cookie";

export default async (req, res) => {
    if(req.method === "POST") {
            res.setHeader(
                "Set-Cookie",
            cookie.serialize("token", "", {
                    httpOnly: true,
                      expires: new Date(0),
                      sameSite: "strict",
                       path: "/",
                    }))
                    
            res.status(200).json({message: "Successfully signed out"})
    }   else {console.log(res)
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `method ${req.method} not allowed` });
    }
};