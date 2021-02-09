import * as React from "react";

interface IProps {
  loading: any;
}

const withLoader = (
  Component: any
) => (props:any) => (
  // TODO - return a loading spinner if loading is true otherwise return the component passed in 
  props.loading ? (
    <div className="loader-overlay">
      <div className="loader-circle-wrap">
        <div className="loader-circle" />
      </div>
    </div>
  ) : (
      <Component {...props} />
    )
);
export default withLoader;