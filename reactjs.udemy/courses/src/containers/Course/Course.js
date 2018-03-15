import React from 'react';

const course = (props) => (
    <div>
        <h1>{props.match.params.title}</h1>
        <p>You selected the Course with ID: <strong>{props.match.params.id}</strong></p>
    </div>
);

export default course;