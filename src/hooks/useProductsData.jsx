import React, {useEffect, useState} from 'react'
import axios from 'axios'

const useProductsData = () => {
    const API_URL = 'https://jmtpproductstore.herokuapp.com/api/v1/product'
    const [data, setData] = useState([])

    useEffect(()=>{
        axios
            .get(API_URL)
            .then(res => setData(res.data))
            .catch((err)=>console.log(err))
    },[])

    return {data}
};

export default useProductsData;