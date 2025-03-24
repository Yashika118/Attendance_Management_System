import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import supabase from '../db/supabase/supabaseClient.js';

dotenv.config();
const app=express();
const port=process.env.PORT || 5000;


app.get("/api/test-supabase",async(req,res)=>{
    try {

        const {data,error}=await supabase.from('test').select('*');
        if(error){
            console.error('Supabase error:', error.message)
            return res.status(500).json({ error: 'Supabase connection failed.' })
        }
        res.status(200).json({ message: 'Supabase connected successfully!', data });

    } catch (error) {
        console.error('Server error:', err)
        res.status(500).json({ error: 'Server error while testing Supabase.' })
    }
})

app.listen(port,()=>{

    console.log(`Server is running on port ${port} successfully`);
    
})
