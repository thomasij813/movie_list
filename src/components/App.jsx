class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello World</div>
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
