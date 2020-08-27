import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function CN() {
  return (
      <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <p style={{ color: 'red' }}>hi there</p>
    
    <style jsx>{`
        h1 {
          color: blue;
        }
        div {
          background: black;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </div>
  );
}

ReactDOM.render(<CN />, document.querySelector('#CN'));