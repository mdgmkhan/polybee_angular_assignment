import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { API_DATA } from 'src/apidata';

const API_URL = "https://api.openweathermap.org/data/2.5/"; //API_DATA.API_URL;
const API_KEY = "b533af408bcd025c5e308e44e85c55c9"; //API_DATA.API_KEY;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  weatherList = [{ id: 1, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }, { id: 2, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }, { id: 3, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' },
  { id: 4, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }, { id: 5, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }, { id: 6, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' },
  { id: 7, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }, { id: 8, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }, { id: 9, weatherTemp: { temp: 0 }, weatherCityName: '', weatherCityCountry: '', weatherDescription: '', maxTemp: 0, minTemp: 0, citySearch: '' }]

  defaultCity = ''

  loading = false;

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit(): void {

    let weatherData = localStorage.getItem('weatherList');
    if (!!weatherData) {
      this.weatherList = JSON.parse(weatherData);
    }
    console.log(this.weatherList);
  }

  loadData1(item1: any) {
    if (this.weatherList[item1].citySearch != '') {

      this.getData1(this.weatherList[item1].citySearch, item1);
    } else {
      this.getData1(this.defaultCity, item1)
    }
  }


  getData1(city: string, item1: any) {

    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherList[item1]['weatherTemp'] = res['main'];
          this.weatherList[item1]['weatherCityName'] = res.name;
          this.weatherList[item1]['weatherCityCountry'] = res.sys.country;
          this.weatherList[item1]['weatherDescription'] = res.weather[0].main;
          this.weatherList[item1]['maxTemp'] = res.main.temp_max
          this.weatherList[item1]['minTemp'] = res.main.temp_min

          localStorage.setItem('weatherList', JSON.stringify(this.weatherList))

          this.loading = false;
        },
      });
  }

  getImage(weatherDesc: string) {
    if (weatherDesc == 'Clear')
      return './assets/images/ClearSky.jpg'
    else if (weatherDesc == 'Clouds')
      return './assets/images/Clouds.jpg'
    else if (weatherDesc == 'Haze')
      return './assets/images/Haze.jpg'
    else if (weatherDesc == 'Rain')
      return './assets/images/Rain.jpg'
    else if (weatherDesc == 'Smoke')
      return './assets/images/Smoke.jpg'
    else if (weatherDesc == 'Mist')
      return './assets/images/Mist.jpg'
    else if (weatherDesc == 'Fog')
      return './assets/images/Fog.jpg'
    else
      return './assets/images/Default.jpg'
  }
}
