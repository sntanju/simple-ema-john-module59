import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
    } 
    return (
        <div>
            <h2>This is Shiping</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input defaultValue={user.displayName} {...register("name")} />  
      <input defaultValue={user.email} {...register("email", { required: true })} />
      
      {errors.emailRequired && <span className="error">This field is required</span>}
      <input placeholder="Address" defaultValue="" {...register("address")} />  
      <input placeholder="Phone Number" defaultValue="" {...register("phone")} />  
      <input placeholder="City" defaultValue="" {...register("city")} />  
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;