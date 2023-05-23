type StatusProps = {
  //   status: string;  If some other status has been given it wont show the error
  status: "loading" | "success" | "failed";
};

const Status = (props: StatusProps) => {
  const { status } = props;
  let message;
  if (status === "loading") message = "Loading...";
  else if (status === "success") message = "Data fetched successfully..";
  else if (status === "failed") message = "Error Fetching data";
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
