import React from 'react';

interface Props {
    onTooglePeople: () => void;
    togglePeople: boolean;
}

const ToggleBtn: React.FC<Props> = ({onTooglePeople, togglePeople}) => {
    const ButtonClasses = ['Button'];

    if (togglePeople) {
        ButtonClasses.push('Red');
    }

    return (
        <button className={ButtonClasses.join(' ')} type="button" onClick={onTooglePeople}>
            {togglePeople ? "Hide people" : "Show people"}
        </button>
    );
};

export default ToggleBtn;