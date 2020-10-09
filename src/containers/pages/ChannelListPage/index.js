import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ChannelItemContainer from 'containers/base/ChannelItemContainer';
import ToolbarContainer from 'containers/base/ToolbarContainer';
import SelectBox from 'components/common/SelectBox';
import { availableGames, allGames } from './data.js';
import styles from './styles';

const levelSort = ['Sort high-low', 'Sort low-high', 'Sort default'];
const priceSort = ['All price', 'High Price', 'Low Price', 'Middle Price'];
const numPerPage = [
  'Show 10 games',
  'Show 15 games',
  'Show 20 games',
  'Show 25 games',
  'Show all games'
];

const ChannelListPage = props => {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid container item xs={12} spacing={24} className={classes.toolbar}>
            <ToolbarContainer />
          </Grid>

          <Grid container item xs={12} spacing={24}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subTitle}
            >
              YOUR GAMES
            </Typography>
          </Grid>

          <Grid container item xs={12} spacing={24} className={classes.joined}>
            {availableGames.map((data, id) => {
              return <ChannelItemContainer data={data} key={id} />;
            })}
          </Grid>

          <Grid container item xs={12} spacing={24}>
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.subTitle}
            >
              ALL GAMES
            </Typography>
          </Grid>

          <Grid container item xs={12} spacing={24}>
            <SelectBox data={levelSort} />
            <SelectBox data={priceSort} />
            <SelectBox data={numPerPage} />
          </Grid>

          <Grid container item xs={12} spacing={24} className={classes.all}>
            {allGames.map((data, id) => {
              return <ChannelItemContainer data={data} key={id} />;
            })}
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

ChannelListPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChannelListPage);
