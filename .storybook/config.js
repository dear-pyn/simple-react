import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/AllComponents');
  // require as many stories as you need.
}

configure(loadStories, module);
