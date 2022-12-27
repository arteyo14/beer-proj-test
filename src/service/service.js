const URL = "https://api.punkapi.com/v2/beers";

const fetchData = async (setData) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    setData.value = [...data];
    // console.log(setData);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
