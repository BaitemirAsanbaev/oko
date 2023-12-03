import styles from "./Form.module.scss";

const Form = () => {
  return (
    <section className={styles.Form}>
      <h2>Заголовок формы</h2>
      <h5>Расскажите клиенту, что вам нужны его данные для связи с вами</h5>
      <label>
        E-mail/номер телефона
        <input type="text" placeholder="phone number " />
      </label>
      <label>
        Фамилия
        <input type="text" placeholder="user Surname" />
      </label>
      <label>
        Имя
        <input type="text" placeholder="user  name" />
      </label>

      <button className={styles.btn}>Отправить</button>

      <p className={styles.par}>
        Нажимая на кнопку, вы соглашаетесь с условиями о персональных данных
      </p>
    </section>
  );
};

export default Form;
