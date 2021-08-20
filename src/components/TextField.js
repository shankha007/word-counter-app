import classes from "./TextField.module.css";

const TextField = (props) => {
  return (
    <textarea
      autoFocus={true}
      rows="20"
      value={props.char}
      className={classes.text}
      placeholder="Write your text here!"
      onChange={props.charCount}
    />
  );
};

export default TextField;
