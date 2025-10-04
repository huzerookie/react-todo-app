import { useState } from "react";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageTodosComponent from "./ManageTodosComponent";
import ErrorComponent from "./ErrorComponent";
import ProtectedRoute from "../security/ProtectedRoute";
export default function TodoComponent() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route element={<LoginComponent/>} path="/"/>
          <Route element={<LoginComponent/>} path="/login"/>
          <Route element={
            <ProtectedRoute>
            <WelcomeComponent/>
            </ProtectedRoute>
          } path="/welcome/:username"/>
          <Route element={<ManageTodosComponent/>} path="/manageTodos"/>
          <Route element={<ErrorComponent/>} path="*"/>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}
