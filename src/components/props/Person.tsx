//For object type
import { personNameProps } from "./Person.type";

const Person = (props: personNameProps) => {
  const { fName, lName } = props.name;
  return (
    <div>
      <p>
        {fName} {lName}
      </p>
    </div>
  );
};

export default Person;
