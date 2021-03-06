import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

// Pages
import { About } from "pages/About";
import { Contact } from "pages/Contact";
import { Login } from "pages/Login";
import { NotFound } from "pages/NotFound";
import { Post } from "pages/Post";
import { Profile } from "pages/Profile";
import { Search } from "pages/Search";
import { Home } from "pages/Home";

export const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/post/:idPost" element={<Post />} />
                    <Route path="/search" element={<Search />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        
        </>
    );
}