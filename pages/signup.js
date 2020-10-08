import Link from 'next/link';
import { useState } from 'react';
import baseUrl from '../helpers/baseUrl';
import {useRouter} from 'next/router';

const Signup = ()=> {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter();

  const userSignUp = async(e) => {
   // console.log(name,email,password);
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/signup`,{   
    method:"POST",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify({
        name,
        email,
        password
      })
    })

    const res2 = await res.json()
    if(res2.error){
      M.toast({html: res2.error,classes:"red"});
    }
      else{
        M.toast({html: res2.message,classes:"green"});
        router.push('/login')
      }
  }
    return(
      <div className="container card authcard center-align">
        <h3>Signup </h3>
        <form onSubmit = {(e) => {userSignUp(e)}} >
        <input
          type="text" placeholder="Name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <input
          type="email" placeholder="Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input
          type="password" placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
            <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit" >SignUp
              <i className="material-icons right">forward</i>
            </button>
            <Link href="/login" ><a><h5>Already Have accout ?</h5></a></Link>
            </form>
      </div>
    )
  }
  
  export default Signup;