import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './context_api/StateProvider';
import { initialState, reducer} from './context_api/reducer';


// function AuthIsLoaded({ children }) {
//   const {user} = useStateValue()
//   if (!user) return (
//       <div className="container">
//         <br/>
//         <h3 className="text-center mt-5">
//             Splash screen
//         </h3>
//       </div>
//   );
//   return children
// }

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      {/* <AuthIsLoaded></AuthIsLoaded> */}
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
