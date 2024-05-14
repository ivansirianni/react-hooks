import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../hooks/useForm';

export const FormularioComponent = () => {
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }
    
    const {formState, userName, email, password, onImputChange} = useForm(initialForm)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    return (
        <>
        <h1>Form con hooks y bootstrap</h1>
            <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre de usuario"
                    name="userName"
                    value={userName}
                    onChange={onImputChange} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Dirección de Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    name='email'
                    value={email}
                    onChange={onImputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    name='password'
                    value={password}
                    onChange={onImputChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Enviar
            </Button>
        </Form>
        </>
        
    )
}
