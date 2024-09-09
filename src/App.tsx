import './App.css'
import {useState} from 'react';
import Person from './components/Person/Person.tsx';

interface IPerson {
    name: string;
    age: number;
    hobby?: string | null,
}

const App = () => {

    const [people, setPeople] = useState<IPerson[]>([
        {name: "John", age: 28, hobby: 'Coding'},
        {name: "Jane", age: 30},
    ]);

    return (
        <>
            <Person name={people[0].name} age={people[0].age}>
                <p><b>Hobby:</b> {people[0].hobby}</p>
            </Person>

            <Person name={people[1].name} age={people[1].age}/>
        </>
    )
};

export default App
