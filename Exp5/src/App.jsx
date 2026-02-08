import './App.css'
import { lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

const LocalCounter = lazy(() => import('./components/CounterState'))
const ContextCounter = lazy(() => import('./components/CounterParent'))
const ReduxCounter = lazy(() => import('./components/CounterGlobalReduxParent'))
const NoteModuleRedux = lazy(() => import('./components/NoteModuleRedux'))

function ReduxCountersPage() {
  return (
    <div className="route-stack">
      <ReduxCounter cno="1" />
      <ReduxCounter cno="2" />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="title-block">
          <p className="eyebrow">Experiment-5</p>
          <h1>Lazy Loaded Counters</h1>
          <p className="subtitle">Each page is code-split and loaded on demand.</p>
          <div className="creator-card">
            <span className="creator-name">✨ Taranpreet Singh Mander</span>
            <span className="creator-uid">23BIS70119</span>
          </div>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Overview</NavLink>
          <NavLink to="/local">Local State</NavLink>
          <NavLink to="/context">Context API</NavLink>
          <NavLink to="/redux">Redux</NavLink>
          <NavLink to="/notes">Notes</NavLink>
        </nav>
      </header>

      <Suspense fallback={<div className="loading">Loading page...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="overview">
                <p>Use the navigation to load each counter page as a separate bundle.</p>
              </div>
            }
          />
          <Route path="/local" element={<LocalCounter />} />
          <Route path="/context" element={<ContextCounter />} />
          <Route path="/redux" element={<ReduxCountersPage />} />
          <Route
            path="/notes"
            element={<NoteModuleRedux title="Note Module (Redux)" />}
          />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
