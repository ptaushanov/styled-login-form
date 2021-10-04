import {Card, Form, Input, Button} from "./components/form"

const LoginForm = () => {
    return ( 
        <Card>
            <Form>
                <Input type="text" placeholder="username"/>
                <Input type="password" placeholder="password"/>
                <Button>Log in</Button>
            </Form>
        </Card>
    );
}
 
export default LoginForm;