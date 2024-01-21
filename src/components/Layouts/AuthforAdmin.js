import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function AuthforAdmin() {
    const [role] = useCookies(["role"]);
    let navigate = useNavigate()

    useEffect(() =>{
        if(role["role"] !== "admin"){
            toast.error("Admin only can access that page.")
            navigate('/home')
        }

        
      })
}
