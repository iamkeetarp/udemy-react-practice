import axios from "axios";

const searchImages = async (term) => {
  const url = "https://api.unsplash.com/search/photos";
  const response = await axios.get(url, {
    headers: {
      Authorization: "Client-ID JjxdZZUhGNXy932Dtm0c6a04V8BGdPAaU4ch25-QUeI",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
