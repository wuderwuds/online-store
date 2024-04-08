export const myInitialData = {
    user:{},    
    filter:{
        search: "" 
    },
    cart: [],
    
}

export const getInitState = () => {
    const lc_store = localStorage.getItem('reduxStateX');
    return lc_store ? JSON.parse(lc_store): myInitialData;
  };