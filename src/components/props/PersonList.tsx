import { Name } from "./Person.type";
//For array of object type
type personListProps = {
  names: Name[];
};

const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
          <h2 key={name.fName}>
            {name.fName} {name.lName}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
