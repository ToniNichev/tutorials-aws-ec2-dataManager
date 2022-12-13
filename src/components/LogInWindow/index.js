import React, { Component, useEffect, useState } from 'react';
import styles from './styles.scss';

const LogInWindow = () => {

  const appId='553596269528879';
  const redirect_uri='http://toni-develops.com:8085/authenticate/facebook';
  const stateParam='';

  return (
    <div className={styles.wrapper}>
      <form action="https://www.facebook.com/v15.0/dialog/oauth?client_id={appId}&redirect_uri={redirect-uri}&state={stateParam}" method="GET" >
        <button type="submit">Log In With Facebook</button>
      </form>        
    </div>
  );
}

export default LogInWindow;
