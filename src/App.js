import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminNavbar, AdminFooter } from './components/Admin/Index';
import { AuthorNavbar, AuthorFooter } from './components/Author/Index';
import { Layout, Blogs, ViewBlog, Home } from './components/Home/Index';

const App = () => {
  return (
    <>
      <Layout/>
    </>
  );
};

export default App;