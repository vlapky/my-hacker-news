import { Component } from 'react';
import Post from './components/Post';
import SearchInput from './components/SearchInput'
import Select from './components/Select';
import Pagination from './components/Pagination';
import './App.css';

const BASE_PATH = 'https://hn.algolia.com/api/v1';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';
const PAGE_HITS = 'hitsPerPage=';
const PAGE_PARAM = 'page=';

const HITS_SELECT = [
  {
    value: 20,
    label: '20'
  },
  {
    value: 40,
    label: '40'
  },
  {
    value: 60,
    label: '60'
  }
]

class App extends Component {

  state = {
    searchQuery: '',
    result: {},
    hitsPerPage: 20,
    page: 0
  }

  componentDidMount() {
    const { searchQuery, hitsPerPage, page } = this.state;
    this.fetchData(searchQuery, hitsPerPage, page);
  }

  fetchData = (searchQuery, hitsPerPage, page) => {
    fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
      .then(res => res.json())
      .then(result => this.setState({ result }))
      .catch(error => error)
      
  }

  handleSearchChange = ({ target: { value } }) => {
    this.setState({
      searchQuery: value
    })
  }

  handleHitsSelectChange = ({ target: { value } }) => {
    const { searchQuery } = this.state;

    this.setState({
      hitsPerPage: +value,
      page: 0
    }, () => this.fetchData(searchQuery, this.state.hitsPerPage, 0));
  }

  getSearch = ({ key }) => {
    if (key === 'Enter') {
      const { searchQuery, hitsPerPage } = this.state;
      this.setState({ page: 0 });
      this.fetchData(searchQuery, hitsPerPage, 0);
    }
  }

  handlePageChange = ({ target }) => {
    const buttonType = target.getAttribute('data-name');
    let { page } = this.state;

    switch (buttonType) {
      case 'next':
        this.updatePage(page + 1);
        break;
      case 'prev':
        this.updatePage(page - 1);
        break;
      //default: null;
    }
  }

  updatePage = (num) => {
    const { searchQuery, hitsPerPage } = this.state;
    this.setState({
      page: num
    }, () => this.fetchData(searchQuery, hitsPerPage, num))
  }

  render() {
    const { searchQuery, result, hitsPerPage } = this.state;
    const { hits = [], page, nbPages } = result;

    //console.log(result);

    return (
      <div className='wrapper'>
        <h1>Hacker News</h1>
        <SearchInput
          searchQuery={searchQuery}
          handleSearchChange={this.handleSearchChange}
          getSearch={this.getSearch}
        />
        <Select
          HITS_SELECT={HITS_SELECT}
          hitsPerPage={hitsPerPage}
          handleHitsSelectChange={this.handleHitsSelectChange}
        />
        <Pagination
          onClick={this.handlePageChange}
          page={page}
          lastPage={nbPages}
        />
        <ul>
          {hits.map(({ objectID, author, title, created_at, points, num_comments, url }) =>
            <Post
              key={objectID}
              author={author}
              title={title}
              created_at={created_at}
              points={points}
              num_comments={num_comments}
              url={url} />)}
        </ul>
      </div>
    );
  }

}

export default App;
