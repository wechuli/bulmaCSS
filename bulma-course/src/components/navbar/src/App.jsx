import React from "react";
import NavBar1 from "./components/NavBar1";
import Header from "./components/Header";

const App = () => {
  return (
    <React.Fragment>
      <NavBar1 />
      <div
        style={{ height: "1000px", marginTop: "20px" }}
        className="full-body container"
      >
        <div className="columns is centered">
          <div style={{marginRight:'10px'}} className="column is-6 box">
            A and perched felt beguiling implore floor truly soul lies there.
            Decorum mystery fiend this said. Shore soul still though mystery
            word thee loneliness, door flown tufted i floor madam lost the
            tapping, lenore he of i fowl and cannot his this, was stopped horror
            that fluttered, and shadow and.
          </div>
          <div className="column is-6 box">
            <p className="content m-t-md">
              And you as well must die beloved dust, and all your beauty stand
              you in no stead, this flawless, vital hand, this perfect head,
              this body of flame and steel before the gust of death, or under
              his autamnul frost shall be as any leaf, be no less dead, than the
              first leaf that fell, this wonder fled, altered, estranged,
              disintergrated, lost. Nor shall my love avail you in your hour, in
              spite of all my love, you will arise upon that day and wander down
              the air, obscurely as the unattended flower, it mattering not how
              beautiful you were or how beloved above all else that dies.
            </p>
          </div>
        </div>
        <div style={{height:"4000px"}} className="has-background-info">

        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
