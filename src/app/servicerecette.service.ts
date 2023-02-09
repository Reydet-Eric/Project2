import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicerecetteService implements OnInit {
  touterecette: any;
  // variable declarée //
  season: Array<any> = [
    {
      name: 'eggplant',
      type: 'vegetable',
      mois: [5, 6, 7, 8, 9],
      clipart: '../assets/cliparts/eggplant-clipart.svg',
      bonus:
        "Eggplant has antioxidants like vitamins A and C, which help protect your cells against damage. It's also high in natural plant chemicals called polyphenols, which may help cells do a better job of processing sugar if you have diabetes.",
    },
    {
      name: 'cauliflower',
      type: 'vegetable',
      mois: [3, 4, 5, 6, 7, 8, 9, 10, 11],
      clipart: '../assets/cliparts/cauliflower-clipart.svg',
      bonus:
        'Cauliflower  is rich in glucosinolates, substances found in cruciferous vegetables that have a protective role against cancer thanks to their ability to help the liver eliminate toxic substances.',
    },
    {
      name: 'mushrooms',
      type: 'vegetable',
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      clipart: '../assets/cliparts/mushrooms-clipart.svg',
      bonus:
        'Mushrooms are widely known for their great taste and amazing health benefits. Packed with a ton of essential vitamins and minerals, they make for an excellent addition to your diet, adding flavor to many different recipes.',
    },
    {
      name: 'chinese_cabbage',
      type: 'vegetable',
      mois: [1, 2, 3, 8, 9, 10, 11, 12],
      clipart: '../assets/cliparts/chinese-cabbage-clipart.svg',
      bonus:
        'Along with being crunchy and delicious, chinese cabbage is full of fiber, vitamins, minerals, and other nutrients that make it a beneficial addition to your diet. Like other dark, leafy greens, it’s full of antioxidants and other compounds that help to promote better health.',
    },
    {
      name: 'collard',
      type: 'vegetable',
      mois: [1, 2, 11, 12],
      clipart: '../assets/cliparts/collard-clipart.jpg',
      bonus:
        'Collard is an often overlooked vegetable yet very rich in fiber and antioxidants that are beneficial in managing blood sugar.',
    },
    {
      name: 'potatoes',
      type: 'vegetable',
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      clipart: '../assets/cliparts/potatoes-clipart.svg',
      bonus:
        'In addition to starch, potatoes contain vitamins, minerals, and fiber. They’re rich in vitamin C, which is an antioxidant. Potatoes were a life-saving food source in early times because the vitamin C prevented scurvy. Another major nutrient in potatoes is potassium, an electrolyte which aids in the workings of our heart, muscles, and nervous system. Potato skin contains fiber, which is important for digestive health.',
    },
    {
      name: 'carrots',
      type: 'vegetable',
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      clipart: '../assets/cliparts/carrot-clipart.svg',
      bonus:
        'The carrot  is an important source of carotenoids, compounds that give it its beautiful orange color, and which are beneficial for cell protection.',
    },
    {
      name: 'brussels_sprouts',
      type: 'vegetable',
      mois: [1, 2, 10, 11, 12],
      clipart: '../assets/cliparts/brussel-sprouts-clipart.svg',
      bonus:
        'Brussels sprouts  are rich in vitamin C and calcium. Calcium from Brussels sprouts is also very well absorbed by the body.',
    },
    {
      name: 'beetroot',
      type: 'vegetable',
      mois: [1, 2, 3, 9, 10, 11, 12],
      clipart: '../assets/cliparts/beetroot-clipart.svg',
      bonus:
        'Beetroots are full of powerful antioxidants that have a beneficial effect on the prevention of hypertension by reducing blood pressure.',
    },
    {
      name: 'red_cabbage',
      type: 'vegetable',
      mois: [1, 2, 3, 9, 10, 11, 12],
      clipart: '../assets/cliparts/red-cabbage-clipart.svg',
      bonus:
        'Among the different varieties, red cabbages (also called purple cabbages) are considered superior in terms of nutrients. These have a reddish-purple hue due to the presence of a flavonoid and antioxidant called anthocyanin. Red cabbages are also a rich source of dietary fiber, and vitamins C and K. Consuming this vegetable may help reduce the risk of chronic diseases and improve the immune and digestive systems.',
    },
    {
      name: 'celeriac',
      type: 'vegetable',
      mois: [1, 2, 3, 9, 10, 11, 12],
      clipart: '../assets/cliparts/celery-clipart.svg',
      bonus:
        'Celeriac  has anti-inflammatory properties and plays an action in the prevention of cancer thanks to its flavonoid content.',
    },
    {
      name: 'asparagus',
      type: 'vegetable',
      mois: [4, 5, 6],
      clipart: '../assets/cliparts/asparagus-clipart.svg',
      bonus:
        'Asparagus  is a very diuretic food: it contains compounds that promote the renal elimination of toxins.',
    },
    {
      name: 'spinach',
      type: 'vegetable',
      mois: [3, 4, 5, 6, 9, 10],
      clipart: '../assets/cliparts/spinach-clipart.svg',
      bonus:
        'Spinach  is rich in beta-carotene, which has a beneficial effect on eye health. It also has a strong antioxidant power which implies it in the prevention of cancer.',
    },
    {
      name: 'tomatoes',
      type: 'vegetable',
      mois: [4, 5, 6, 7, 8, 9, 10, 11],
      clipart: '../assets/cliparts/tomato-clipart.svg',
      bonus:
        "Tomatoes are low in calories and provide important nutrients like vitamin C and potassium. They're also rich in antioxidants—one called lycopene, responsible for tomatoes' characteristic color, is linked to several benefits, such as a reduced risk of heart disease and certain cancers. ",
    },
    {
      name: 'onions',
      type: 'vegetable',
      mois: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      clipart: '../assets/cliparts/onion-clipart.svg',
      bonus:
        'Onions may have several health benefits, mostly due to their high content of antioxidants and sulfur-containing compounds.They have antioxidant and anti-inflammatory effects and have been linked to a reduced risk of cancer, lower blood sugar levels, and improved bone health.',
    },
    {
      name: 'apple',
      type: 'fruit',
      mois: [1, 2, 3, 4, 8, 9, 10, 11, 12],
      clipart: '../assets/cliparts/apple-clipart.svg',
      bonus:
        'The apple concentrates valuable antioxidants in its peel and is therefore to be chosen organic because it is one of the most processed fruits.',
    },
    {
      name: 'strawberries',
      type: 'fruit',
      mois: [5, 6, 7, 8],
      clipart: '../assets/cliparts/strawberries-clipart.svg',
      bonus:
        'Strawberries are good for your whole body. They naturally deliver vitamins, fiber, and particularly high levels of antioxidants known as polyphenols -- without any sodium, fat, or cholesterol. They are among the top 20 fruits in antioxidant capacity and are a good source of manganese and potassium. Just one serving provides more vitamin C than an orange.',
    },
    {
      name: 'raspberries',
      type: 'fruit',
      mois: [6, 7, 8, 9],
      clipart: '../assets/cliparts/raspberry-clipart.svg',
      bonus:
        'Raspberries pack a lot of nutrition into a small space. They provide potassium, essential to heart function, and proven to lower blood pressure. The omega-3 fatty acids in raspberries can help prevent stroke and heart disease. They also contain a mineral called manganese, which is necessary for healthy bones and skin and helps regulate blood sugar.',
    },
    {
      name: 'rhubarb',
      type: 'fruit',
      mois: [4, 5, 6],
      clipart: '../assets/cliparts/rhubarb-clipart.svg',
      bonus:
        'Rhubarb is an excellent source of vitamin K, which is an essential vitamin for bone health and blood clotting. The vitamin A in rhubarb may also help to fight free radicals that cause skin damage and premature aging, keeping your skin looking healthy and youthful. It’s also high in antioxidants, and many other important vitamins and minerals that provide a variety of health benefits.',
    },
    {
      name: 'Clementine',
      type: 'fruit',
      mois: [1, 2, 3, 11, 12],
      clipart: '../assets/cliparts/clémentine-fruit-saison.png',
      bonus:
        'Clementine  is very rich in vitamin C, which has an important antioxidant action and thus helps to protect our body from premature aging of cells.',
    },
    {
      name: 'kiwi',
      type: 'fruit',
      mois: [1, 2, 3, 4, 12],
      clipart: '../assets/cliparts/kiwi-fruit-saison.png',
      bonus:
        'The kiwi  is the vitamin C champion: 2 kiwis cover 100% of the daily vitamin C requirements for adults.',
    },
    {
      name: 'pear',
      type: 'fruit',
      mois: [1, 2, 3, 9, 10, 11, 12],
      clipart: '../assets/cliparts/poire-fruit-saison-1.png',
      bonus:
        'The pear, like the Conférence or the Comice, concentrates valuable antioxidants in its peel. Prefer organic pears because pesticides are also concentrated in the skin.',
    },
    {
      name: 'pomelo',
      type: 'fruit',
      mois: [4, 5, 6],
      clipart: '../assets/cliparts/pomelo-fruit-saison.png',
      bonus:
        'The pomelo , commonly called grapefruit wrongly, is rich in vitamin C. Pomelos from Corsica can be found in France.',
    },
    {
      name: 'cherry',
      type: 'fruit',
      mois: [6, 7],
      clipart: '../assets/cliparts/cerise-fruit-saison-150x150-1.png',
      bonus:
        'Cherry is rich in catechins, very beneficial antioxidants that are also found in green tea.',
    },
    {
      name: 'melon',
      type: 'fruit',
      mois: [6, 7, 8, 9],
      clipart: '../assets/cliparts/melon-fruit-saison.png',
      bonus:
        'Melon is rich in beta-carotene, an antioxidant that gives it its orange color. It also stimulates the production of serotonin, a neurotransmitter responsible for calming.',
    },
  ];
  // BONUS  : variable pour un modal avec plus d'infos sur le fruits/legumes selectionnés
  bonus: boolean = false;
  indexChoix = 0;
  list = [];

  // URL DE L'API //
  URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s&count=20';
  constructor(public http: HttpClient) {}

  getPost() {
    return this.http.get<any>(this.URL2);
  }

  setRecette(recettes: any) {
    this.touterecette = recettes;
  }

  getSeason() {
    return this.season;
  }
  getBonus() {
    return this.bonus;
  }
  getNoBonus() {
    this.bonus = !this.bonus;
  }

  getIndex() {
    return this.indexChoix;
  }

  getChangeIndex(index: number) {
    this.indexChoix = index;
  }

  getList() {
    return this.list;
  }

  getChangeList(tableau: []) {
    this.list = tableau;
  }

  now: any = new Date();
  month = this.now.getMonth() + 1;
  day = this.now.getDate();

  getCurrentSeason(): any {
    if (this.month > 3 && this.month < 6) {
      this.urlsaison = './assets/621715.png';
      return 'Spring';
    } else if (this.month > 6 && this.month < 9) {
      this.urlsaison = './assets/54455.png';
      return 'Summer';
    } else if (this.month > 9 && this.month < 12) {
      this.urlsaison = './assets/6778042.png';
      return 'Autumn';
    } else if (this.month >= 1 && this.month < 3) {
      this.urlsaison = './assets/2318963.png';
      return 'Winter';
    } else if (this.month == 3) {
      return this.day < 22 ? 'winter' : 'spring';
    } else if (this.month == 6) {
      return this.day < 22 ? 'spring' : 'summer';
    } else if (this.month == 9) {
      return this.day < 22 ? 'summer' : 'automn';
    } else if (this.month == 12) {
      return this.day < 22 ? 'fall' : 'winter';
    }
  }

  saison = this.getCurrentSeason();
  getSaison() {
    return this.saison;
  }

  urlsaison: string = this.getIcons();
  getIcons() {
    return this.urlsaison;
  }

  // Si nous sommes en Hiver; on affiche la page season Hiver quand on clique sur About//

  ngOnInit() {
    this.getCurrentSeason();
  }
}
