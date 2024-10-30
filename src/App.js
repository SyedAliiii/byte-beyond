import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
// import { AdminNavbar, AdminFooter } from './components/Admin/Index';
// import { AuthorNavbar, AuthorFooter } from './components/Author/Index';
import { Layout, Blogs, ViewBlog, Home } from './components/Home/Index';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blog' element={<ViewBlog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;