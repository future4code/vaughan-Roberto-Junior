import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import PostPage from '../pages/PostPage/PostPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'


export default function Router(){
    return(
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/FeedPage" element={<FeedPage />} />
            <Route path="/PostPage/:id" element={<PostPage />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
       </BrowserRouter>
    )   
}