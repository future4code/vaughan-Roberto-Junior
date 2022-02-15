import { useEffect } from "react";
import { useNavigate } from "react-router-dom"



export default function FunctionRouterPages(url){

 const navigate = useNavigate();
    return navigate(url);
    
}