type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  value: string;
  visible: boolean;
};

//No need import HTMLButtonElement as it is readily available in typescript

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={event => props.handleClick(event, 1)}>Click</button>
      {props.visible && <p>{props.value}</p>}
    </div>
  );
};
