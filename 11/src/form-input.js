import todoModel from './todo-model';
import { render } from './html-render';

const $inputForm = document.querySelector('#input-form');
const $input = document.querySelector('#input');

function init() {
  $inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = $input.Value;
    if (!text) return;

    $input.value = '';

    data.push({
      ...todoModel,
      text,
      isDone: false,
    });

    render(data);
  });
}

export default {
  init,
};