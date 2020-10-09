import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import CardWrapper from 'components/ChannelItem/CardWrapper';
import Header from 'components/ChannelItem/Header';
import PriceButton from 'components/ChannelItem/PriceButton';
import BotButton from 'components/ChannelItem/BotButton';
import CustomDivider from 'components/ChannelItem/CustomDivider';
import AvatarContainer from 'components/common/AvatarContainer';
import Avatar from 'components/common/Avatar';
import EdgeAvatar from 'components/common/EdgeAvatar';
import EdgeNumber from 'components/common/EdgeNumber';
import styles from './styles';

const ChannelItem = props => {
  const { classes } = props;
  console.log('props data', props.data);
  return (
    <Fragment>
      <CardWrapper>
        <Grid container className={classes.container}>
          {props.data.title !== 'coinflip' ? (
            <Fragment>
              <CustomDivider leftPosition="32" topPosition="32" rotate="30" />
              <CustomDivider rightPosition="32" topPosition="32" rotate="-30" />
            </Fragment>
          ) : (
            ''
          )}
          <Header>
            <Grid
              container
              item
              xs={9}
              spacing={24}
              justify="flex-start"
              alignItems="center"
            >
              <div className={classes.headLogo}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.111"
                  height="14.933"
                  viewBox="0 0 15.111 14.933"
                >
                  <g id="battles-icon" transform="translate(0 -0.801)">
                    <path
                      id="Shape"
                      d="M13.637,14.8l-1.751-1.73-1.741.922a.571.571,0,0,1-.223.056.545.545,0,0,1-.334-.137L9.07,13.4a.462.462,0,0,1,0-.66l.492-.487L.473,3.266.005.533A.47.47,0,0,1,.539,0L3.306.467,12.4,9.45l.492-.487a.477.477,0,0,1,.668,0l.517.511a.463.463,0,0,1,.083.551l-.934,1.722,1.751,1.73a.462.462,0,0,1,0,.66l-.668.66a.475.475,0,0,1-.668,0Zm-12.83,0-.668-.66a.462.462,0,0,1,0-.66l1.751-1.73L.956,10.025a.461.461,0,0,1,.082-.551l.517-.511a.477.477,0,0,1,.668,0l.492.487L4.055,8.127l1,.99L3.717,10.44l.83.82,1.34-1.323,1,.989L5.549,12.25l.492.487a.462.462,0,0,1,0,.66l-.517.511a.476.476,0,0,1-.557.082l-1.742-.923L1.474,14.8a.475.475,0,0,1-.668,0Zm9.249-8.979,3.262-3.224.169-.987-1,.167L9.225,5l-1-.99L11.806.467,14.572.005a.469.469,0,0,1,.535.527l-.467,2.734-3.582,3.54Z"
                      transform="translate(0 0.801)"
                      fill="#0baf6c"
                    />
                  </g>
                </svg>
              </div>
              <Typography component="p" className={classes.headTitle}>
                {props.data ? props.data.title : ''}
              </Typography>
            </Grid>

            <Grid
              container
              item
              xs={3}
              spacing={24}
              justify="flex-end"
              className={classes.headRight}
            >
              <Typography component="p" className={classes.headTime}>
                {props.data ? props.data.time : ''}
              </Typography>
            </Grid>
          </Header>

          <Grid
            container
            item
            xs={12}
            spacing={24}
            className={
              props.data.title === 'coinflip'
                ? classes.itemBody1
                : classes.itemBody2
            }
          >
            {props.data && props.data.users
              ? props.data.title === 'coinflip'
                ? props.data.users.map((user, id) => {
                    return (
                      <Grid container item xs={6} spacing={24} justify="center">
                        <Grid
                          container
                          item
                          xs={12}
                          spacing={24}
                          justify="center"
                          className={
                            id === 0
                              ? classes.itemWrapper1
                              : classes.itemWrapper
                          }
                        >
                          <AvatarContainer margin="0.9375rem 0 2.1875rem 0">
                            <Avatar
                              alt="user-avatar"
                              src={require(`assets/icon/${user.avatar}`)}
                              width={80}
                              margin={15}
                            />
                            <EdgeAvatar
                              alt="edge-avatar"
                              src={require(`assets/icon/${user.edgeAvatar}`)}
                            />
                            {user.bot ? <BotButton>Call Bot</BotButton> : ''}
                          </AvatarContainer>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          spacing={24}
                          justify="center"
                          className={classes.coinWrapper}
                        >
                          <PriceButton>
                            <img
                              src={require('assets/icon/coin.png')}
                              alt="coin"
                              className={classes.coinIcon}
                            />
                            {user.price}
                          </PriceButton>
                        </Grid>
                      </Grid>
                    );
                  })
                : props.data.users.map((user, id) => {
                    return (
                      <Grid container item xs={4} spacing={24} justify="center">
                        <Grid
                          container
                          item
                          xs={12}
                          spacing={24}
                          justify="center"
                          className={classes.itemWrapper}
                        >
                          <AvatarContainer
                            margin={
                              id === 0
                                ? '0.9375rem 0 3.125rem auto'
                                : id === 1
                                ? '3.125rem auto 0.9375rem auto'
                                : '0.9375rem auto 3.125rem 0'
                            }
                          >
                            <Avatar
                              alt="user-avatar"
                              src={require(`assets/icon/${user.avatar}`)}
                              width={90}
                            />
                            <EdgeNumber>
                              <span className={classes.edgeNumber}>
                                {user.number}
                              </span>
                            </EdgeNumber>

                            {user.bot ? <BotButton>Call Bot</BotButton> : ''}
                          </AvatarContainer>
                        </Grid>

                        <Grid
                          container
                          item
                          xs={12}
                          spacing={24}
                          justify="center"
                          className={classes.coinWrapper}
                        >
                          {id === 1 ? (
                            user.price !== null ? (
                              <PriceButton>
                                <img
                                  src={require('assets/icon/coin.png')}
                                  alt="coin"
                                  className={classes.coinIcon}
                                />
                                {user.price}
                              </PriceButton>
                            ) : (
                              ''
                            )
                          ) : (
                            ''
                          )}
                        </Grid>
                      </Grid>
                    );
                  })
              : ''}
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={24}
            justify="center"
            className={classes.footerWrapper}
          >
            <Typography component="p" className={classes.footer}>
              {props.data ? props.data.footer : ''}
            </Typography>
          </Grid>
        </Grid>
      </CardWrapper>
    </Fragment>
  );
};

ChannelItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChannelItem);
