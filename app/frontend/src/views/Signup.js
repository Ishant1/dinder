import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Signup = () => {
    const [bio, setBio] = useState("")
    const { user } = useAuth0();

    const { register, handleSubmit,getValues, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        data.id = user.sub;
        axios.get("https://dinder1-rtzfqvvfia-nw.a.run.app/automatebio?name="+data.name+"&treat="+data.treat+"&breed="+data.breed+"&park="+data.park+"&trick="+data.trick)
        .then((res)=>res)
        .then((json)=>console.log(json.data));
        // console.log(data);
    }

    const Generate = (data) => {
        data.id = user.sub;
        axios.get("https://dinder1-rtzfqvvfia-nw.a.run.app/automatebio?name="+data.name+"&treat="+data.treat+"&breed="+data.breed+"&park="+data.park+"&trick="+data.trick)
        .then((res)=>res)
        .then((json)=>setBio(json.data));
    }


    return (
        <div className="main">
            <NavBar />
            <div className="form-holder">

                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                
                {/* include validation with required or other standard HTML validation rules */}
                <label>Name</label>
                <input {...register("name", { required: true })} />
                <label>Breed</label>
                <input {...register("breed", { required: true })} />
                <label>Treat</label>
                <input {...register("treat", { required: true })} />
                <label>Park</label>
                <input {...register("park", { required: true })} />
                <label>Trick</label>
                <input {...register("trick", { required: true })} />
                <button
                className="generator"
            type="button"
            onClick={() => {Generate(getValues())}}
        >
            GENERATE AI BIO
        </button>

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
                </form>
                {bio && (
                <div className="bio">
                <h1>Your Generated Bio</h1>
            {bio}
                </div>
                )
                
                }

            </div>
        </div>
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      );
}

export default withAuthenticationRequired(Signup, {
    onRedirecting: () => <>Loading</>,
  });