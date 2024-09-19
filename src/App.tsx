import "./App.css";
import {useState} from "react";
import People from "./components/People/People.tsx";
import {IPerson} from "./types";
import Counter from "./components/Counter/Counter.tsx";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn.tsx";


const App = () => {
    const [people, setPeople] = useState<IPerson[]>([
        {id: 1, name: "John", age: 28, hobby: "Coding"},
        {id: 2, name: "Jane", age: 30, hobby: "Swimming"},
        {id: 3, name: "Lena", age: 10, hobby: "Draw"},
        {id: 4, name: "Vasya", age: 50, hobby: "Coding"},
    ]);
    const [togglePeople, setTogglePeople] = useState<boolean>(true);

    const changeName = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {

        const copyPeople = people.map((person) => {
            if (person.id === id) {
                return {
                    ...person,
                    name: e.target.value,
                };
            }
            return {...person};
        });

        setPeople(copyPeople);
    };

    const changeAge = (id: number) => {
        const index = people.findIndex((person) => person.id === id);

        const copyPeople = people.map((person, i) => {
            if (i === index) {
                return {
                    ...person,
                    age: person.age + 1,
                };
            }
            return {...person};
        });

        setPeople(copyPeople);
    };

    let peopleList = null;

    const onTooglePeople = () => {
        setTogglePeople((prevState) => !prevState);
    };

    const deletePerson = (id: number) => {
        const copyPeople = people.filter((person) => person.id !== id);

        setPeople(copyPeople);
    };

    if (togglePeople) {
        peopleList = (
            <People
                people={people}
                deletePerson={deletePerson}
                changeName={changeName}
                changeAge={changeAge}
            />
        );
    }

    return (
        <div className="App">
            {peopleList}

            <ToggleBtn onTooglePeople={onTooglePeople} togglePeople={togglePeople}/>
            <Counter people={people}/>
        </div>
    );
};

export default App;
