import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Demo(props) {
   const [data,setData] = useState([]);
   

    useEffect(() => {
        fecthdata();
    },[]);

    const fecthdata = async () => {
        const response = await axios.get('https://66aaed06636a4840d7c8dd04.mockapi.io/khanhhotel/Categories');
        setData(response.data);
    }
    
     
    return (
        <div>
            
        </div>
    );
}

export default Demo;