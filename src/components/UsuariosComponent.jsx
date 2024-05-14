import Table from 'react-bootstrap/Table';
import { useFetch } from '../hooks/useFetch';



export const UsuariosComponent = () => {
    const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')
    return (
        <>
            <h1>Fetch con hooks</h1>
            <h3>Lista de Usuarios Registrados</h3>
            {
                isLoading
                    ?
                    <h4>Loading Users...</h4>
                    : errors
                        ? <h4>Ha ocurrido un error: {errors}</h4>
                        :
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </Table>
            }

        </>
    )
}
