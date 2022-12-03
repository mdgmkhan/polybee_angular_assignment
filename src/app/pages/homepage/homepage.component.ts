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
  weatherTemp1: any;
  weatherCityName1!: string;
  weatherCityCountry1!: string;
  weatherDescription1!: string;
  maxTemp1!: number;
  minTemp1!: number;

  weatherTemp2: any;
  weatherCityName2!: string;
  weatherCityCountry2!: string;
  weatherDescription2!: string;
  maxTemp2!: number;
  minTemp2!: number;

  weatherTemp3: any;
  weatherCityName3!: string;
  weatherCityCountry3!: string;
  weatherDescription3!: string;
  maxTemp3!: number;
  minTemp3!: number;

  weatherTemp4: any;
  weatherCityName4!: string;
  weatherCityCountry4!: string;
  weatherDescription4!: string;
  maxTemp4!: number;
  minTemp4!: number;

  weatherTemp5: any;
  weatherCityName5!: string;
  weatherCityCountry5!: string;
  weatherDescription5!: string;
  maxTemp5!: number;
  minTemp5!: number;

  weatherTemp6: any;
  weatherCityName6!: string;
  weatherCityCountry6!: string;
  weatherDescription6!: string;
  maxTemp6!: number;
  minTemp6!: number;

  weatherTemp7: any;
  weatherCityName7!: string;
  weatherCityCountry7!: string;
  weatherDescription7!: string;
  maxTemp7!: number;
  minTemp7!: number;

  weatherTemp8: any;
  weatherCityName8!: string;
  weatherCityCountry8!: string;
  weatherDescription8!: string;
  maxTemp8!: number;
  minTemp8!: number;

  weatherTemp9: any;
  weatherCityName9!: string;
  weatherCityCountry9!: string;
  weatherDescription9!: string;
  maxTemp9!: number;
  minTemp9!: number;

  citySearch1 = '';
  citySearch2 = '';
  citySearch3 = '';
  citySearch4 = '';
  citySearch5 = '';
  citySearch6 = '';
  citySearch7 = '';
  citySearch8 = '';
  citySearch9 = '';
  defaultCity = ''

  loading = true;

  constructor(public httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.loadData1()
    this.loadData2()
    this.loadData3()
    this.loadData4()
    this.loadData5()
    this.loadData6()
    this.loadData7()
    this.loadData8()
    this.loadData9()
  }

  loadData1() {
    if (this.citySearch1 != '') {

      this.getData1(this.citySearch1);
    } else {
      this.getData1(this.defaultCity)
    }
  }
  loadData2() {
    if (this.citySearch2 != '') {

      this.getData2(this.citySearch2);
    } else {
      this.getData2(this.defaultCity)
    }
  }
  loadData3() {
    if (this.citySearch3 != '') {

      this.getData3(this.citySearch3);
    } else {
      this.getData3(this.defaultCity)
    }
  }
  loadData4() {
    if (this.citySearch4 != '') {

      this.getData4(this.citySearch4);
    } else {
      this.getData4(this.defaultCity)
    }
  }
  loadData5() {
    if (this.citySearch5 != '') {

      this.getData5(this.citySearch5);
    } else {
      this.getData5(this.defaultCity)
    }
  }
  loadData6() {
    if (this.citySearch6 != '') {

      this.getData6(this.citySearch6);
    } else {
      this.getData6(this.defaultCity)
    }
  }
  loadData7() {
    if (this.citySearch7 != '') {

      this.getData7(this.citySearch7);
    } else {
      this.getData7(this.defaultCity)
    }
  }
  loadData8() {
    if (this.citySearch8 != '') {

      this.getData8(this.citySearch8);
    } else {
      this.getData8(this.defaultCity)
    }
  }
  loadData9() {
    if (this.citySearch9 != '') {

      this.getData9(this.citySearch9);
    } else {
      this.getData9(this.defaultCity)
    }
  }


  getData1(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp1 = res['main'];
          this.weatherCityName1 = res.name;
          this.weatherCityCountry1 = res.sys.country;
          this.weatherDescription1 = res.weather[0].main;
          this.maxTemp1 = res.main.temp_max
          this.minTemp1 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData2(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp2 = res['main'];
          this.weatherCityName2 = res.name;
          this.weatherCityCountry2 = res.sys.country;
          this.weatherDescription2 = res.weather[0].main;
          this.maxTemp2 = res.main.temp_max
          this.minTemp2 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData3(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp3 = res['main'];
          this.weatherCityName3 = res.name;
          this.weatherCityCountry3 = res.sys.country;
          this.weatherDescription3 = res.weather[0].main;
          this.maxTemp3 = res.main.temp_max
          this.minTemp3 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData4(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp4 = res['main'];
          this.weatherCityName4 = res.name;
          this.weatherCityCountry4 = res.sys.country;
          this.weatherDescription4 = res.weather[0].main;
          this.maxTemp4 = res.main.temp_max
          this.minTemp4 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData5(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp5 = res['main'];
          this.weatherCityName5 = res.name;
          this.weatherCityCountry5 = res.sys.country;
          this.weatherDescription5 = res.weather[0].main;
          this.maxTemp5 = res.main.temp_max
          this.minTemp5 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData6(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp6 = res['main'];
          this.weatherCityName6 = res.name;
          this.weatherCityCountry6 = res.sys.country;
          this.weatherDescription6 = res.weather[0].main;
          this.maxTemp6 = res.main.temp_max
          this.minTemp6 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData7(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp7 = res['main'];
          this.weatherCityName7 = res.name;
          this.weatherCityCountry7 = res.sys.country;
          this.weatherDescription7 = res.weather[0].main;
          this.maxTemp7 = res.main.temp_max
          this.minTemp7 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData8(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp8 = res['main'];
          this.weatherCityName8 = res.name;
          this.weatherCityCountry8 = res.sys.country;
          this.weatherDescription8 = res.weather[0].main;
          this.maxTemp8 = res.main.temp_max
          this.minTemp8 = res.main.temp_min
          this.loading = false;
        },
      });
  }
  getData9(city: string) {
    this.httpClient
      .get(`${API_URL}weather?q=${city}&appid=${API_KEY}`)
      .subscribe({
        next: (res: any) => {
          console.log(res)
          this.loading = true;
          this.weatherTemp9 = res['main'];
          this.weatherCityName9 = res.name;
          this.weatherCityCountry9 = res.sys.country;
          this.weatherDescription9 = res.weather[0].main;
          this.maxTemp9 = res.main.temp_max
          this.minTemp9 = res.main.temp_min
          this.loading = false;
        },
      });
  }

  getImage(weatherDesc : string) {
    if(weatherDesc=='Clear')
      return  './assets/images/Clear.jpg'
    else if(weatherDesc=='Clouds')
      return  './assets/images/Clouds.jpg'
    else if(weatherDesc=='Haze')
      return  './assets/images/Haze.jpg'
    else if(weatherDesc=='Rain')
      return  './assets/images/Rain.jpg'
    else if(weatherDesc=='Smoke')
      return  './assets/images/Smoke.jpg'
    else
      return  './assets/images/Default.jpg'
  }
}
