import React from 'react'
import {Route} from 'react-router-dom'
import ArticleListView from './containers/ArticleListView'
import ArticleDetailView from './containers/ArticleDetailView'

function BaseRoute() {
    return (
        <div>
            <Route path="/" component={ArticleListView} exact />
            <Route path="/:articleID" component={ArticleDetailView} />
        </div>
    )
}

export default BaseRoute
