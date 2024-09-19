import Person from "./Person/Person.tsx";
import {IPerson} from "../../types";
import * as React from "react";

interface Props {
    people: IPerson[];
    changeAge: (id: number) => void;
    changeName: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
    deletePerson: (id: number) => void
}

const People: React.FC<Props> = ({people, changeAge, changeName, deletePerson}) => {
    return (
        <>
            {people.map((person) => (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    onChangeAge={() => changeAge(person.id)}
                    onChangeName={(e) => changeName(e, person.id)}
                    onDeletePersonById={() => deletePerson(person.id)}
                >
                    {person.hobby ? (
                        <p>
                            <b>Hobby:</b> {person.hobby}
                        </p>
                    ) : null}
                </Person>
            ))}
        </>
    );
};

export default People;