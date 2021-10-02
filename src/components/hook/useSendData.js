//import React from 'react';
import axios from 'axios';
//import cors from 'cors';


export const SendData = (data) => {
  console.log('Datos enviados', data)
  /*if ( !data.date || 
       !data.hour ||
       !data.personNumber ||
       !data.name || 
       !data.lastName || 
       !data.mphone || 
       !data.email  ) {
    return
  }*/

  
  return axios.post('http://localhost:5000/messages', {
    headers: {
      'content-type': 'application/json',
      /*'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',*/
    },
    data
  })
  .then(response => {
      console.log(response);
      return response
  })
  .catch(error => {
    console.log(error)
  });
}
