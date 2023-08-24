import { styled } from "styled-components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <Wrapper>
        <section className='image-container'>
          <h4>Loading...</h4>
        </section>
      </Wrapper>
    );
  }
  if (response.isError) {
    return (
      <Wrapper>
        <section className='image-container'>
          <h4>There was an error...</h4>
        </section>
      </Wrapper>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <Wrapper>
        <section className='image-container'>
          <h4>No results found...</h4>
        </section>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <section className='image-container'>
        {results.map((item) => {
          const url = item?.urls?.regular;
          return (
            <img
              key={item.id}
              src={url}
              alt={item.alt_description}
              className='img'
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .image-container {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 3rem auto;
    display: grid;
    gap: 2rem;
  }

  .image-container .img {
    height: 10rem;
  }

  @media (min-width: 768px) {
    .image-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .image-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
export default Gallery;
