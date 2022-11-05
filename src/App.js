import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';
import RepoList from './components/repos/RepoList';
import RepoDetails from './components/repos/RepoDetails';
import NotFound from './components/layouts/NotFound';
import RepoPaginate from './components/repos/RepoPaginate';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import SearchRepo from './components/repos/SearchRepo';
import ErrorBoundary from './utils/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='repos_list' element={<RepoList />} />
          <Route path='repo_details/:login/:name' element={<RepoDetails />} />
          <Route path='search' element={<SearchRepo />}>
            <Route path=':username' element={<RepoPaginate />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
