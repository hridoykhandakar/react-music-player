import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Kesariya",
      cover: "https://pagalnew.com/coverimages/kesariya-brahmastra-500-500.jpg",
      artist: "Aso, Middle School, Aviino",
      // audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      audio: "https://pagalnew.com/download320/30350",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Aafat",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Zahrah S Khan",
      audio: "https://pagalnew.com/download320/32091",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fitoor",
      cover:
        "https://pagalnew.com/coverimages/fitoor-shamshera-hindi-500-500.jpg",
      artist: "Mithoon, Arijit Singh, Neeti Mohan, Karan Malhotra",
      audio: "https://pagalnew.com/download320/30059",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: " Dhokha",
      cover: "https://pagalnew.com/coverimages/Dhokha-Arijit-Singh-500-500.jpg",
      artist: "Arijit Singh",
      audio: "https://pagalnew.com/download320/23591",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tere Hawaale",
      cover:
        "https://pagalnew.com/coverimages/tere-hawaale-laal-singh-chaddha-500-500.jpg",
      artist: " Arijit Singh, Shilpa Rao",
      audio: "https://pagalnew.com/download320/32066",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kaale Naina",
      cover:
        "https://pagalnew.com/coverimages/kaale-naina-shamshera-hindi-500-500.jpg",
      artist: "Mithoon, Neeti Mohan, Shadab Faridi, Sudesh Bhosle",
      audio: "https://pagalnew.com/download320/30061",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Aashiqui Aa Gayi",
      cover:
        "https://pagalnew.com/coverimages/aashiqui-aa-gayi-radhe-shyam-hindi-500-500.jpg",
      artist: "Arijit Singh",
      audio: "https://pagalnew.com/download320/21520",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
