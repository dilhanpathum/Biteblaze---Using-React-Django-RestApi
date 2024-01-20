import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

import { useNavigate } from 'react-router-dom';

export default function Auth() {

    const token = useCookies(["mytoken"]);
    let navigate = useNavigate()

    useEffect(() =>{
        if(!token['mytoken']){
            navigate('/home')
        }
        
      })
}
