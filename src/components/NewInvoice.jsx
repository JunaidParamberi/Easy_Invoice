import React from 'react'
import Logo from "../assets/Logo.svg"


export const NewInvoiceHead = ()=> {
    return (
        <div>
            <img src={Logo} alt="" />
        </div>
    )
}

function NewInvoice() {
  return (
    <div>
        <NewInvoiceHead/>
    </div>
  )
}

export default NewInvoice
