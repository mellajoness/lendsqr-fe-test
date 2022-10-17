
 const baseUrl='https://6270020422c706a0ae70b72c.mockapi.io/lendsqr'


 export async function  GET_SERVICE(endpoint: any) {
    const url = baseUrl + endpoint; 
         let config = {
             method: "get",
             headers: {
             'Content-Type': 'application/json',
             }
         };
     try {
         return await fetch(url,config);           
     } catch (error:any) {
         return error.response;
     }
 }
 
 
 export async function POST_SERVICE(body: any, endpoint: any) {
     const url = baseUrl + endpoint;  
    
     const response = await fetch(url, {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         mode: 'cors', // no-cors, *cors, same-origin
         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
         credentials: 'same-origin', // include, *same-origin, omit
         headers: {
           'Content-Type': 'application/json',
         },
         redirect: 'follow', // manual, *follow, error
         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         body: JSON.stringify(body) // body data type must match "Content-Type" header
       });
       return response.json();
 }
 

   
