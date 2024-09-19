import React from 'react';
import {IPerson} from "../../types";

interface Props {
    people: IPerson[];
}
const Counter: React.FC<Props> = ({people}) => {
    const containerStyle = {
        marginTop: '20px',
    };

    if (people.length > 2) {
        containerStyle.color = 'green';
    } else {
        containerStyle.color = 'red';
    }

    return (
        <div style={containerStyle}>
            <h3>Counter: {people.length}</h3>
        </div>
    );
};

export default Counter;