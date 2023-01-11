export const exerciseOptions = {
  method: "GET",
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'f4cb482f2bmsh859799601319d9cp1d47dajsn35cfb2ccb232',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};


 
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},

  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f4cb482f2bmsh859799601319d9cp1d47dajsn35cfb2ccb232',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};