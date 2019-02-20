import React, { Component } from "react";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div style ={{marginTop:'20px'}}className="container m-t-md">
          <div className="columns">


            <div className="column is-half">
              <article className="message is-primary ">
                <div className="message-header">Hello</div>
                <div className="message-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, dolores voluptate. Sint, consequuntur
                  repellendus? Inventore ad, nostrum delectus dolorum tempora
                  officia aliquam temporibus iure assumenda vel. Similique eaque
                  fugit inventore.
                </div>
              </article>
            </div>

            <div className="column is-half">
           
            <Modal/>
        
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ut provident! Aspernatur quasi, aliquam eos deserunt harum repellendus similique explicabo at saepe ipsam distinctio rerum perferendis ducimus doloribus pariatur molestias.
            </p>

            <Modal2/>
            </div>

          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
