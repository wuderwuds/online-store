export const myInitialData = {
    user:{},    
    filter:{
        search: "" 
    },
    quantity: {}
}

export const getInitState = () => {
    const lc_store = localStorage.getItem('reduxState');
    return lc_store ? JSON.parse(lc_store) : myInitialData;
  };