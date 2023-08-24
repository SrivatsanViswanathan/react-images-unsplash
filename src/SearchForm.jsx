import { styled } from "styled-components";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      console.log("Empty value");
      return;
    }
    setSearchTerm(searchValue);
  };
  return (
    <Wrapper>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    color: var(--primary-500);
  }

  .search-form {
    width: var(--view-width);
    max-width: var(--fixed-width);
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .search-input {
    border-color: var(--grey-300);
    transition: var(--darkModeTransition);
    color: var(--textColor);
    border-radius: 0;
  }

  .search-form .btn {
    border-radius: 0;
  }

  .search-form .btn:hover {
    background: var(--primary-300);
    color: var(--black);
  }
`;
export default SearchForm;
