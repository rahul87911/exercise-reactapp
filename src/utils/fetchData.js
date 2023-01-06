export const exerciseOptions = {
  method: "GET",
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '6944c80142mshde3af23e3b9b164p1534f6jsncf077e015190',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};


 
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},

  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '6944c80142mshde3af23e3b9b164p1534f6jsncf077e015190',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};