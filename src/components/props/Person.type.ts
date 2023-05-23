//While having lot more types
// export type personNameProps = {
//   name: {
//     fName: string;
//     lName: string;
//   };
// };

//Resuing types in PersonList.tsx
export type Name = {
  fName: string;
  lName: string;
};

export type personNameProps = {
  name: Name;
};
