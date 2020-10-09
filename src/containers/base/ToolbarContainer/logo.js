import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  svg: {
    width: props => `${props.size}px`,
    height: props => `${props.size}px`
  },
  path: {
    fill: props => `${props.color}`
  }
});

const svgLogo = props => {
  const { classes } = props;
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.111"
        height="14.933"
        viewBox="0 0 15.111 14.933"
        className={classes.svg}
      >
        <g id="battles-icon" transform="translate(0 -0.801)">
          <path
            id="Shape"
            d="M13.637,14.8l-1.751-1.73-1.741.922a.571.571,0,0,1-.223.056.545.545,0,0,1-.334-.137L9.07,13.4a.462.462,0,0,1,0-.66l.492-.487L.473,3.266.005.533A.47.47,0,0,1,.539,0L3.306.467,12.4,9.45l.492-.487a.477.477,0,0,1,.668,0l.517.511a.463.463,0,0,1,.083.551l-.934,1.722,1.751,1.73a.462.462,0,0,1,0,.66l-.668.66a.475.475,0,0,1-.668,0Zm-12.83,0-.668-.66a.462.462,0,0,1,0-.66l1.751-1.73L.956,10.025a.461.461,0,0,1,.082-.551l.517-.511a.477.477,0,0,1,.668,0l.492.487L4.055,8.127l1,.99L3.717,10.44l.83.82,1.34-1.323,1,.989L5.549,12.25l.492.487a.462.462,0,0,1,0,.66l-.517.511a.476.476,0,0,1-.557.082l-1.742-.923L1.474,14.8a.475.475,0,0,1-.668,0Zm9.249-8.979,3.262-3.224.169-.987-1,.167L9.225,5l-1-.99L11.806.467,14.572.005a.469.469,0,0,1,.535.527l-.467,2.734-3.582,3.54Z"
            transform="translate(0 0.801)"
            fill="#0baf6c"
            className={classes.path}
          />
        </g>
      </svg>
    </Fragment>
  );
};

export default withStyles(styles)(svgLogo);
