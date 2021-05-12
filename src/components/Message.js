import React,{useState} from 'react'
import swal from 'sweetalert';

function Message({variant,children}) {
    if(variant == "success"){
        swal("Success!", "Your Message has been sent", variant);
    }
    else{
        swal("Oops!", "Something Wen Wrong!", variant);
    }
    return;
  }

export default Message