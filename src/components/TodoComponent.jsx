import { useState } from "react";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageTodosComponent from "./ManageTodosComponent";
import ErrorComponent from "./ErrorComponent";
import ProtectedRoute from "../security/ProtectedRoute";
import AuthProvider from "../security/AuthProvider";
import UpdateTodoComponent from "./UpdateTodoComponent";
export default function TodoComponent() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <HeaderComponent />
          <Routes>
            <Route element={<LoginComponent />} path="/" />
            <Route element={<LoginComponent />} path="/login" />
            <Route
              element={
                <ProtectedRoute>
                  <WelcomeComponent />
                </ProtectedRoute>
              }
              path="/welcome/:username"
            />
            <Route
              element={
                <ProtectedRoute>
                  <ManageTodosComponent />
                </ProtectedRoute>
              }
              path="/manageTodos"
            />
            <Route
              element={
                <ProtectedRoute>
                  <UpdateTodoComponent />
                </ProtectedRoute>
              }
              path="/updateTodo/:id"
            />
            <Route element={<ErrorComponent />} path="*" />
          </Routes>
          <FooterComponent />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
