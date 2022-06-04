import fetch from "isomorphic-fetch";
import config from "../../../config";
export default ( url, method, body, isHeader, nocacache ) => {
    let options = '';
    if(method === "GET"){
        options = {
            method    
        }
    }else{
        
        options = {
            method,
            body: JSON.stringify( body ),
        }
    }

    options.headers = requestHeaders();

    if(isHeader){
        if(body.token){
            options.headers={
                Accept: "application/json",
                "Content-Type": "application/json",
                "site-id":config.SITE_ID,
                "x-signup-token":body.token
            }
        }else{
            // console.log('HERE')
           options.headers={ 
            Accept: "application/json",
            "Content-Type": "application/json",
            "site-id":config.SITE_ID,
               "x-sso-token":Util.getCookie('hoppedin_token')
            }
        }
    }

    var starttime = new Date().getTime();
    return fetch( url, options )
        .then( res => {
            // console.log('Response FETCH',res)
            var endDate = new Date();
            var endtime = endDate.getTime();
            var timeDiff = endtime - starttime;
            if(timeDiff > 500 || !config.PRODUCTION)
                // console.log(url," (",timeDiff,"ms)")
            return parseStatus( res.status, res)
        } ).catch((e) => {
            // console.log('API FETCHING ERROR: ', e, url, options);
            return parseStatus( 500, [])
        })
}

function parseStatus( status, res ) {
    return new Promise( ( resolve, reject ) => {
        if ( status >= 200 && status < 300 ) {
            res.json().then( (response) => {
                // console.log('RESPONSE SUCCESS',response)
                resolve( response )
            });
        } else {
            res.json().then( (response) => {
                // resolve( response )
                // console.log(response,'RESponseee')
                resolve({success:0, error:status, response:response});
            });
            
        }
    } );
}

function requestHeaders() {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "site-id":config.SITE_ID,
    }
    return headers;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
