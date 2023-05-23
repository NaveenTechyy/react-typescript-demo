import { useState } from "react";
import Greet from "./components/props/Greet";
import Heading from "./components/props/Heading";
import Person from "./components/props/Person";
import PersonList from "./components/props/PersonList";
import Status from "./components/props/Status";
import Oscar from "./components/props/Oscar";
import { Button } from "./components/props/Button";
import { Input } from "./components/props/Input";
import { Container } from "./components/props/Container";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";

const App = () => {
  const personName = {
    fName: "Naveen",
    lName: "Kumar",
  };

  const personList = [
    {
      fName: "Naveen",
      lName: "Kumar",
    },
    {
      fName: "Bruce",
      lName: "Wayne",
    },
  ];

  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Greet name="Naveen" messageCount={10} isLoggedIn={false} />
      <Person name={personName} /> {/*Basic Props For Objects */}
      <PersonList names={personList} /> {/*Basic Props For Array of Objects */}
      <Status status="loading" />
      <Heading>I'm heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicarpio!</Heading>
      </Oscar>
      <Button
        value={value}
        handleClick={(event, id) => {
          // console.log("Button clicked", event, id);
          setVisible(prevVisible => !prevVisible);
        }}
        visible={visible}
      />
      <Input
        value={value}
        handleChange={event => setValue(event.target.value)}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: "Bruce",
            last: "Wayne",
          },
          {
            id: 2,
            first: "Clark",
            last: "Kent",
          },
          {
            id: 3,
            first: "Princess",
            last: "Diana",
          },
        ]}
        onClick={item => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position="center" />
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Button Label
      </CustomButton>
    </div>
  );
};

export default App;
