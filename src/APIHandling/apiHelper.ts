// function for getAuthToken
export const getAuthToken =()=>{
    const token = new URLSearchParams(location.search).get('token');
	console.log("TCL: getAuthToken -> token", token)
    return token;
}


// function to generate client seed
export const generateClientSeed = () => {
    const availableChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let clientSeed = ''
    for (let i = 0; i < 32; i++) {
        clientSeed +=
            availableChars[Math.floor(Math.random() * availableChars.length)]
    }
    return clientSeed
}


// function to generate currency code 

export const getCurrencyCode =()=>{
  const searchParams = new URLSearchParams(location.search);
  const currencyCode = searchParams.get('currencyCode') || "USD";
  return currencyCode;
}