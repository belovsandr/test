import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import '../styles/App.css';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Заполните поле'
    }
    if (!values.email) {
        errors.email = 'Заполните поле'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Неверный формат'
    }
    if (!values.message) {
        errors.age = 'Заполните поле'
    }
    return errors
}

const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && ((error && <div className="error-block">{error}</div>))}
    </div>
)

const renderFieldTextarea = ({ input, label, placeholder, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <textarea {...input} placeholder={placeholder} rows="1"/>
        {touched && ((error && <div className="error-block">{error}</div>))}
    </div>
)


class SubmitForm extends Component {
    render() {
        const { handleSubmit, pristine, reset, submitting, invalid, valid } = this.props;
        return (
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <header>
                        <h1>Отправить сообщение</h1>
                        <p>Анонимные сообщения рассматриваются</p>
                    </header>
                    <section>
                        <div className="input-wrapper">
                            <Field type="text" name="name" placeholder="Имя" component="input"/>
                        </div>
                        <div className="input-wrapper">
                            <Field type="email" id="email" name="email" placeholder="Электронная почта" label="Email" component={renderField}/>
                        </div>
                        <div className="input-wrapper">
                            <Field type="date" id="date" name="date" label="Дата рождения" component={renderField}/>
                        </div>
                        <div className="textarea-wrapper">
                            <Field name="message" placeholder="Сообщение" component={renderFieldTextarea}/>
                        </div>
                    </section>
                    <section className="button-wrapper">
                        <button id="reset-button" onClick={reset}>Очистить</button>
                        <button id="submit-button" disabled={pristine || invalid}>Отправить</button>
                    </section>
                </form>
            </div>
        );
    }
}

SubmitForm = reduxForm({
    form: 'submit',
    validate,
})(SubmitForm);

export default SubmitForm;

