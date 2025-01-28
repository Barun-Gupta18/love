import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const FirstPage = lazy(() => import("./pages/FirstPage"));
const FirstNo = lazy(() => import("./pages/FirstNo"));
const SecondNo = lazy(() => import("./pages/SecondNo"));
const ThirdNo = lazy(() => import("./pages/ThirdNo"));
const FinalYes = lazy(() => import("./pages/FinaleYes"));
const FirstYes = lazy(() => import("./pages/FirstYes"));

function App() {

  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>

            <Route path="/">
              <Route index element={<FirstPage />}></Route>
              <Route path='SayYes' element={<FirstNo />}></Route>
              <Route path='PleaseSayYes' element={<SecondNo />}></Route>
              <Route path='PleasePleaseSayYes' element={<ThirdNo />}></Route>
              <Route path='FinallyYes' element={<FinalYes />}></Route>
              <Route path='Yes' element={<FirstYes />}></Route>

            </Route>
          </Routes>
        </BrowserRouter >
      </Suspense >
    </>
  )
}

export default App
