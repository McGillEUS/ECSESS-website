import React from "react";
import FormField from "./FormField";
import { useForm } from "react-hook-form";
import axios from "axios";

const EventsTab = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
            data.image = data.image[0].name;
            axios.post("/api/admin/events/category", data);
    };

    return (
        <div className="main-wrapper" >
            <h3>Create Event Category</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormField message="Event Category Name" name="event_category_name" enter={register({ required: true })} type="text"/>
                <FormField message="Image" name="image" enter={register({ required: true })} type="file"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default EventsTab;