import { html, LitElement } from 'https://unpkg.com/lit-element?module';

const author = 'open-wc';
const homepage = 'https://open-wc.org/';
const footerTemplate = html`
      <footer>Made with love by <a href="${homepage}">${author}</a></footer>
    `;

export class TodoApp extends LitElement {
  constructor() {
    super();
    this.todos = [
      { text: 'Do A', finished: true },
      { text: 'Do B', finished: false },
      { text: 'Do C', finished: false },
    ];
  }
  static get properties() {
    return {
      todos: { type: Array }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    console.log('lit element connected');
  }
  _addTodo() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';

    this.todos = [
      ...this.todos,
      { text, finished: false },
    ];
  }
  _changeTodoFinished(e, changedTodo) {
    const finished = e.target.checked;

    this.todos = this.todos.map((todo) => {
      if (todo !== changedTodo) {
        return todo;
      }
      return { ...changedTodo, finished };
    });
  }
  _removeTodo(todo) {
    this.todos = this.todos.filter(e => e !== todo);
  }
  render() {
    const finishedCount = this.todos.filter(e => e.finished).length;
    const unfinishedCount = this.todos.length - finishedCount;

    return html`
    <h1>LitElement Todo App</h1>
    <input id="addTodoInput" placeholder="Name" />
    <button @click="${this._addTodo}">Add</button>

    <ol>
      ${this.todos.map(todo => html`
        <li>
          <input
            type="checkbox"
            .checked=${todo.finished}
            @change=${e => this._changeTodoFinished(e, todo)}
          />
          ${todo.text}
          <button @click=${() => this._removeTodo(todo)}>X</button>
        </li>
      `,)}
    </ol>

    <div>Total finished: ${finishedCount}</div>
    <div>Total unfinished: ${unfinishedCount}</div>

    ${footerTemplate}
  `;
  }
}

customElements.define('todo-app', TodoApp);