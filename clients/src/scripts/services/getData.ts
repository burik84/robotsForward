import { URL, DATA } from './service';

export const getSourceData = async () => {
  const url = `${URL.ru}public/service/${DATA.source}`;
  const data = await fetch(url)
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => {
      console.log('Something went wrong', error.message);
    });
  return data;
};

export const getWinnerData = {
  table: async (year: string) => {
    const url = `${URL.ru}public/table/win${year}.json`;
    const data = await fetch(url)
      .then((response) => response.json())
      .then((res) => res)
      .catch((error) => {
        console.log('Something went wrong', error.message);
      });
    return data;
  },
};
