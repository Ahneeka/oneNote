import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NoteManagementEmpty from "./pages/NoteManagementEmpty";
import WriteNewNote from "./pages/WriteNewNote";
import WriteNewNoteActive from "./pages/WriteNewNoteActive";
import NoteManagement from "./pages/NoteManagement";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/note" element={<NoteManagementEmpty />} />
          <Route path="/write" element={<WriteNewNote  />} />
          <Route path="/writeactive" element={<WriteNewNoteActive  />} />
          <Route path="/manage" element={<NoteManagement  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
