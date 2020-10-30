export default class FetchApi {
  constructor(url, headers) {
    this.url = url;
    this.headers = headers;
  }

  getData() {
    fetch(this.url, this.headers)
      .then((res) => res.json())
      .then((data) => data.response.data)
      .catch((err) => {
        console.log('Произошла ошибка при подгрузке данных с API --> ', err);
      });
  }
}

// let headers = {
// method: 'GET',
// mode: 'cors',
// headers: {
// 'Accept': 'application/json',
// 'x-token': '0fbdfb-5ceef5-84eac4-f6487c-ac7226',
// };