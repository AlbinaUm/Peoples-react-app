import "./Person.css";
import * as React from "react";

interface Props extends React.PropsWithChildren {
  name: string;
  age: number;
  onChangeAge: React.MouseEventHandler;
  onChangeName: React.ChangeEventHandler<HTMLInputElement>;
  onDeletePersonById: React.MouseEventHandler;
}

const Person: React.FC<Props> = ({
  name,
  age,
  onChangeAge,
  onChangeName,
  onDeletePersonById,
  children,
}) => {
  return (
    <div className="person">
      <h1>{name}</h1>
      <p>Age: {age}</p>
      {children}
      <hr />
      <input type="text" value={name} onChange={onChangeName} />
      <hr />
      <button onClick={onChangeAge}>Add age</button>
      <hr />
      <button type="button" onClick={onDeletePersonById}>
        Delete
      </button>
    </div>
  );
};

export default Person;
