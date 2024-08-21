import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Intput, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubButton from "../components/github-btn";


export default function CreateAccount () {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const{target: {name, value}}=e;

        if (name ==="name"){
            setName(value);
        }
        else if (name ==="email"){
            setEmail(value);
        }
        else if (name ==="password"){
            setPassword(value);
        }
    }
    const onSubmit =async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setError("")
        if(isLoading || name ===""|| email ===""|| password === "") return;
        try{
            setIsLoading(true);
           const credentials= await createUserWithEmailAndPassword(auth, email, password);
           console.log(credentials.user);
           await updateProfile(credentials.user, {
            displayName: name,
           });
           navigate("/login");
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
            <Title>Join 𝕏 </Title>
            <Form onSubmit={onSubmit}>
                <Intput onChange={onChange} value={name} name="name" type="text" placeholder="Name" required/>
                <Intput onChange={onChange} value={email} name="email" type="email" placeholder="Email" required/>
                <Intput onChange={onChange} value={password} name="password" type="password" placeholder="Password" required/>
                <Intput type="submit" value={isLoading ? "Loading..." : "Create Account"}/>
            </Form>
            {error !=="" ? <Error>{error}</Error> : null}
            <Switcher>
                Already have an account?{" "}
                <Link to="/login">Log in &rarr;</Link>
            </Switcher>
            <GithubButton/>
        </Wrapper>
    )
}