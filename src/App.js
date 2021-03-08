import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Startsida } from 'pages/Startsida'
import { Historia } from 'pages/Historia'
import { Ledamoter } from 'pages/Ledamoter'
import { Priser } from 'pages/Priser'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
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
        <Footer />
      </main>
    </BrowserRouter>
  )
}
