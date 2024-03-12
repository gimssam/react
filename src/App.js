import React from 'react';
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import Discover from './LinkComponent/Discover';
import Design from './LinkComponent/Design'
import Develop from './LinkComponent/Develop'
import Distribute from './LinkComponent/Distribute'
import Support from './LinkComponent/Support'
import Account from './LinkComponent/Account'
import Search from './LinkComponent/Search'
// import NotFoundComponent from './LinkComponent/NotFoundComponent'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path = "/" element = { <Home/> } />
        <Route path = "/discover" element = { <Discover/> } />
        <Route path = "/Design" element = { <Design/> } />
        <Route path = "/Develop" element = { <Develop/> } />
        <Route path = "/Distribute" element = { <Distribute/> } />
        <Route path = "/Support" element = { <Support/> } />
        <Route path = "/Account" element = { <Account/> } />
        <Route path = "/Search" element = { <Search/> } />
        {/* 반드시 맨 마지막에 코딩 = Switch 사용해야 함 */}
        {/* <Route component = { NotFoundComponent } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
