import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import qs from 'qs';

const ClientUpdate = () => {

        const data = {      grant_type: "client_credentials",
                            client_id : 'f50fd30a-44df-472e-9448-f14e0b61d4fb',
                            client_secret : 'E9z8Q~uvhVWbJSv3zgnnCnd1WPnqa4Ktfo4vfc35',
                            resource : 'https://graph.microsoft.com',
            };
        useEffect( ()=>{

            const getPost = async () =>{
        
                const options = {
                    method: 'POST',
                    headers: { 'content-type': 'application/x-www-form-urlencoded'},
                    data: qs.stringify(data),
                    url:'/94b6dc64-0791-47b4-9226-03a2802e3b37/oauth2/token',
                    };    
            try {
                const response = await axios(options);
                console.log(response)
            } catch (error) {
                console.log(error)
            }
        
        }
        getPost()
        },[])  

  return (
 <div>
      <h1>Hej och vökomna {"  "+qs.stringify(data)}</h1>
    </div>
  )
}

export default ClientUpdate
