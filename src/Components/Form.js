import { useState } from 'react';

function Form(props){
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.movieSearch(searchTerm);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={searchTerm} onChange={handleChange} />
                <input type='submit' value="Submit" />
            </form>
        </div>
    );
}

export default Form;