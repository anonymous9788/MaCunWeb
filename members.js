testFunc([
    {
        "sayhi":"Xin chào nha :3",
        "bg":"img/marswall.png",
        "name": "Owner Marshy",
        "detailName":"Marshy",
        "ava": "img/marshyava.png",
        "discord": "RV | 빨간 맛#7117",
        "job": `Owner, Werewolf Dev, Admin, Quản trò, Staff`
    },
    {
        "sayhi":"Chào mọi người",
        "name": "Werewolf Dev Krysie",
        "detailName":"Krysie",
        "ava": "img/kryava.png",
        "discord": "Krysie#0907",
        "job":"Werewolf Dev, Staff"
    },
    {
        "sayhi":"Chào mọi người",
        "name": "Werewolf Dev Khang",
        "detailName":"Khang",
        "ava": "img/khangava.png",
        "discord": "Khang#9594",
        "job":"Werewolf Dev, Admin"
    },
    {
        "sayhi":`Hola amogus`,
        "name": `<span style="color: #d6d6d6">Admin Kanna</span>`,
		"bg":"img/kannawall.jpg",
        "detailName":`<span style="color: #d6d6d6">Kanna</span>`,
        "ava": "img/kannaava.png",
        "discord": `<span style="color: #d6d6d6">Ethics🐰🐟#2049</span>`,
        "job":`<span style="color: #d6d6d6"><s>Đã xóa theo yêu cầu của thành viên</s></span>`
    },
    {
        "sayhi":"Hi bros!",
        "name": "Werewolf Dev Hải",
        "detailName":"Hair/Nhisme/Nhím",
        "ava": "img/hairava.png",
        "discord": "NHisme#4460",
        "job":"Werewolf Dev, Admin, Side Content Moderator, Side Content Team, Quản trò, Staff"
    },
    {
        "sayhi":"Chào mọi người nha!",
        "name": `<span style="color: #Ffff99">Admin KhongNoiChuyen</span>`,
		"bg":"img/tomwall.jpg",
        "detailName":`<span style="color: #Ffff99">Tồm bếu/Đạt</span>`,
        "ava": "img/tomava.png",
        "discord": `<span style="color: #Ffff99">KhongNoiChuyen#0217</span>`,
        "job":`<span style="color: #Ffff99">Admin, Quản trò, Staff</span>`
    },
    {
        "sayhi":"Chào mọi người",
        "name": "Admin Cá",
        "detailName":"Cá/Fish",
        "ava": "img/fishava.png",
        "discord": "Fish#7700",
        "job":"Admin, Con đỗ nghèo khỉ"
    },
    {
        "sayhi": "It's Secrett",
        "name": "Quản trò Secret",
        "detailName":"Secret/Sec ngou",
        "ava": "img/secava.png",
        "discord": "Secret#0052",
        "job": "Quản trò, Side Content Team, Staff"
    },
    {
        "sayhi": "👋 chào mọi người",
        "name": "Quản trò Hán",
        "detailName":"Hán",
        "ava": "img/hansava.png",
        "discord": "Hán#0366",
        "job": "Quản Trò, Side Content Team, Staff"
    },
    {
        "sayhi": "Chào tất cả",
        "name": "Staff Ryuk",
        "detailName":"Ryuk",
        "ava": "img/ryukava.png",
        "discord": "Ryuk#1019",
        "job": "Side Content Moderator, Side Content Team, Staff"
    },
    {
        "sayhi": "2k8 sin trào các bạn",
        "name": "Staff Taki",
        "detailName":"Taki",
        "ava": "img/takiava.png",
        "discord": "Taki#2202",
        "job": "Side Content Team, Staff"
    },
    {
        "sayhi": "Chào tất cả",
        "name": "Staff Bbilse",
        "detailName":"Bí tồ/Bbilse",
        "ava": "img/biava.png",
        "discord": "Bbilse#5965",
        "job": "Side Content Team, Staff"
    },
    {
        "sayhi": "Ohayo Mina-san",
        "name": "DinoxTheClown",
        "detailName":"Dinox",
        "ava": "img/dinoxava.png",
        "discord": "Dinox#7546",
        "job": "Side Content Team, Staff"
    },
    {
        "sayhi": "Chào tất cả mọi người nhaaaaaaa :>",
        "bg":"img/caowall.jpg",
        "name": `<span class="underline--magical">Web Dev Cáo</span>`,
        "detailName":`Cáo`,
        "ava": "img/caoava.png",
        "discord": `Cáo#3068`,
        "job": `Side Content Team, Staff, Web Developer`
    },
])
const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/icodervn/6f701dca330b0fd8b5f4c524f5d21a7c/raw/c348f509020257dd75ccfd933df81c359af08895/data-pen-oGybzZ.json';

const randNumInRange = max => Math.floor(Math.random() * (max - 1));
const mergeArrays = (arrOne, arrTwo) => arrOne
  .map((item, i) => `${item} ${arrTwo[i]}`)
  .join(', ');
const addBackground = (elms) => (color) => {
  elms.forEach(el => {
    el.style.backgroundImage = color;
  });
}
const getData = async(url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
}
const addBackgroundToUnderlines = addBackground(magicalUnderlines);
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;
const applyGradient = async(url, callback) => {
  const data = await getData(url);
  const gradient = buildGradient(data[randNumInRange(data.length)]);
  callback(gradient);
}

applyGradient(gradientAPI, addBackgroundToUnderlines);