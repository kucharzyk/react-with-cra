import * as React from 'react';
import { StatelessComponent } from 'react';
import Counter from '../../containers/counter/Counter';

const Home: StatelessComponent = () => (
  <div className="Home">
    <h2>This is Home component</h2>
    <hr/>
    <Counter/>
  </div>
);

export default Home;
