import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <form>
              <header>
                  <h1>Отправить сообщение</h1>
                  <p>Аноноимные сообщения рассматриваются</p>
              </header>
              <section>
                  <div>
                      <input type="text" placeholder="Имя" required/>
                  </div>
                  <div>
                      <label>Email</label>
                      <input type="email" placeholder="Электронная почта" required/>
                  </div>
                  <div>
                      <label>Дата рождения</label>
                      <input type="date" placeholder="Дата рождения" required/>
                  </div>
                  <div>
                      <textarea required/>
                  </div>
              </section>
              <section>
                  <button type="reset">Очистить</button>
                  <button>Отправить</button>
              </section>
          </form>
      </div>
    );
  }
}

export default App;
