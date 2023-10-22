import axios from "axios";
import { useEffect, useState } from "react";
const DataFetching = () => {
    const [loding,setLoding] = useState(true);
    const [error,setError] = useState('')
    const [post,setPost] = useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res=>{
            setLoding(false)
            setPost(res.data);
            setError('')
        }).catch(error=>{
            setLoding(false);
            setPost({})
            setError("Somthing worng")
        })
    })
    return (
        <div>
            {
                loding ? "Loding" : post.title
            }
           {
             error ? error : null
           }
        </div>
    );
};

export default DataFetching;



