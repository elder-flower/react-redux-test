import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
    return sleep(500).then(() => {
        //サーバーの待ち時間をシミュレートする
        if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
          throw new SubmissionError({
            username: 'User does not exist', // 個別のfieldエラー
            _error: 'Login failed!'          // form全体のエラー
          })
        } else if (values.password !== 'redux-form') {
          throw new SubmissionError({
            password: 'Wrong password', // 個別のfieldエラー
            _error: 'Login failed!'     // form全体のエラー
          })
        } else {
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        }
    });
}

export default submit