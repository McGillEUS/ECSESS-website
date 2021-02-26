import React from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import axios from "axios";

const EventsTab = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        axios.get(`/api/admin/events/category/${data.event_category}`).then((response) => {
            console.log(response);
            data.event_category = response.data.categories[0].id;
            data.image = data.image[0].name;
            data.second_image = data.second_image[0].name;
            console.log("data: " + JSON.stringify(data))
            axios.post("/api/admin/events", data);
        });
    };

    return (
        <div className="main-wrapper" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField message="Event Name" name="event_name" enter={register({ required: true })} type="text"/>
                <FormField message="Semester" name="semester" enter={register({ required: true })} type="text"/>
                <FormField message="Image" name="image" enter={register({ required: true })} type="file"/>
                <FormField message="Blurb" name="blurb" enter={register({ required: true })} type="textarea"/>
                <FormField message="Second Image" name="second_image" enter={register({ required: true })} type="file"/>
                <FormField message="Event Category" name="event_category" enter={register({ required: true })} type="select"/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default EventsTab;