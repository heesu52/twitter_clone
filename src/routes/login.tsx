import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Error, Form, Intput, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-btn";


export default function CreateAccount () {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const{target: {name, value}}=e;
        
        if (name ==="email"){
            setEmail(value);
        }
        else if (name ==="password"){
            setPassword(value);
        }
    }
    const onSubmit =async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setError("")
        if(isLoading || email ===""|| password === "") return;
        try{
            setIsLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
           navigate("/");
        }catch(e){
            if(e instanceof FirebaseError){
                setError(e.message)
            }
        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <Wrapper>
            <Title>Log into 𝕏 </Title>
            <Form onSubmit={onSubmit}>
                <Intput onChange={onChange} value={email} name="email" type="email" placeholder="Email" required/>
                <Intput onChange={onChange} value={password} name="password" type="password" placeholder="Password" required/>
                <Intput type="submit" value={isLoading ? "Loading..." : "Log in"}/>
            </Form>
            {error !=="" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account?{" "}
                <Link to="/create-account">Create one &rarr;</Link>
            </Switcher>
            <GithubButton/>
        </Wrapper>
    )
}