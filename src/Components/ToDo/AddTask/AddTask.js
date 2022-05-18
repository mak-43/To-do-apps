import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { Table } from 'react-bootstrap';
const AddTask = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/alltask`
        fetch(url)
            .then(res => res.json())
            .then(data => setTasks(data))


    }, [tasks])
    const onSubmit = data => {
        const url = `http://localhost:5000/addtask`
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result, user.email);
                toast(`${result.name} Added`)
            })
    };
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure ?')
        if (proceed) {
            const url = `http://localhost:5000//delete/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    toast('Item deleted')
                })
        }
    }
    return (
        <div className='w-50 mx-auto my-4'>
            <form className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='mb-3'>Add Your Task</h2>

                <input className='border p-2 mb-2 ' readOnly  {...register("email")} />
                <input placeholder='Task Name' className='border p-2 mb-2 ' {...register("name", { required: true })} />

                <textarea placeholder='Description' className='border p-2 mb-2' {...register("description")} />

                <input className='border p-2 mb-2 btn btn-warning' type="submit" value='ADD' />
            </form>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Task Name</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    {
                        tasks.map((t,index) =>

                            <tbody>
                                <tr>
                                    <td >{index+1} </td>
                                    <td >{t.name} </td>
                                    <td>{t.description}</td>                                 
                                    <td><button className='text-danger font-bold' onClick={() => handleDelete(`${t._id}`)} >X</button></td>                                 
                                </tr>
                            </tbody>

                        )
                    }
                </Table>
            </div>
        </div>
    );
};

export default AddTask;