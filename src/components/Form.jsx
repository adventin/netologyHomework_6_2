// import nextId from "react-id-generator";

export default function Form({ form, setForm, loadCards }) {
  const isValidForm = () => {

    if (form.content) {
      return true;
    }
    return false;
  };
  const submitForm = (event) => {
    event.preventDefault();

    if (isValidForm()) {

      fetch('http://localhost:7777/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(form)
      })
        .then(response => {

          if (response.ok) {
            setForm({ content: '' });
          }
        })
        .finally(() => loadCards())
    }
  };
  const onChange = ({ target: { name, value } }) => setForm((prevForm) => ({ ...prevForm, [name]: value }));

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form-row">
        <div className="form-column">
          <label className="form-label" aria-required htmlFor="content">New Note</label>
          <textarea id="content" className="form-field" name="content" type="content" rows="6" value={form.content} onChange={onChange} />
        </div>
      </div>
      <div className="form-row">
        <button className="form-button">Добавить</button>
      </div>
    </form>
  );
}