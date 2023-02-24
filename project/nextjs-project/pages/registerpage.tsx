import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [statusMessage, setStatusMessage] = useState<string>("");

    function registerClick() {
        console.log("register:", username, email, password)
        if(usernameValid(username) && passwordValid(password) && emailValid(email)) {
            setStatusMessage('Registering:');

            const options = {
                "name": username,                         
                "email": email,          
                "password": password
              };
                               
              const response = fetch('https://api.noroff.dev/api/v1/auction/auth/register', {
                body: JSON.stringify(options),
                headers: {
                  'Content-type': 'application/json'
                },
                method: 'POST'
              }).then(response => response.json);
              
        }  else {
            setStatusMessage('One of your inputs is wrong');
        }
    }

    function onUsernameChange(e: ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
        const valid = usernameValid(e.target.value);

        valid ? e.target.style.color = "black" : e.target.style.color = "red";
    }

    function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
        
        const valid = emailValid(e.target.value);


        valid ? e.target.style.color = "black" : e.target.style.color = "red";
    }

    function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);

        const valid = passwordValid(e.target.value);

        valid ? e.target.style.color = "black" : e.target.style.color = "red";
    }

    function passwordValid(password: string) {
        return password.length >= 8;
    }

    function emailValid(email: string) {
        return /@stud\.noroff\.no/.test(email);
    }
 
    function usernameValid(username: string): boolean {
        const validChars: string[] = [
        '1','2','3','4','5','6','7','8','9','0',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '_','æ','ø','å'
        ]

        for (let i = 0; i < username.length; i++) {
            if(validChars.indexOf(username[i].toString()) === -1) {
                return false
            }
        }

        return true
    }
    return (
        <>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="text-center p-10 w-1/3 bg-slate-400 shadow-inner shadow-slate-100 rounded-2xl flex flex-col justify-evenly items-center">
                <h1 className="text-2xl p-5">Please enter information to register:</h1>

                <p className="text-lg p-3">Username:</p>
                <input 
                    className="p-2 m-4 w-3/4 bg-slate-100 rounded-md shadow-inner shadow-neutral-400 focus:outline-none focus:bg-slate-200 focus:shadow-neutral-500"  
                    type="text" 
                    value={username} 
                    onChange = { onUsernameChange }
                />

                <p className="text-lg p-3">Email:</p>
                <input 
                    className="p-2 m-4 w-3/4 bg-slate-100 rounded-md shadow-inner shadow-neutral-400 focus:outline-none focus:bg-slate-200 focus:shadow-neutral-500"  
                    type="text" 
                    value={email}
                    onChange = { onEmailChange }
                />

                <p className="text-lg p-3">Password:</p>
                <input 
                    className="p-2 m-4 w-3/4 bg-slate-100 rounded-md shadow-inner shadow-neutral-400 focus:outline-none focus:bg-slate-200 focus:shadow-neutral-500"  
                    type="password" 
                    value={password}
                    onChange = { onPasswordChange }
                />

                <div className="flex flex-row justify-evenly w-2/3">
                    <button onClick={registerClick} className="bg-slate-100 w-36 h-10 rounded-md hover:bg-slate-200">Register:</button>
                    <span className="table bg-slate-100 w-36 h-10 rounded-md hover:bg-slate-200"><Link href="/loginpage" className="table-cell align-middle">Log in instead:</Link></span>
                </div>

                <p>{statusMessage}</p>
            </div>
        </div>
        </>
    )
}