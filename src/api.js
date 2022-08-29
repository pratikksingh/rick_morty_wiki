const RICK_AND_MORTY_BASE_URL = `https://rickandmortyapi.com/api`;

export const api = {
  getCharactersUrl: ({ page, status, species, gender, name }) => {
    const url = `${RICK_AND_MORTY_BASE_URL}/character/?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`;
    return url;
  }
};
