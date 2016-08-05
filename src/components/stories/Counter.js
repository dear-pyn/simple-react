import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Counter from '../Counter.js'

storiesOf('Counter', module)
  .add('simple Counter', () => (
    <Counter onClick={action('clicked')} clickCounter={999} />
  ));
