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
        <h2>Please log in:</h2>

        <p>Username:</p>
        <input 
            type="text" 
            value={username} 
            onChange = { onUsernameChange }
        />

        <p>Email:</p>
        <input 
            type="text" 
            value={email}
            onChange = { onEmailChange }
        />

        <p>Password:</p>
        <input 
            type="password" 
            value={password}
            onChange = { onPasswordChange }
        />

        <div className="buttons">
            <button onClick={registerClick}>Register:</button>
            <a href="/loginpage">Already have an account?</a>
        </div>

        <p>{statusMessage}</p>
        </>
    )
}