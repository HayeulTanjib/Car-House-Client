import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddInventory = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = async (data, e) => {
        await axios.post('http://localhost:5000/addinventory', data)
        e.target.reset()
    }

    return (
        <div className='vh-100'>
            <h2 className='py-3'>Add Car to the Inventory</h2>
            <div className='' >
                <form className='mx-auto d-flex flex-column w-50 gap-3' onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name")} placeholder="Car Name" />
                    <input {...register("Img")} placeholder="Image Link"/>
                    <input {...register("description")} placeholder="Description" />
                    <input {...register("price")} placeholder="Price" />
                    <input {...register("quantity")} placeholder="Quantity" />
                    <input {...register("supplier_name")} placeholder="Supplier Name" />
                    <input type="submit" className='btn btn-primary' value={'Add Car'} />
                </form>
            </div>
        </div>
    );
};

export default AddInventory;