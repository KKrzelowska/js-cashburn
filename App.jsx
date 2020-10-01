import ReactDOM
class NameForm extends React.Component {
   constructor(props) {
     super(props);
     this.state = {value: 0};
 
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 
   handleChange(event) {
     this.setState({value: event.target.value});
   }
 
   handleSubmit(event) {
     alert('Amount: ' + this.state.value);
     event.preventDefault();
   }
 
   render() {
     return (
       <div>Witaj Jeżu</div>  
       <form onSubmit={this.handleSubmit}>
         <label>
           Podaj kwotę:
           <input type="number" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
     );
   }
 }
 
 ReactDOM.render(
   <NameForm />,
   document.getElementById('root')
 );
