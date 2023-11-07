import Button from "./Button";
import "./ErrorTab.css";

const ErrorTab = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="action">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
  );
};

export default ErrorTab;
