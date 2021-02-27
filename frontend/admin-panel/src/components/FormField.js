import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const FormField = (props) => {

    const [eventCategories, setEventCategories] = useState([]);

    useEffect(() => {
        const fetchEC = async () => {   
            if (props.type === "select") {
                const EC = await axios.get("/api/admin/events/categories");
                setEventCategories(EC.data.categories);
            }
        };

        fetchEC();
    }, [])
    let eventCategoryList = []
    if (props.type === "select") {
        const ECList = eventCategories;
        for (let i = 0; i < ECList.length; i++) {
            eventCategoryList.push(<option>{ECList[i].name}</option>)
        }
    }

    return (
        <div>
            { props.type === "select" ? (
                <select className="form-input" name={props.name} ref={props.enter} placeholder={props.message}>
                    {eventCategoryList}
                </select>   
            ) : (                  
                <input className="form-input" name={props.name} ref={props.enter} placeholder={props.message} type={props.type} />
            )}
        </div>
    );

}

export default FormField;