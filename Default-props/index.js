class App extends React.Component {
  render() {
    return(
      <div>
        <Hello 
        to="Saheed"
        from="Damilola"
        bangs={5}
      />
      <Hello 
        to="Ubaydallah"
        bangs={10}
      />
      <Hello 
      />
   
   
      </div> )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));