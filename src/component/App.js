import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './Home'
import Detail from './Detail'

class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <Route path = "/" exact component = {Home} />
                <Route path = "/detail" component = {Detail} />
            </BrowserRouter>
        )
    }
}

export default App;