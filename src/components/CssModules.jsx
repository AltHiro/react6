import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}> css</p>
      <button className={classes.button}>FF</button>
    </div>
  );
};
