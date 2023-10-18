import { html } from 'lit';
import '../src/class-project2.js';

export default {
  title: 'ClassProject2',
  component: 'class-project2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <class-project2
      style="--class-project2-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </class-project2>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
