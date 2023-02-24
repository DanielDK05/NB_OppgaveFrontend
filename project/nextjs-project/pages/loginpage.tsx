import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

    async function loginClick() {
      const options = {
          "email": "first.last@stud.noroff.no",         
          "password": "UzI1NiIsInR5cCI"
        };
                          
        await fetch('https://api.noroff.dev/api/v1/auction/auth/login', {
          body: JSON.stringify(options),
          headers: {
            'Content-type': 'application/json'
          },
          method: 'POST'
        })
        .then(response => {
          return response.json();
        }).then(data => {
          Login(data.accessToken);
        });
    }

    function Login(accessToken: string) {
      router.push({
        pathname: '/',
        query: {accessToken: accessToken}
      }, '/');
    }

    function onInputChange(e: ChangeEvent<HTMLInputElement>, setVar: Dispatch<SetStateAction<string>>) {
      setVar(e.target.value);
    }

    return (
      <>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <div className="text-center p-10 w-1/3 bg-slate-400 shadow-inner shadow-slate-100 rounded-2xl flex flex-col justify-evenly items-center">
            <h1 className="text-2xl p-5">Please log in:</h1>

            <p className="text-lg p-3">Enter username:</p>
            <input
              className="p-2 m-4 w-3/4 bg-slate-100 rounded-md shadow-inner shadow-neutral-400 focus:outline-none focus:bg-slate-200 focus:shadow-neutral-500"  
              type="text" 
              value={email} 
              onChange={e => onInputChange(e, setEmail)}
            />

            <p className="text-lg p-3">Enter password:</p>
            <input 
              className="p-2 m-4 w-3/4 bg-slate-100 rounded-md shadow-inner shadow-neutral-400 focus:outline-none focus:bg-slate-200 focus:shadow-neutral-500" 
              type="password" 
              value={password}
              onChange={e => onInputChange(e, setPassword)}
            />

            <div className="flex flex-row justify-evenly w-2/3">
                <button onClick={loginClick} className="bg-slate-100 w-36 h-10 rounded-md hover:bg-slate-200">Log in:</button>
                <span className="table bg-slate-100 w-36 h-10 rounded-md hover:bg-slate-200"><Link href="/registerpage" className="table-cell align-middle">Register</Link></span>
            </div>
          </div>
        </div>
      </>
    )
  }
  