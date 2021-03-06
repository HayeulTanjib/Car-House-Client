import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../FireBase/firebase-config';
//import useCarDelete from '../../Hooks/useCarDelete';

const MyCar = () => {

    const [user] = useAuthState(auth);
    //const [myCar, handleDelete] = useCarDelete();
    const [myCar, setMyCar] = useState([])

    useEffect(() => {
        const addMyCar = async () => {
            const url = (`https://gentle-bayou-59489.herokuapp.com/addmycar?email=${user?.email}`)
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

            setMyCar(data)
        }
        addMyCar();
    }, [])

    const handleDelete = async (id) => {
        let deleteConfirm = window.confirm('Are you sure?')
        if (deleteConfirm) {
            await axios.delete(`https://gentle-bayou-59489.herokuapp.com/inventory/${id}`)
                .then(response => {
                    if (response.data.deletedCount > 0) {
                        const remaining = myCar.filter(cars => cars._id !== id);
                        setMyCar(remaining)
                    }
                })
        }
    }

    return (
        <div className='vh-100 '>
            <h2>My Car {myCar.length} </h2>
            <div className='container'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Car Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        myCar.map((car, index) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{car.name}</td>
                                            <td>
                                                <Button variant="danger" onClick={() => handleDelete(car._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </Table>
            </div>
        </div>
    );
};

export default MyCar;