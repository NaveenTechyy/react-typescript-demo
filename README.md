# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

TypeScript: https://github.com/gopinav/React-TypeScript-Tutorials.git

2.)
npx create-react-app react-typescript-demo --template typescript ==> template will configure typescript

components defined in .tsx

# ==========================================================================================

3.)Typing Props:

=============

# App.tsx:

import React from "react";
import Greet from "./components/Greet";

const App = () => {
return (
<div className="App">
<p>Hello</p>
<Greet name="Naveen" />
</div>
);
};

export default App;

# Greet.tsx

import React from "react";

type GreetProps = {
name: string;
};
const Greet = (props: GreetProps) => {
const { name } = props;
return (
<div>
<p>Hello {name}</p>
</div>
);
};

export default Greet;

1.Advantages is in App.tsx if we pass other than string it will throw err ===> name={10}
2.It will give auto suggestion like props.(it'll suggest the name)

# ==========================================================================================

4.)Basic Props:

props for data type like string, number, boolean refer Greet.tsx

For object refer person.tsx

For array of object refer personList.tsx

# ==========================================================================================

5.) Advanced props:

Status.tsx for status

Heading.tsx

Oscar.tsx for passing props to children

# ==========================================================================================

6.Event Props:

Button.tsx & Input.tsx

# ==========================================================================================

7. Style Props:

Container.tsx

# ==========================================================================================

8.Person.type.ts & import inm person.tsx

For having lot more types

///
Reusing types in person.type.tsx and import it in PersonList.tsx

# ==========================================================================================

9. useState hook:

IsLoggedIn.tsx

//If we give isLoggedIn.length or setIsLoggedIn(0) typescript will infers and throws an error
//typeScript will capture initial value(Here boolean) so it will throws error if we give values other than boolean

# ==========================================================================================

10.Usestate future value

User.tsx

const [user, setUser] = useState<AuthUser | null>(null);

const [user, setUser] = useState(null); If we give like this it will take null only as a value if we try to update the state
it'll give you the error
  

==========================================================================================
==========================================================================================

12.How to type the UseReducer:

Counter.tsx

We have to define state type and action type

//check the type by giving type as boolean instead of string it'll throw error

13. StrictAction types Counter.tsx

# type: "increment" | "decrement"; //type:string

==========================================================================================

14. Usecontext:

Refer context folder (Box, Theme, ThemeContext)

This is for a known value

# ==========================================================================================

15. Usecontext future value:

Refer context folder (UserContext, User)

1.UserContext, App, User

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType);

The line 2 will help us to get rid of null check in User.tsx
// if (userContext) {
userContext.setUser(null);
// }
setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>; //Hover on setuser and copy what vs code gives
  


# ==========================================================================================

16. UseRef:

DomRef.tsx

const inputRef = useRef<HTMLInputElement>(null!);

null! allows us to focus input without optional chaining(inputRef.current?.focus())

MutableRef.tsx

A.)To fix the error: window.clearInterval(interValRef.current);

1.)const interValRef = useRef<number | null>(null); ==> change null to undefined ==> const interValRef = useRef<number | undefined>(undefined);
2.)if (interValRef.current) {
window.clearInterval(interValRef.current);
}

B.) To fix the null error in useeffect
const interValRef = useRef<number | null>(null);

For Dom Ref prefer the DOM Element type ==>HTMLInputElement

For Mutable Ref prefer the appropriate type ==> const interValRef = useRef<number | null>(null);

# ==========================================================================================

18. Component:

auth folder

component: React.ComponentType<ProfileProps>;

# ==========================================================================================

19. Generic props:

List.tsx

T is sort of conversion and stands for type

# ==========================================================================================

20.Restricting props:

23. Extract comp props:

Refer html -> customComponent
