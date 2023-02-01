class Tables {
  static parts = ["Horn", "Head", "Body", "Front Legs", "Back Legs", "Tail", "Tail Tip"];

  static brachyHitzone = [[
    [19,24,15,0,25,20,5,5],
    [50,50,45,0,20,15,10,5],
    [44,40,20,0,15,10,0,5],
    [30,35,30,0,10,5,5,0],
    [30,35,35,0,10,5,5,0],
    [35,25,45,0,15,10,5,5],
    [20,10,10,0,10,5,0,0]
  ],
  [
    [19,24,15,0,25,20,5,5],
    [70,65,50,0,20,15,10,5],
    [40,35,20,0,15,10,0,5],
    [45,50,30,0,10,5,5,0],
    [30,35,35,0,10,5,5,0],
    [35,25,45,0,15,10,5,5],
    [20,10,10,0,5,5,0,0]
  ],
  [
    [55,60,45,0,15,20,10,5],
    [30,30,25,0,15,20,5,5],
    [30,30,25,0,10,15,5,0],
    [40,40,35,0,15,30,5,0],
    [30,30,20,0,10,15,5,0],
    [50,45,50,0,15,15,10,5],
    [20,20,15,0,5,10,5,10]
  ]
]

  static drawTable = () => {
    document.getElementById("table-draw").replaceChildren();
    Tables.brachyHitzone[DrawController.state].forEach((e, i) => {
      let row = document.createElement("tr");
      document.getElementById("table-draw").appendChild(row);
      let head = document.createElement("th");
      head.innerText = Tables.parts[i];
      row.appendChild(head);
      e.forEach(f => {
        let column = document.createElement("td");
        column.innerText = f;
        row.appendChild(column);
      });
    });
  }
};

class Description {
  static desc = [
    "Brute wyverns coated with an explosive green substance. The material is thought to be a unique myxomycete--or slime mold--that is primed to explode by the Brachydios's own saliva. Note that these crafty creatures can also deliver powerful foreleg strikes.",
    "Brute wyverns coated with an explosive green substance, a material that is thought to be a unique slime mold that is primed to explode by an element in the monster's saliva. They are also capable of powerful foreleg strikes.",
    "This brute wyvern uses its saliva to prime the sticky slime coating its arms, rendering it highly explosive."
  ];

  static drawDescription = () => {
    let d = document.createElement("p");
    d.innerHTML = Description.desc[DrawController.state];
    document.getElementById("description").replaceChildren(d);
  }
};

class Media {
  static imgs = ["mh3u/fmD73q", "mh4u/YRFwgT", "mhwi/WrJesY"];
  static video = ["ZqQRse.mp4", "pxllkG.mp4", "WQbGnI.mp4"];
  static audio = ["KL57oW.mp3", "3mnW8L.mp3", "z96lYS.mp3"];

  static showVideo = () => {
    let cont = document.createElement("video");
    cont.setAttribute("width", 640);
    cont.setAttribute("height", 360);
    cont.setAttribute("controls", true);
    cont.setAttribute("id", "video");
    document.getElementById("media-area").appendChild(cont);

    let media = document.createElement("source");
    media.setAttribute("src", "assets/video/" + Media.video[DrawController.state]);
    media.autoplay = true;
    cont.appendChild(media);
    document.getElementById("video").play();
  }

  static playAudio = () => {
    let audio = document.createElement("audio");
    audio.setAttribute("src", "assets/audio/" + Media.audio[DrawController.state]);
    audio.setAttribute("type", "audio/mpeg");
    audio.setAttribute("id", "audio");
    document.getElementById("media-area").appendChild(audio);
    document.getElementById("audio").play();
  }

  static setShowCase = () => {
    let img = document.getElementById("showcase");
    img.setAttribute("src", `assets/img/brachydios/${Media.imgs[DrawController.state]}.avif`);
    img.setAttribute("onerror", `this.onerror=null; this.src='assets/img/brachydios/${Media.imgs[DrawController.state]}.webp'`);
  }

  static handleMedia = () => {
    document.getElementById("media-area").replaceChildren();
    Media.showVideo();
    Media.playAudio();
    Media.setShowCase();
  }
}

class DrawController {
  static state = 0;

  static changeState = (value) => {
    DrawController.state = value;
    Description.drawDescription();
    Tables.drawTable();
    Media.handleMedia();
  }
}