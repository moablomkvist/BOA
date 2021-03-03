import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import { Header } from 'components/Header'
import { Startsida } from 'pages/Startsida'
import { Historia } from 'pages/Historia'
import { Ledamoter } from 'pages/Ledamoter'
import { Priser } from 'pages/Priser'

export const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Header />
        <Switch>

          <Route path="/" exact>
            <Startsida />
          </Route>

          <Route path="/historia" exact>
            <Historia />
          </Route>

          <Route path="/ledamöter" exact>
            <Ledamoter />
          </Route>

          <Route path="/priser" exact>
            <Priser />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  )
}
