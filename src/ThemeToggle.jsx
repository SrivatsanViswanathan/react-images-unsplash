import { styled } from "styled-components";

import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <Wrapper>
      <section className='toggle-container'>
        <button className='dark-toggle' onClick={toggleDarkTheme}>
          {isDarkTheme ? (
            <BsFillMoonFill className='toggle-icon'></BsFillMoonFill>
          ) : (
            <BsFillSunFill className='toggle-icon'></BsFillSunFill>
          )}
        </button>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .toggle-container {
    width: var(--view-width);
    max-width: var(--max-width);
    padding: 1rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
  }
  .dark-toggle {
    background: transparent;
    border-color: transparent;
    width: 5rem;
    height: 2rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  .toggle-icon {
    font-size: 1.5rem;
    color: var(--textColor);
  }
`;
export default ThemeToggle;
