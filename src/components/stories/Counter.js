import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Counter from '../Counter.js'
import '../../App.scss'

storiesOf('Counter', module)
  .add('simple Counter', () => (
    <div className='container'>
      <Counter onClick={action('clicked')} counterValue={999}  />
    </div>
  ));
