export class ThemeStore {
  constructor() {
    //implementar
    this.state = { theme: 'light' };
    this.subscribers = [];
  }

  subscribe(subscriber) {
    //implementar
    this.subscribers.push(subscriber);
  }

  notify() {
    // implementar 
    this.subscribers.forEach(sub => sub.update(this.state));
  }

  toggleTheme() {
    this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.notify();
  }
}


export class StoreSub {
  // recibe un nodo del DOM
  constructor(node) {
    //implementar
    this.node = node;
  }
  // recibe el estado state, que contiene { theme: 'light' } o {theme: 'dark'}
  update(state) {
    //implementar
    const theme = state.theme;
    this.node.classList.remove('light', 'dark');
    this.node.classList.add(theme);
  }
}