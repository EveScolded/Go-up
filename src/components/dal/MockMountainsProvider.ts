import { Mountain } from "./IMountain";

export class Mountains {
  mountains: Mountain[] = [
    {
      peak_name: "Rysy",
      range_name: "Tatry Wysokie",
      country: "Polska",
      height: 2499,
      reaching_date: "06-08-2020",
      start_point: "Palenica Białczańska",
      duration_time: 7,
      route_length: 13,
      route_link:
        "https://mapa-turystyczna.pl/route?q=49.2545440,20.1029760;49.1794320,20.0881320#49.25436/20.10292/12",
      cover_photo: "x",
    },
    {
      peak_name: "Świnica",
      range_name: "Tatry Wysokie",
      country: "Polska",
      height: 2279,
      reaching_date: "13-06-2020",
      start_point: "Palenica Białczańska",
      duration_time: 6,
      route_length: 12,
      route_link:
        "https://mapa-turystyczna.pl/route?q=49.2545440,20.1029760;49.2194210,20.0093060#49.25436/20.10292/12",
      cover_photo: "x",
    },
  ];

  getMyMountains() {
    return new Promise((resolve) => {
      // const myMountains = localStorage.getItem("mountains");
      // if (myMountains) {
      //   resolve(myMountains);
      // } else {
      setTimeout(() => {
        resolve(this.mountains);
      }, 300);
      // }
    });
  }

  saveMyMountains(mountains: Mountain[]) {
    localStorage.setItem("mountains", JSON.stringify(mountains));
  }
}
