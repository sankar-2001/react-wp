import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MyRoutes() {
  return (
    <Routes>
    <Route
      path="/register"
      element={
        <h1>asfsadfadsf</h1>
      }
    />
    <Route
      path="/login"
      element={
        <h1>loginmyself</h1>
      }
    />
    <Route
      path="/page-1"
      element={
        <h1 className='text-4xl'>page1</h1>
      }
    />
    <Route
      path="/page-2"
      element={
        <h1 className='text-4xl'>page2</h1>
      }
    />
  </Routes>
  )
}
