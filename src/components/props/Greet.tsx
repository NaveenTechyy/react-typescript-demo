type GreetProps = {
  name: string;
  messageCount?: number; //Optional ==> If true takes props value else 0
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { name, messageCount = 0, isLoggedIn } = props;
  return (
    <div>
      {isLoggedIn
        ? `Welcome ${name}! you have ${messageCount} unread messages`
        : `Welcome Guest`}
    </div>
  );
};

export default Greet;
