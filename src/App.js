import { List, Form } from './components'

function App() {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6">
            <List />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
