import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  select: {
    outline: '0',
    boxShadow: 'none',
    border: '0 !important',
    background: '#1e2227',
    backgroundImage: 'none',
    fontSize: '0.9375rem',
    padding: '0.625rem 0',
    color: '#fff',
    cursor: 'pointer',
    marginLeft: '1%'
  }
});

const SelectBox = props => {
  const { classes } = props;
  return (
    <Fragment>
      <select className={classes.select}>
        {props.data
          ? props.data.map(data => {
              return (
                <option value="one" className={classes.option}>
                  {data}
                </option>
              );
            })
          : ''}
      </select>
    </Fragment>
  );
};

SelectBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectBox);
