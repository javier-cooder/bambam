import Head from "next/head";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { alert } from "@material-ui/core";

function Login(){

    const signIn = () =>{
        auth.signInWithPopup(provider).catch(alert);
    };

    return(
        <Container>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/logoB.png" />
            </Head>

            <LoginContainer>
                <Logo src = "/logoA.png" />
                <Button onClick={signIn} variant="outlined">Entrar con Google</Button>
            </LoginContainer>

        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    align-items: center;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;