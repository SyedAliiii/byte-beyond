import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminNavbar, AdminFooter } from './components/Admin/Index';
import { AuthorNavbar, AuthorFooter } from './components/Author/Index';
import { Layout, Blogs, ViewBlog, Home } from './components/Home/Index';
const App = () => {
  return (
    <>
    <Layout/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blog' element={<ViewBlog/>}/>
      </Route>
    </Routes>
    </>
  );
};
export default App;
