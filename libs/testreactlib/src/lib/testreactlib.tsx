import React from 'react';
import { Contact } from './contact';

/* eslint-disable-next-line */
export interface TestreactlibProps {}

export const Testreactlib = (props: TestreactlibProps) => {
  return (
    <div>
      <h1>Welcome to testreactlib!</h1>
      <Contact />
    </div>
  );
};

export default Testreactlib;
