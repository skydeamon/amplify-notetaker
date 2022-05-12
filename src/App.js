import { withAuthenticator } from 'aws-amplify-react';
import React, { Component }  from 'react';

class App extends Component {
  state = {
    notes: [
      {
        id: 1,
        note: "Hello World"
      }
    ]
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="flex flex-column items-center justify-center pa3 bg-washed-red">
        <h1 className="code f2-1">
          Amplify Notetaker
        </h1>
        {/* Note Form */}
        <form className="mb3">
         <input types="text" className="pa2 f4" placeholder="write your note" />
         <button className="pa2 f4">
            Add Note
         </button>
        </form>

        {/* Note List */}
        <div>
          {notes.map(item =>(
            <div key={item.id} className="flex items-center">
              <li className="list pa1 f3">
                {item.note}
              </li>
              <button className="bg-transparent bn f4">
                <span>&times;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
// export default withAuthenticator(App, {includeGreetings: true});
