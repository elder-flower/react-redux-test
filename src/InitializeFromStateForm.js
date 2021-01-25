import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { load as loadAccount } from './reducers/account';

const data = {
  // 「ロード」がクリックされたときに「アカウント」レデューサーにデータを入力するために使用されます
  firstName: 'Jane',
  lastName: 'Doe',
  age: '42',
  anniversaryDate: '2018-08-22',
  sex: 'female',
  employed: true,
  favoriteColor: 'Blue',
  bio: 'Born to write amazing Redux code.'
}

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

let InitializeFromStateForm = props => {
  const { handleSubmit, load, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={() => load(data)}>
          Load Account
        </button>
      </div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Age</label>
        <div>
          <Field name="age" component="input" type="number" placeholder="Age" />
        </div>
      </div>
      <div>
        <label>Anniversary Date</label>
        <div>
          <Field name="anniversaryDate" component="input" type="date" />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option value="">Select a color...</option>
            {colors.map(colorOption => (
              <option value={colorOption} key={colorOption}>
                {colorOption}
              </option>
            ))}
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Bio</label>
        <div>
          <Field name="bio" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Undo Changes
        </button>
      </div>
    </form>
  )
}

// reduxForm（）で飾ります。 connect（）によって提供されるinitialValuesプロップを読み取ります
InitializeFromStateForm = reduxForm({
  form: 'initializeFromState' // このフォームの一意の識別子
})(InitializeFromStateForm)

// 自分自身に接続したいレデューサーにconnect（）する必要があります
InitializeFromStateForm = connect(
  state => ({
    initialValues: state.account.data // アカウントレデューサーから初期値をプルする
  }),
  { load: loadAccount } // アカウント読み込みアクションの作成者をバインド
)(InitializeFromStateForm)

export default InitializeFromStateForm