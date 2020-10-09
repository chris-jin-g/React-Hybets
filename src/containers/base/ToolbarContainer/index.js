import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CustomButton from 'components/common/CustomButton';
import LabelWrapper from 'components/common/LabelWrapper';
import TabButton from 'components/common/TabButton';
import styles from './styles';

import SVGLogo from './logo';

const ToolbarContainer = props => {
  const { classes } = props;
  const [tabValue, setTabValue] = useState('all');
  return (
    <Fragment>
      <Grid container className={classes.root}>
        <Grid container item xs={12}>
          <div className={classes.toolbarTitle}>
            <Grid container item xs="12" justify="flex-start">
              <Grid
                container
                item
                sm="12"
                md="2"
                justify="center"
                alignItems="center"
              >
                <SVGLogo className={classes.headerLogo} size="25" />
              </Grid>
              <Grid
                container
                item
                sm="12"
                md="10"
                alignItems="middle"
                className={classes.titleWrapper}
              >
                <div>
                  <Typography component="h4" className={classes.title}>
                    BATTLES
                  </Typography>
                  <Typography component="p" className={classes.subTitle}>
                    12 GAMES
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.toolbarBody}>
            <Grid container justify="space-between">
              <Grid container item md="12" lg="4" justify="flex-start">
                <TabButton onClick={() => setTabValue('all')}>
                  <SVGLogo
                    size={17}
                    color={tabValue === 'all' ? '#0baf6c' : '#4d5258'}
                  />
                  <Typography
                    component="p"
                    className={
                      tabValue === 'all'
                        ? classes.tabTitleActive
                        : classes.tabTitle
                    }
                  >
                    All Battles
                  </Typography>
                </TabButton>
                <TabButton onClick={() => setTabValue('coinflip')}>
                  <SVGLogo
                    size={17}
                    color={tabValue === 'coinflip' ? '#0baf6c' : '#4d5258'}
                  />
                  <Typography
                    component="p"
                    className={
                      tabValue === 'coinflip'
                        ? classes.tabTitleActive
                        : classes.tabTitle
                    }
                  >
                    Coinflip
                  </Typography>
                </TabButton>
                <TabButton onClick={() => setTabValue('flower')}>
                  <SVGLogo
                    size={17}
                    color={tabValue === 'flower' ? '#0baf6c' : '#4d5258'}
                  />
                  <Typography
                    component="p"
                    className={
                      tabValue === 'flower'
                        ? classes.tabTitleActive
                        : classes.tabTitle
                    }
                  >
                    Flower Pocker
                  </Typography>
                </TabButton>
              </Grid>
              <Grid
                container
                item
                md="12"
                lg="8"
                justify="flex-end"
                alignItems="center"
              >
                <LabelWrapper>
                  <div>
                    <Typography component="p" className={classes.number}>
                      0
                    </Typography>
                    <Typography component="p" className={classes.label}>
                      OPEN GAMES
                    </Typography>
                  </div>
                </LabelWrapper>
                <LabelWrapper>
                  <div>
                    <Typography component="p" className={classes.number}>
                      1200
                    </Typography>
                    <Typography component="p" className={classes.label}>
                      TOTAL GAMES
                    </Typography>
                  </div>
                </LabelWrapper>
                <CustomButton
                  backgroundcolor={'#2f363e'}
                  hovercolor={'#234368'}
                  color={'#ffffff'}
                  border={'none'}
                >
                  HISTORY
                </CustomButton>
                <CustomButton
                  backgroundcolor={'#0bb26e'}
                  hovercolor={'#10965f'}
                  color={'#ffffff'}
                  border={'none'}
                >
                  CREATE GAME
                </CustomButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

ToolbarContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolbarContainer);
