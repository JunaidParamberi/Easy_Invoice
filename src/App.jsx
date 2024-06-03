import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Avatar } from '@mui/material'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Invoices from './pages/Invoices'
import InvoiceTable from './components/InvoiceTable'
import NewInvoice from './components/NewInvoice'


function App() {


  return (
    <div className=' h-[100vh]'>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<Dashboard/>}/>
      <Route path='invoices' element = {<Invoices/>}>
      <Route index element={<InvoiceTable />} />
            <Route path="draft" element={<h1>Drafts</h1>} />
            <Route path="add" element={<NewInvoice/>} /> 
      </Route>
      <Route path='quotations' element = {<h1>quatations</h1>}/>
      <Route path='clients' element = {<h1>clients</h1>}/>
      <Route path='settings' element = {<h1>settings</h1>}/>

      </Route>
    </Routes>
   
    </div>
  )
}

export default App
