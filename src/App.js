import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <form>
              <header>
                  <h1>Отправить сообщение</h1>
                  <p>Анонимные сообщения рассматриваются</p>
              </header>
              <section>
                  <div className="input-wrapper">
                      <input type="text" name="name" placeholder="Имя" required/>
                      <div className="error-block">d</div>
                  </div>
                  <div className="input-wrapper">
                      <label for="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="Электронная почта" required/>
                      <div className="error-block">2</div>
                  </div>
                  <div className="input-wrapper with-error">
                      <label for="date">Дата рождения</label>
                      <input type="date" id="date" name="date" placeholder="Дата рождения" required/>
                      <div className="error-block">d</div>
                  </div>
                  <div className="textarea-wrapper">
                      <textarea name="message" placeholder="Сообщение" rows="1" required/>
                      <div className="error-block">d</div>
                  </div>
              </section>
              <section className="button-wrapper">
                  <button id="reset-button" type="reset">Очистить</button>
                  <button id="submit-button">Отправить</button>
              </section>
          </form>
      </div>
    );
  }
}

export default App;
