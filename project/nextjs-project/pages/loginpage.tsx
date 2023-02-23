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
      router.push(`allListings/${accessToken}`)
    }

    function onInputChange(e: ChangeEvent<HTMLInputElement>, setVar: Dispatch<SetStateAction<string>>) {
      setVar(e.target.value);
    }


    return (
      <>
        <h2>Please log in:</h2>

        <p>Username:</p>
        <input 
          type="text" 
          value={email} 
          onChange={e => onInputChange(e, setEmail)}
        />

        <p>Password:</p>
        <input 
          type="password" 
          value={password}
          onChange={e => onInputChange(e, setPassword)}
        />

        <div className="buttons">
            <button onClick={loginClick}>Log in:</button>
            <a href="/registerpage">Register</a>
        </div>
      </>
    )
  }
  