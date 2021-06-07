import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  export default function Notify(){
     toast.success(" Submitted ");
     console.log("notify clicked")
     
     
     
     return (
        <ToastContainer />
     )

  }

  export function  Toastcontainer () {
      return(
          <ToastContainer />
      )
  }