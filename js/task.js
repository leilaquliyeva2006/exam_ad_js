class Task {
  #id;
  #title;
  #description;
  #date;
  #isCompleted;

  constructor(name, _description) {
    this.#id = crypto.randomUUID();
    this.#title = name;
    this.#description = _description;
    this.#date = Date.now();
    this.#isCompleted = false;
  }

  get id() {
    return this.#id;
  }

  get title_get() {
    return this.#title;
  }

  get description_get() {
    return this.#description;
  }
  get date_get() {
    return this.#date;
  }
  get isCompleted_get() {
    return this.#isCompleted;
  }

  toggle_completion_status() {
    this.#isCompleted = !this.#isCompleted;
  }
}

export default Task;
