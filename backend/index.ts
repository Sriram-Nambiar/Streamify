import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "./db";
import { z } from "zod";
// In your backend (e.g., Express)

const app = express();
import cors from 'cors';
import { password } from "bun";
app.use(cors());
const signupSchema = z.object({
    username: z.string(),
    password: z.string(),
    gender: z.string(),
    channelName: z.string()
})
const uploadSchema = z.object({
   
    videoUrl: z.url(),
    thumbnail: z.url()
});
app.use(express.json());
const secretkey = "secretkey";
function getUserId(req: express.Request): string | null {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
        return null;
    }try {
        const payload = jwt.verify(authHeader.slice(7), secretkey) as { userId: string };
        return payload.userId;
    }catch (err) {
        return null;
    }   
}

app.post("/signup", async (req, res) => {
    const {username , password, gender, channelName} = req.body;
    const parsedData = signupSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({message: "Invalid signup data"});
    }
    const existingUser = await prisma.user.findFirst({
        where: {
            username: parsedData.data.username
        }
    });
    console.log("Connected to db");
    if(existingUser){
        return res.status(400).json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);
    const user = await prisma.user.create({
        data: {
            username: parsedData.data.username,
            password: hashedPassword,
            gender,
            channelName
        }
    });
    const token = jwt.sign({userId: user.id}, secretkey, {expiresIn: "1h"});
    res.json({message: "User created successfully", token});
});

app.post("/signin", async (req, res) => {
    const {username, password} = req.body;
    const user = await prisma.user.findFirst({
        where: {
            username
        }
    });
    if(!user){
        return res.status(400).json({message: "Invalid credentials"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"});
    }
    const token = jwt.sign({userId: user.id}, secretkey, {expiresIn: "1h"});
    res.json({message: "Signin successful", token});
});

app.get("/videos", async(req, res) =>{
    const videos = await prisma.uploads.findMany({
        include: {user: {select: {id: true, username: true, profilePicture: true}}},
        orderBy: {createdAt: "desc"}
    });
    res.json({videos});
});

app.get("/videos/:id", async(req, res) =>{
    
    const video = await prisma.uploads.findUnique({
        where: {id: req.params.id},
        include: {user: {select: {id: true, username: true, profilePicture: true}}}
    });
    if(!video){
        return res.status(404).json({message: "Video not found"});
    }
    res.json({video});
});

app.post("/videos", async (req, res) =>{
    const userId = getUserId(req);
    if(!userId){
        return res.status(401).json({message: "Unauthorized"});
    }
    const parsedData = uploadSchema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(400).json({message: "Invalid video data"});
    }
    const video = await prisma.uploads.create({
        data: {
            videourl: parsedData.data.videoUrl,
            thumbnail: parsedData.data.thumbnail,
            userId
        },
    });
    res.json({video});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});