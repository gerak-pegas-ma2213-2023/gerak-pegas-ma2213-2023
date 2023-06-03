//BAGIAN SIMULASI 1
var mass2 = 10; // massa
//var k2 = 0.1; // konstanta pegas
var damping2 = 0; // faktor redaman
var x2 = 20; // posisi awal
var v2 = 0; // kecepatan awal
var a2 = 0; // percepatan awal
//var f_ext2 = 0; // gaya luar

var plotData2 = []; // variabel untuk menyimpan data plotss

//SIMULASI 2
var mass = 10; // massa
//var k = 0.1; // konstanta pegas
var x = 20; // posisi awal
var v = 0; // kecepatan awal
var a = 0; // percepatan awal
//var f_ext = 0; // gaya luar

var plotData = []; // variabel untuk menyimpan data plot

let frek;
let damp;
let amp;
let k;

let frek2;
let amp2;
let k2;

//IMAGE
let bg;
let logo;
let bgimage;
let profil;
let question;
let pb;
let pd;
let programmer;
let code;
let grafik;
let pers;
let bmkg;
let dapus;
let cocogoose;
let cocogoose1;
let josefin;
let josefin2;
let josefin3;
let rhuben;


function preload(){
  bg = loadImage('18303681.jpg')
  logo = loadImage('logoganda.png')
  bgimage = loadImage('frameimg.png')
  profil = loadImage('profil4.png')
  question = loadImage('question.png')
  pb = loadImage('pb.jpg')
  pd = loadImage('pd.jpg')
  programmer = loadImage('Programming-amico (1).png')
  code = loadImage('redaman.jpg')
  grafik1 = loadImage('redaman2.jpg')
  grafik2 = loadImage('woredaman2.jpg')
  pers = loadImage('quadcopy.png')
  bmkg = loadImage('bmkg.png')
  pnjlsn = loadImage("pnjlsn.png")
  dapus = loadImage("dapus.png")
  abda = loadImage("abda.png")
  rois = loadImage("rois.png")
  rani = loadImage("rani.png")
  rhuben = loadImage("rhuben.png")
  vivi = loadImage("vivi.png")
  lilis = loadImage("lilis.png")
  amel = loadImage("amel.png")
  cocogoose = loadFont('Cocogoose Pro-trial.ttf'); 
  cocogoose1 = loadFont('Cocogoose Pro Light-trial.ttf');
  josefin = loadFont('JosefinSans-Medium.ttf');
  josefin2 = loadFont('JosefinSans-Regular.ttf');
  josefin3 = loadFont('JosefinSans-Light.ttf');
  
//BAGIAN SIMULASI
  home2=loadImage("home2.png")
  
//BAGIAN SIMULASI 2
  home=loadImage("home.png")
}

function setup(){
  createCanvas(1350 , 3720);
  background("#421f38")
  image(bg, 0, 0, 1350, 300);
  image(logo, 650, -40, 120, 120);
  image(profil, 480, 3280, 400, 400);
  image(bgimage, 0, 3340, 300, 350);
  image(rois, 90, 3430, 120, 120);
  image(bgimage, 175, 3340, 300, 350);
  image(rani, 270, 3430, 120, 120);
  image(bgimage, 350, 3340, 300, 350);
  image(rhuben, 400, 3350, 200, 200);
  image(bgimage, 525, 3340, 300, 350);
  image(abda, 610, 3410, 140, 140);
  image(bgimage, 700, 3340, 300, 350);
  image(vivi, 740, 3330, 220, 220);
  image(bgimage, 875, 3340, 300, 350);
  image(lilis, 943, 3420, 170, 130);
  image(bgimage, 1050, 3340, 300, 350);
  image(amel, 1118, 3390, 160, 160);
  image(question, 50, 340, 160, 160);
  image(pnjlsn,1090,700,160,160);
  image(programmer, 450, 2000, 150, 150);
  image(dapus, 650, 2900, 250, 250);
  image(code, 250, 2310, 400, 600);
  image(grafik1, 700, 2310, 400, 275);
  image(grafik2, 700, 2630, 400, 275);

//------------------------------------------------------------//
//BAGIAN SIMULASI 1
  
 //input frekuensi
  u=createInput(0.01)
  u.position(385, 695)
  u.changed(frek2)
  frek2();
  
function frek2(){
   frekuensi2 = (u.value())
}
  
//input amplitudo
  q=createInput(30)
  q.position(385, 750)
  q.changed(amplitudo2)
  amplitudo2();
  
function amplitudo2(){
   amp2 = (q.value())
}
  
//input k
  f=createInput(0.1)
  f.position(385, 805)
  f.changed(kpegas2)
  kpegas2();
  
function kpegas2(){
   k2 = (f.value())
}
  
// mengatur skala plot
  plotData2.push(x2); // memasukkan posisi awal ke dalam data plot
  for (var i = 0; i < 100; i++) {
    plotData2.push(0); // mengisi data plot dengan 0
  } 
  
///BAGIAN SIMULASI 2
  
//input frekuensi
  p=createInput(0.01)
  p.position(385, 1115)
  p.changed(frek)
  frek();
  
function frek(){
   frekuensi = (p.value())
}
  
//input amplitudo
  l=createInput(30)
  l.position(385, 1170)
  l.changed(amplitudo)
  amplitudo();
  
function amplitudo(){
   amp = (l.value())
}

//input k
  g=createInput(0.1)
  g.position(385, 1225)
  g.changed(kpegas)
  kpegas();
  
function kpegas(){
   k = (g.value())
}

//input redaman
  t=createInput(5)
  t.position(385, 1280)
  t.changed(damp)
  damp();
  
function damp(){
   damping = (t.value())
}

// mengatur skala plot
  plotData.push(x); // memasukkan posisi awal ke dalam data plot
  for (var i = 0; i < 100; i++) {
    plotData.push(0); // mengisi data plot dengan 0
  }
}

function draw(){
  
//JUDUL
  textSize(42);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("white");
  noStroke();
  text("GAYA PEMULIH PADA SISTEM PEGAS", 697, 152);
  
  textSize(42);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("#09499F");
  noStroke();
  text("GAYA PEMULIH PADA SISTEM PEGAS", 700, 150);
  
//SUBJUDUL
  textSize(17);
  textAlign(CENTER);
  textFont(cocogoose);
  fill("#09499F");
  stroke("white");
  strokeWeight(3);
  text("SIMULASI PERILAKU BANGUNAN SELAMA GEMPA BUMI DAN MEMPREDIKSI RESPONNYA", 705, 170);
  
/////////////////////////////////////////////PROFIL DATA bagian bawah//////////////////////////////////////////////////
  //ROIS
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("ROISSATUN H.", 150, 3412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("ROISSATUN H.", 152, 3410 )
  text("1 2 1 1 6 0 0 0 2", 150, 3575)
  
  //RANI
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("RANI J. TURNIP", 323, 3412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("RANI J. TURNIP", 324, 3410 )
  text("1 1 9 1 6 0 0 9 3", 325, 3575)
  
  //RHUBEN
  textSize(13);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("RHUBEN HASUGIAN", 498, 3412 )
  
  textSize(13);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("RHUBEN HASUGIAN", 499, 3410 )
  text("1 2 1 1 6 0 0 6 8", 500, 3575)
  
  //ABDA
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("M.ABDA PRATAMA", 673, 3412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("M.ABDA PRATAMA", 674, 3410 )
  text("1 2 1 1 6 0 1 1 0", 675, 3575)
  
  //VIVI
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("VIVI OKTAVIA R. F", 848, 3412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("VIVI OKTAVIA R. F", 849, 3410 )
  text("1 2 1 1 6 0 0 6 2", 850, 3575)
  
  //LILIS
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("LILIS FITRIANI", 1023, 3412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("LILIS FITRIANI", 1024, 3410 )
  text("1 2 1 1 6 0 0 4 3", 1025, 3575)
  
  //AMEL
  textSize(14);
  textFont(josefin3);
  fill("#09499F");
  noStroke();
  text("AMELIA N", 1200, 3412 )
  
  textSize(14);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("AMELIA N", 1201, 3410 )
  text("1 2 1 1 6 0 1 0 8", 1200, 3575)
  
  
  fill("#09499F");
  noStroke()
  rect(100,3630,1150,30,10);
  
  textSize(17);
  textFont(josefin3);
  fill("white");
  noStroke();
  text("note : web simulasi ini dibuat untuk memenuhi tugas besar mata kuliah Visualisasi dalam Sains program studi Matematika Institut Teknologi Sumatera", 670, 3650);
  
//////////////////////////////////////////////BAGIAN INTERMEZZO ATAS///////////////////////////////////////////////////////////////
  
  //SHAPE
  let lbcolor = color('#09499F');
  fill(lbcolor);
  noStroke();
  rect( 250, 350, 1015, 150, 20);
  
  //TEXT JUDUL
  textSize(24);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Mengapa Bangunan di Jepang Tahan Terhadap Gempa?", 260, 380);

  //TEXT ISI
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Saat terjadi gempa bumi, tanah di bawah bangunan bergetar, menyebabkan bangunan tersebut bergetar. Gerakan ini mirip dengan", 260, 403);
  text("gerakan pegas, dengan bangunan bertindak sebagai massa dan tanah bertindak sebagai pegas. Akan tetapi, perilaku bangunan selama", 260, 421);
  text("gempa bumi sangat tidak linier karena interaksi yang kompleks antara bangunan dan tanah.", 260, 439);
  text("Model gerak pegas nonlinier dapat digunakan untuk mensimulasikan perilaku bangunan selama gempa bumi dan memprediksi respons-", 260, 457);
  text("nya. Informasi ini berguna dalam mendesain bangunan yang tahan gempa dan dalam mengembangkan kode bangunan tahan gempa.", 260, 475)
  

//PERSAMAAN  
  textSize(34);
  textAlign(RIGHT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Persamaan", 910, 1600);
  
  textSize(34);
  textAlign(RIGHT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Persamaan", 912, 1600);
  
  image(pers, 400, 1200, 1030,1050);
  image(pb, 750, 1650, 250, 120);
  image(pd, 750, 1820, 500, 120);
  
//BEDA
  // textSize(24);
  // textAlign(LEFT)
  // textFont(josefin);
  // fill("#09499F");
  // noStroke();
  // text("a. Beda", 750, 1650);
  
  textSize(24);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("a. Beda", 752, 1642);
  
//   //DIFERENSIAL
//   textSize(24);
//   textAlign(LEFT)
//   textFont(josefin);
//   fill("#09499F");
//   noStroke();
//   text("b. Diferensial", 750, 1302);
  
  textSize(24);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("b. Diferensial", 752, 1810);

//CODING
  let cpcolor = color('#09499F');
  fill(cpcolor);
  noStroke();
  rect( 250, 2170, 850, 100,20);
  
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Coding Python dan", 600, 2080);
  text("Plot Grafik Python", 630, 2120);
  
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Coding Python dan", 602, 2082);
  text("Plot Grafik Python", 632, 2122);
  
//TEXT JUDUL
  textSize(24);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Simulasi Apabila Nilai Redaman Divariasikan", 260, 2195);

//TEXT ISI
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Pegas dengan redaman adalah gerak pegas yang dilengkapi dengan suatu sistem yang berfungsi untuk meredam", 260, 2220);
  text("getaran. Sistem redaman ini, menyebabkan amplitudo osilasi makin lama semakin mengecil dan gerak pegas", 260, 2240);
  text("menjadi lebih terkontrol dan gerak yang dihasilkan pada grafik akan lebih teratur.", 260, 2260);
  
  
//DAPUS
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Daftar Pustaka", 450, 3030);

  
  textSize(34);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Daftar Pustaka", 452, 3032);
  
  textSize(16);
  textAlign(LEFT)
  textFont(josefin2);
  fill("white");
  noStroke();
  text("Arif, F., & Pariatmono. (2022). SIMULASI NUMERIK PENGGUNAAN BASE ISOLATION UNTUK STRUKTUR", 260, 3130);
   text("         SEDERHANA TAHAN GEMPA. Jurnal Ilmiah Indonesia", 260, 3150);
   text(" Setio , H. D., Kusumastuti, D., Setio, S., Siregar , P., & Hartanto, A.(2012). Pengembangan Sistem Isolasi Seismik", 260, 3170);
  text("          pada Struktur Bangunan yang Dikenai Beban Gempa sebagai Solusi untuk Membatasi Respon Struktur.", 260, 3190);
  text("          Jurnal Teknik Sipil.", 260, 3210);
  text("Fajar, Anita. 2022. Bangunan di Jepang Tahan Gempa, Apa Rahasianya?. Diakses pada 27 Mei 2023 dari", 260, 3230);
  text("          https://bptsugm.com/bangunan-di-jepang-lebih-tahan-gempa-apa-rahasianya/", 260, 3250);
  
  fill("#09499F");
  rect(0,3276,1350,5);
  
  fill("white");
  rect(0,3280,1350,5);
  

  
  
  
  
  
  
  
//Visualisasi
  image(bmkg, 910, 520, 170, 130);
  textSize(35);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Visualisasi Gempa dengan Redaman", 300, 570);
  text("        dan Tanpa Redaman", 350, 610);
  
  textSize(35);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Visualisasi Gempa dengan Redaman", 302, 572);
  text("        dan Tanpa Redaman", 352, 612);
  
  textSize(40);
  textAlign(LEFT)
  textFont(josefin);
  fill("#09499F");
  noStroke();
  text("Penjelasan", 875, 825);
  
  textSize(40);
  textAlign(LEFT)
  textFont(josefin);
  fill("white");
  noStroke();
  text("Penjelasan", 877, 827);
  
  textSize(18);
  textAlign(LEFT)
  textFont(josefin3);
  fill("white");
  noStroke();
  

  text("Jepang adalah salah satu negara yang sering mengalami gem-", 820, 895);
  text("pa bumi. Saat gempa bumi dengan kekuatan besar terjadi, ti-", 820, 915);
  text("dak sedikit bangunan yang mengalami kerusakan parah mulai", 820, 935);
  text("dari rumah penduduk hingga gedung-gedung tinggi. Berdasar-", 820, 955);
  text("kan data yang dilaporkan Badan Meteorologi Jepang,tercatat", 820, 975);
  text("sekitar 5.000 gempa bumi kecil yang terjadi setiap tahunnya.", 820, 995);
  text("Kekuatannya pun bervariasi mulai dari magnitude sebesar 3,0", 820, 1015);
  text("hingga 5,0. Oleh karna itu, Jepang terus melakukan inovasi ter-", 820, 1035);
  text("hadap konstruksi bangunan agar tahan terhadap gempa bumi.", 820, 1055);
  text("Salah satunya adalah dengan menggunakan redaman.", 820, 1075);
  text("Saat terjadi gempa, bangunan yang memiliki sistem redaman", 820, 1105);
  text("akan mengalami gerakan yang lebih terkontrol dan lebih sedi-", 820, 1125);
  text("kit deformasi dibandingkan dengan bangunan yang tidak me-", 820, 1145);
  text("miliki redaman. Hal ini disebabkan oleh sistem redaman gem-", 820, 1165);
  text("pa yang berfungsi untuk menyerap energi gempa sehingga ge-", 820, 1185);
  text("taran gempa tidak langsung terpindahkan ke bangunan. Pada", 820, 1205);
  text("grafik simulasi gempa bumi disamping, terlihat adanya damping", 820, 1225);
  text("atau pengurangan energi yang dihasilkan oleh pegas. Damping", 820, 1245);
  text("ini akan menunjukkan perubahan deformasi pegas yang berku-", 820, 1265);
  text("rang seiring dengan waktu, sehingga pegas akan kembali ke po-", 820, 1285);
    text("sisi awal dengan lebih lambat dibandingkan dengan pegas tan-", 820, 1305);
    text("pa redaman", 820, 1325);
  
  
  
  
  
 
  
//------------------------BAGIAN SIMULASI-------------------------//

///////////////////////TANPA REDAMAN//////////////////////////////
  noStroke()
  fill("white")
  rect(0,660,750,375,20);
  
//penamaan input
  textSize(15);
  textAlign(LEFT)
  fill("black");
  noStroke();
  text("Masukan nilai frekuensi", 385, 685);
  text("Masukan nilai amplitudo", 385, 740);
  text("Masukan nilai konstanta pegas", 385, 795);
  
  // menghitung gaya total
  var f_spring2 = -k2 * x2; // gaya pegas
  var f_damping2 = -damping2 * v2; // gaya redaman
  var f_ext2 = amp2 * sin(frameCount / frekuensi2);
  var f_total2 = f_spring2 + f_damping2 + f_ext2; // gaya total

  // menghitung percepatan
  a2 = f_total2 / mass2;

  // menghitung kecepatan dan posisi baru
  v2 = v2 + a2 * 0.3; // 0.3 adalah delta waktu
  x2 = x2 + v2 * 0.3;

  // menambahkan posisi baru ke dalam data plot
  plotData2.push(x2);

  // menghapus data plot yang paling lama
  if (plotData2.length > 100) {
    plotData2.shift();
  }

  // menggambar grafik
  stroke("red");
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < plotData2.length; i++) {
    var x_plot2 = map(i, 0, plotData2.length - 1, 375, 745);
    var y_plot2 = map(plotData2[i], -80, 80, 760,1060 );
    vertex(x_plot2, y_plot2);
  }
  endShape();

  // menggambar massa dan pegas
  stroke(0);
  strokeWeight(2);
  fill(255);
  image(home2, x2, 685, mass2 * 30, mass2 * 35);
  
  stroke(0);
  strokeWeight(5);
  line(375, 662, 375,1033);
  
  
/////////////////////PAKAI REDAMAN///////////////////////////
  noStroke()
  fill("white")
  rect(0,1080,750,430,20);
  
  textSize(15);
  textAlign(LEFT)
  fill("black");
  noStroke();
  text("Masukan nilai frekuensi", 385, 1105);
  text("Masukan nilai amplitudo", 385, 1160);
  text("Masukan nilai konstanta pegas", 385, 1215);
  text("Masukan nilai redaman", 385,1270);
  
// menghitung gaya total
  var f_spring = -k * x; // gaya pegas
  var f_damping = -damping * v; // gaya redaman
  var f_ext = amp * sin(frameCount / frekuensi);
  var f_total = f_spring + f_damping + f_ext; // gaya total

// menghitung percepatan
  a = f_total / mass;

// menghitung kecepatan dan posisi baru
  v = v + a * 0.3; // 0.3 adalah delta waktu
  x = x + v * 0.3; 

// menambahkan posisi baru ke dalam data plot
  plotData.push(x);

// menghapus data plot yang paling lama
  if (plotData.length > 100) {
    plotData.shift();
  }

// menggambar grafik
  stroke("red");
  strokeWeight(5);
  noFill();
  beginShape();
  for (var i = 0; i < plotData.length; i++) {
    var x_plot = map(i, 0, plotData.length - 1, 375, 745);
    var y_plot = map(plotData[i], -80, 80, 1225, 1525);
    vertex(x_plot, y_plot);
  }
  endShape();

// menggambar massa dan pegas
  stroke(0);
  strokeWeight(2);
  fill(255);
  image(home, x, 1100, mass * 35, mass * 40);
  
  stroke(0);
  strokeWeight(5);
  line(375, 1082, 375, 1508); 
}




//rgb(120,31,31)rgb(58,30,30)rgb(137,68,68)rgb(117,86,86)rgb(12,11,11)