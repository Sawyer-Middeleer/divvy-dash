import React, { Fragment } from 'react';
import Form from './Form';
import Stations from './Stations';

export default function Dashboard(){
  return(
    <Fragment>
      <Stations />
      <Form />
    </Fragment>
  )
}
