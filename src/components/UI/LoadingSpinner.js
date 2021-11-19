import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className="centered">
    <div className={classes.spinner} />
  </div>
);

export default LoadingSpinner;
