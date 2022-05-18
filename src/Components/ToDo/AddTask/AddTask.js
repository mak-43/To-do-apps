import React from 'react';

import { useForm } from "react-hook-form";
const AddTask = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        
    };
    return (
        <div>
             <form className='flex flex-col mb-4' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='mb-3'>Add Your Task</h2>
                    
                    <input  className='border p-2 mb-2 ' readOnly  {...register("email")} />
                    <input placeholder='Task Name' className='border p-2 mb-2 ' {...register("name", { required: true })} />
                   
                    <textarea placeholder='Description' className='border p-2 mb-2' {...register("description")} />
                    
                    <input className='border p-2 mb-2 btn btn-warning' type="submit" value='ADD' />
                </form>
        </div>
    );
};

export default AddTask;