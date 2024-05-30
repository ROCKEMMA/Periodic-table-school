const tabla_periodica = [
    {
    
      nombre: "Hidrogeno",
      numero_atomico: 1,
      simbolo: "H",
      punto_de_ebullicion: -252.7,
      punto_de_fusion: -259.2,
      peso_atomico: 1.0079,
      valencia: 1,
      categoria: "no metales"
    },
    {
      nombre: "Helio",
      numero_atomico: 2,
      simbolo: "He",
      punto_de_ebullicion: -268.93,
      punto_de_fusion: -272.2,
      peso_atomico: 4.0026,
      valencia: 0,
      categoria: "gases nobles"
    },
    {
      nombre: "Litio",
      numero_atomico: 3,
      simbolo: "Li",
      punto_de_ebullicion: 1342,
      punto_de_fusion: 180.5,
      peso_atomico: 6.94,
      valencia: 1,
      categoria: "metales alcalinos"
    },
    {
      nombre: "Berilio",
      numero_atomico: 4,
      simbolo: "Be",
      punto_de_ebullicion: 2469,
      punto_de_fusion: 1287,
      peso_atomico: 9.0122,
      valencia: 2,
      categoria: "metales alcalinotérreos"
    },
    {
      nombre: "Boro",
      numero_atomico: 5,
      simbolo: "B",
      punto_de_ebullicion: 4000,
      punto_de_fusion: 2076,
      peso_atomico: 10.81,
      valencia: 3,
      categoria: "metaloides"
    },
    {
      nombre: "Carbono",
      numero_atomico: 6,
      simbolo: "C",
      punto_de_ebullicion: 4027,
      punto_de_fusion: 3550,
      peso_atomico: 12.01,
      valencia: 4,
      categoria: "no metales"
    },
    {
      nombre: "Nitrógeno",
      numero_atomico: 7,
      simbolo: "N",
      punto_de_ebullicion: -195.79,
      punto_de_fusion: -210.0,
      peso_atomico: 14.01,
      valencia: 3,
      categoria: "no metales"
    },
    {
      nombre: "Oxígeno",
      numero_atomico: 8,
      simbolo: "O",
      punto_de_ebullicion: -182.96,
      punto_de_fusion: -218.79,
      peso_atomico: 16.00,
      valencia: 2,
      categoria: "no metales"
    },
    {
      nombre: "Flúor",
      numero_atomico: 9,
      simbolo: "F",
      punto_de_ebullicion: -188.11,
      punto_de_fusion: -219.67,
      peso_atomico: 19.00,
      valencia: 1,
      categoria: "halógenos"
    },
    {
      nombre: "Neón",
      numero_atomico: 10,
      simbolo: "Ne",
      punto_de_ebullicion: -246.08,
      punto_de_fusion: -248.59,
      peso_atomico: 20.18,
      valencia: 0,
      categoria: "gases nobles"
    },
    {
      nombre: "Sodio",
      numero_atomico: 11,
      simbolo: "Na",
      punto_de_ebullicion: 883,
      punto_de_fusion: 97.72,
      peso_atomico: 22.99,
      valencia: 1,
      categoria: "metales alcalinos"
    },
    {
      nombre: "Magnesio",
      numero_atomico: 12,
      simbolo: "Mg",
      punto_de_ebullicion: 1090,
      punto_de_fusion: 650,
      peso_atomico: 24.31,
      valencia: 2,
      categoria: "metales alcalinotérreos"
    },
    {
      nombre: "Aluminio",
      numero_atomico: 13,
      simbolo: "Al",
      punto_de_ebullicion: 2519,
      punto_de_fusion: 660.32,
      peso_atomico: 26.98,
      valencia: 3,
      categoria: "metales"
    },
    {
      nombre: "Silicio",
      numero_atomico: 14,
      simbolo: "Si",
      punto_de_ebullicion: 3265,
      punto_de_fusion: 1414,
      peso_atomico: 28.09,
      valencia: 4,
      categoria: "metaloides"
    },
    {
      nombre: "Fósforo",
      numero_atomico: 15,
      simbolo: "P",
      punto_de_ebullicion: 280.5,
      punto_de_fusion: 44.15,
      peso_atomico: 30.97,
      valencia: 5,
      categoria: "no metales"
    },
    {
      nombre: "Azufre",
      numero_atomico: 16,
      simbolo: "S",
      punto_de_ebullicion: 444.6,
      punto_de_fusion: 115.21,
      peso_atomico: 32.06,
      valencia: 2,
      categoria: "no metales"
    },
    {
      nombre: "Cloro",
      numero_atomico: 17,
      simbolo: "Cl",
      punto_de_ebullicion: -34.04,
      punto_de_fusion: -101.5,
      peso_atomico: 35.45,
      valencia: 1,
      categoria: "halógenos"
    },
    {
      nombre: "Argón",
      numero_atomico: 18,
      simbolo: "Ar",
      punto_de_ebullicion: -185.85,
      punto_de_fusion: -189.34,
      peso_atomico: 39.95,
      valencia: 0,
      categoria: "gases nobles"
    },
    {
      nombre: "Potasio",
      numero_atomico: 19,
      simbolo: "K",
      punto_de_ebullicion: 759,
      punto_de_fusion: 63.5,
      peso_atomico: 39.10,
      valencia: 1,
      categoria: "metales alcalinos"
    },
    {
      nombre: "Calcio",
      numero_atomico: 20,
      simbolo: "Ca",
      punto_de_ebullicion: 1484,
      punto_de_fusion: 842,
      peso_atomico: 40.08,
      valencia: 2,
      categoria: "metales alcalinotérreos"
    },
    {
      nombre: "Escandio",
      numero_atomico: 21,
      simbolo: "Sc",
      punto_de_ebullicion: 2836,
      punto_de_fusion: 1541,
      peso_atomico: 44.96,
      valencia: 3,
      categoria: "metales de transición"
    },
    {
      nombre: "Titanio",
      numero_atomico: 22,
      simbolo: "Ti",
      punto_de_ebullicion: 3287,
      punto_de_fusion: 1668,
      peso_atomico: 47.87,
      valencia: 4,
      categoria: "metales de transición"
    },
    {
      nombre: "Vanadio",
      numero_atomico: 23,
      simbolo: "V",
      punto_de_ebullicion: 3407,
      punto_de_fusion: 1910,
      peso_atomico: 50.94,
      valencia: 5,
      categoria: "metales de transición"
    },
    {
      nombre: "Cromo",
      numero_atomico: 24,
      simbolo: "Cr",
      punto_de_ebullicion: 2671,
      punto_de_fusion: 1907,
      peso_atomico: 51.99,
      valencia: 6,
      categoria: "metales de transición"
    },
    {
      nombre: "Manganeso",
      numero_atomico: 25,
      simbolo: "Mn",
      punto_de_ebullicion: 2061,
      punto_de_fusion: 1246,
      peso_atomico: 54.94,
      valencia: 7,
      categoria: "metales de transición"
    },
    {
      nombre: "Hierro",
      numero_atomico: 26,
      simbolo: "Fe",
      punto_de_ebullicion: 2862,
      punto_de_fusion: 1538,
      peso_atomico: 55.85,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Cobalto",
      numero_atomico: 27,
      simbolo: "Co",
      punto_de_ebullicion: 2927,
      punto_de_fusion: 1495,
      peso_atomico: 58.93,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Níquel",
      numero_atomico: 28,
      simbolo: "Ni",
      punto_de_ebullicion: 2913,
      punto_de_fusion: 1455,
      peso_atomico: 58.69,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Cobre",
      numero_atomico: 29,
      simbolo: "Cu",
      punto_de_ebullicion: 2562,
      punto_de_fusion: 1084.62,
      peso_atomico: 63.55,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Zinc",
      numero_atomico: 30,
      simbolo: "Zn",
      punto_de_ebullicion: 907,
      punto_de_fusion: 419.53,
      peso_atomico: 65.38,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Galio",
      numero_atomico: 31,
      simbolo: "Ga",
      punto_de_ebullicion: 2204,
      punto_de_fusion: 29.76,
      peso_atomico: 69.72,
      valencia: 3,
      categoria: "metales"
    },
    {
      nombre: "Germanio",
      numero_atomico: 32,
      simbolo: "Ge",
      punto_de_ebullicion: 2833,
      punto_de_fusion: 938.25,
      peso_atomico: 72.63,
      valencia: 4,
      categoria: "metaloides"
    },
    {
      nombre: "Arsénico",
      numero_atomico: 33,
      simbolo: "As",
      punto_de_ebullicion: 614,
      punto_de_fusion: 817,
      peso_atomico: 74.92,
      valencia: 3,
      categoria: "metaloides"
    },
    {
      nombre: "Selenio",
      numero_atomico: 34,
      simbolo: "Se",
      punto_de_ebullicion: 685,
      punto_de_fusion: 221,
      peso_atomico: 78.96,
      valencia: 2,
      categoria: "no metales"
    },
    {
      nombre: "Bromo",
      numero_atomico: 35,
      simbolo: "Br",
      punto_de_ebullicion: 59.47,
      punto_de_fusion: -7.2,
      peso_atomico: 79.90,
      valencia: 1,
      categoria: "halógenos"
    },
    {
      nombre: "Kriptón",
      numero_atomico: 36,
      simbolo: "Kr",
      punto_de_ebullicion: -153.22,
      punto_de_fusion: -157.36,
      peso_atomico: 83.80,
      valencia: 0,
      categoria: "gases nobles"
    },
    {
      nombre: "Rubidio",
      numero_atomico: 37,
      simbolo: "Rb",
      punto_de_ebullicion: 688,
      punto_de_fusion: 39.31,
      peso_atomico: 85.47,
      valencia: 1,
      categoria: "metales alcalinos"
    },
    {
      nombre: "Estroncio",
      numero_atomico: 38,
      simbolo: "Sr",
      punto_de_ebullicion: 1382,
      punto_de_fusion: 777,
      peso_atomico: 87.62,
      valencia: 2,
      categoria: "metales alcalinotérreos"
    },
    {
      nombre: "Itrio",
      numero_atomico: 39,
      simbolo: "Y",
      punto_de_ebullicion: 3345,
      punto_de_fusion: 1526,
      peso_atomico: 88.91,
      valencia: 3,
      categoria: "metales de transición"
    },
    {
      nombre: "Circonio",
      numero_atomico: 40,
      simbolo: "Zr",
      punto_de_ebullicion: 4409,
      punto_de_fusion: 1855,
      peso_atomico: 91.22,
      valencia: 4,
      categoria: "metales de transición"
    },
    {
      nombre: "Niobio",
      numero_atomico: 41,
      simbolo: "Nb",
      punto_de_ebullicion: 4744,
      punto_de_fusion: 2477,
      peso_atomico: 92.91,
      valencia: 5,
      categoria: "metales de transición"
    },
    {
      nombre: "Molibdeno",
      numero_atomico: 42,
      simbolo: "Mo",
      punto_de_ebullicion: 4639,
      punto_de_fusion: 2623,
      peso_atomico: 95.95,
      valencia: 6,
      categoria: "metales de transición"
    },
    {
      nombre: "Tecnecio",
      numero_atomico: 43,
      simbolo: "Tc",
      punto_de_ebullicion: 4265,
      punto_de_fusion: 2157,
      peso_atomico: 98,
      valencia: 7,
      categoria: "metales de transición"
    },
    {
      nombre: "Rutenio",
      numero_atomico: 44,
      simbolo: "Ru",
      punto_de_ebullicion: 4150,
      punto_de_fusion: 2334,
      peso_atomico: 101.07,
      valencia: 8,
      categoria: "metales de transición"
    },
    {
      nombre: "Rodio",
      numero_atomico: 45,
      simbolo: "Rh",
      punto_de_ebullicion: 3695,
      punto_de_fusion: 1964,
      peso_atomico: 102.91,
      valencia: 3,
      categoria: "metales de transición"
    },
    {
      nombre: "Paladio",
      numero_atomico: 46,
      simbolo: "Pd",
      punto_de_ebullicion: 2963,
      punto_de_fusion: 1554.9,
      peso_atomico: 106.42,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Plata",
      numero_atomico: 47,
      simbolo: "Ag",
      punto_de_ebullicion: 2162,
      punto_de_fusion: 961.78,
      peso_atomico: 107.87,
      valencia: 1,
      categoria: "metales de transición"
    },
    {
      nombre: "Cadmio",
      numero_atomico: 48,
      simbolo: "Cd",
      punto_de_ebullicion: 767,
      punto_de_fusion: 321.07,
      peso_atomico: 112.41,
      valencia: 2,
      categoria: "metales de transición"
    },
    {
      nombre: "Indio",
      numero_atomico: 49,
      simbolo: "In",
      punto_de_ebullicion: 2072,
      punto_de_fusion: 156.60,
      peso_atomico: 114.82,
      valencia: 3,
      categoria: "metales"
    },
    {
      nombre: "Estaño",
      numero_atomico: 50,
      simbolo: "Sn",
      punto_de_ebullicion: 2602,
      punto_de_fusion: 231.93,
      peso_atomico: 118.71,
      valencia: 4,
      categoria: "metales"
    },
    {
      nombre: "Antimonio",
      numero_atomico: 51,
      simbolo: "Sb",
      punto_de_ebullicion: 1587,
      punto_de_fusion: 630.63,
      peso_atomico: 121.76,
      valencia: 3,
      categoria: "metaloides"
    },
    {
      nombre: "Telurio",
      numero_atomico: 52,
      simbolo: "Te",
      punto_de_ebullicion: 988,
      punto_de_fusion: 449.51,
      peso_atomico: 127.60,
      valencia: 2,
      categoria: "metaloides"
    },
    {
      nombre: "Yodo",
      numero_atomico: 53,
      simbolo: "I",
      punto_de_ebullicion: 184.3,
      punto_de_fusion: 113.7,
      peso_atomico: 126.90,
      valencia: 1,
      categoria: "halógenos"
    },
    {
      nombre: "Xenón",
      numero_atomico: 54,
      simbolo: "Xe",
      punto_de_ebullicion: -108.0,
      punto_de_fusion: -111.8,
      peso_atomico: 131.29,
      valencia: 0,
      categoria: "gases nobles"
    },
    {
      nombre: "Cesio",
      numero_atomico: 55,
      simbolo: "Cs",
      punto_de_ebullicion: 671,
      punto_de_fusion: 28.44,
      peso_atomico: 132.91,
      valencia: 1,
      categoria: "metales alcalinos"
    },
    {
      nombre: "Bario",
      numero_atomico: 56,
      simbolo: "Ba",
      punto_de_ebullicion: 1845,
      punto_de_fusion: 727,
      peso_atomico: 137.33,
      valencia: 2,
      categoria: "metales alcalinotérreos"
    },
    {
      nombre: "Lantano",
      numero_atomico: 57,
      simbolo: "La",
      punto_de_ebullicion: 3464,
      punto_de_fusion: 920,
      peso_atomico: 138.91,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Cerio",
      numero_atomico: 58,
      simbolo: "Ce",
      punto_de_ebullicion: 3360,
      punto_de_fusion: 795,
      peso_atomico: 140.12,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Praseodimio",
      numero_atomico: 59,
      simbolo: "Pr",
      punto_de_ebullicion: 3290,
      punto_de_fusion: 931,
      peso_atomico: 140.91,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Neodimio",
      numero_atomico: 60,
      simbolo: "Nd",
      punto_de_ebullicion: 3100,
      punto_de_fusion: 1024,
      peso_atomico: 144.24,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Prometio",
      numero_atomico: 61,
      simbolo: "Pm",
      punto_de_ebullicion: 3000,
      punto_de_fusion: 1100,
      peso_atomico: 145,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Samario",
      numero_atomico: 62,
      simbolo: "Sm",
      punto_de_ebullicion: 1794,
      punto_de_fusion: 1072,
      peso_atomico: 150.36,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Europio",
      numero_atomico: 63,
      simbolo: "Eu",
      punto_de_ebullicion: 1527,
      punto_de_fusion: 822,
      peso_atomico: 151.96,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Gadolinio",
      numero_atomico: 64,
      simbolo: "Gd",
      punto_de_ebullicion: 3273,
      punto_de_fusion: 1313,
      peso_atomico: 157.25,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Terbio",
      numero_atomico: 65,
      simbolo: "Tb",
      punto_de_ebullicion: 3230,
      punto_de_fusion: 1356,
      peso_atomico: 158.93,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Disprosio",
      numero_atomico: 66,
      simbolo: "Dy",
      punto_de_ebullicion: 2562,
      punto_de_fusion: 1412,
      peso_atomico: 162.50,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Holmio",
      numero_atomico: 67,
      simbolo: "Ho",
      punto_de_ebullicion: 2968,
      punto_de_fusion: 1474,
      peso_atomico: 164.93,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Erbio",
      numero_atomico: 68,
      simbolo: "Er",
      punto_de_ebullicion: 2868,
      punto_de_fusion: 1529,
      peso_atomico: 167.26,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Tulio",
      numero_atomico: 69,
      simbolo: "Tm",
      punto_de_ebullicion: 1950,
      punto_de_fusion: 1545,
      peso_atomico: 168.93,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Iterbio",
      numero_atomico: 70,
      simbolo: "Yb",
      punto_de_ebullicion: 1196,
      punto_de_fusion: 824,
      peso_atomico: 173.05,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Lutecio",
      numero_atomico: 71,
      simbolo: "Lu",
      punto_de_ebullicion: 3402,
      punto_de_fusion: 1652,
      peso_atomico: 174.97,
      valencia: 3,
      categoria: "lantánidos"
    },
    {
      nombre: "Hafnio",
      numero_atomico: 72,
      simbolo: "Hf",
      punto_de_ebullicion: 4602,
      punto_de_fusion: 2233,
      peso_atomico: 178.49,
      valencia: 4,
      categoria: "metales de transición"
    },
    {
      nombre: "Tantalio",
      numero_atomico: 73,
      simbolo: "Ta",
      punto_de_ebullicion: 5458,
      punto_de_fusion: 3017,
      peso_atomico: 180.95,
      valencia: 5,
      categoria: "metales de transición"
    },
    {
      nombre: "Wolframio",
      numero_atomico: 74,
      simbolo: "W",
      punto_de_ebullicion: 5555,
      punto_de_fusion: 3422,
      peso_atomico: 183.84,
      valencia: 6,
      categoria: "metales de transición"
    },
    {
      nombre: "Renio",
      numero_atomico: 75,
      simbolo: "Re",
      punto_de_ebullicion: 5596,
      punto_de_fusion: 3186,
      peso_atomico: 186.21,
      valencia: 7,
      categoria: "metales de transición"
    },
    {
      nombre: "Osmio",
      numero_atomico: 76,
      simbolo: "Os",
      punto_de_ebullicion: 5285,
      punto_de_fusion: 3033,
      peso_atomico: 190.23,
      valencia: 8,
      categoria: "metales de transición"
    },
    {
      nombre: "Iridio",
      numero_atomico: 77,
      simbolo: "Ir",
      punto_de_ebullicion: 4701,
      punto_de_fusion: 2446,
      peso_atomico: 192.22,
      valencia: 9,
      categoria: "metales de transición"
    },
    {
      nombre: "Platino",
      numero_atomico: 78,
      simbolo: "Pt",
      punto_de_ebullicion: 3825,
      punto_de_fusion: 1768,
      peso_atomico: 195.08,
      valencia: 4,
      categoria: "metales de transición"
    },
    {
      nombre: "Oro",
      numero_atomico: 79,
      simbolo: "Au",
      punto_de_ebullicion: 3129,
      punto_de_fusion: 1064.18,
      peso_atomico: 196.97,
      valencia: 3,
      categoria: "metales de transición"
    },
    {
      nombre: "Mercurio",
      numero_atomico: 80,
      simbolo: "Hg",
      punto_de_ebullicion: 629.88,
      punto_de_fusion: -38.83,
      peso_atomico: 200.59,
      valencia: 1,
      categoria: "metales de transición"
    },
    {
      nombre: "Talio",
      numero_atomico: 81,
      simbolo: "Tl",
      punto_de_ebullicion: 1746,
      punto_de_fusion: 304,
      peso_atomico: 204.38,
      valencia: 3,
      categoria: "metales"
    },
    {
      nombre: "Plomo",
      numero_atomico: 82,
      simbolo: "Pb",
      punto_de_ebullicion: 2022,
      punto_de_fusion: 327.5,
      peso_atomico: 207.2,
      valencia: 2,
      categoria: "metales"
    },
    {
      nombre: "Bismuto",
      numero_atomico: 83,
      simbolo: "Bi",
      punto_de_ebullicion: 1837,
      punto_de_fusion: 271.3,
      peso_atomico: 208.98,
      valencia: 3,
      categoria: "metales"
    },
    {
      nombre: "Polonio",
      numero_atomico: 84,
      simbolo: "Po",
      punto_de_ebullicion: 962,
      punto_de_fusion: 254,
      peso_atomico: 209,
      valencia: -2,
      categoria: "metaloides"
    },
    {
      nombre: "Astato",
      numero_atomico: 85,
      simbolo: "At",
      punto_de_ebullicion: 610,
      punto_de_fusion: 302,
      peso_atomico: 210,
      valencia: -1,
      categoria: "halógenos"
    },
    {
      nombre: "Radón",
      numero_atomico: 86,
      simbolo: "Rn",
      punto_de_ebullicion: -61.7,
      punto_de_fusion: -71,
      peso_atomico: 222,
      valencia: 0,
      categoria: "gases nobles"
    },
    {
      nombre: "Francio",
      numero_atomico: 87,
      simbolo: "Fr",
      punto_de_ebullicion: 677,
      punto_de_fusion: 27,
      peso_atomico: 223,
      valencia: 1,
      categoria: "metales alcalinos"
    },
    {
      nombre: "Radio",
      numero_atomico: 88,
      simbolo: "Ra",
      punto_de_ebullicion: 1140,
      punto_de_fusion: 700,
      peso_atomico: 226,
      valencia: 2,
      categoria: "metales alcalinotérreos"
    },
    {
      nombre: "Actinio",
      numero_atomico: 89,
      simbolo: "Ac",
      punto_de_ebullicion: 3500,
      punto_de_fusion: 1050,
      peso_atomico: 227,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Torio",
      numero_atomico: 90,
      simbolo: "Th",
      punto_de_ebullicion: 5061,
      punto_de_fusion: 1750,
      peso_atomico: 232.04,
      valencia: 4,
      categoria: "actínidos"
    },
    {
      nombre: "Protactinio",
      numero_atomico: 91,
      simbolo: "Pa",
      punto_de_ebullicion: 4300,
      punto_de_fusion: 1570,
      peso_atomico: 231.04,
      valencia: 5,
      categoria: "actínidos"
    },
    {
      nombre: "Uranio",
      numero_atomico: 92,
      simbolo: "U",
      punto_de_ebullicion: 4404,
      punto_de_fusion: 1132.2,
      peso_atomico: 238.03,
      valencia: 6,
      categoria: "actínidos"
    },
    {
      nombre: "Neptunio",
      numero_atomico: 93,
      simbolo: "Np",
      punto_de_ebullicion: 4175,
      punto_de_fusion: 644,
      peso_atomico: 237,
      valencia: 5,
      categoria: "actínidos"
    },
    {
      nombre: "Plutonio",
      numero_atomico: 94,
      simbolo: "Pu",
      punto_de_ebullicion: 3505,
      punto_de_fusion: 641.3,
      peso_atomico: 244,
      valencia: 6,
      categoria: "actínidos"
    },
    {
      nombre: "Americio",
      numero_atomico: 95,
      simbolo: "Am",
      punto_de_ebullicion: 2607,
      punto_de_fusion: 1176,
      peso_atomico: 243,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Curio",
      numero_atomico: 96,
      simbolo: "Cm",
      punto_de_ebullicion: 3383,
      punto_de_fusion: 1340,
      peso_atomico: 247,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Berkelio",
      numero_atomico: 97,
      simbolo: "Bk",
      punto_de_ebullicion: 983,
      punto_de_fusion: 986,
      peso_atomico: 247,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Californio",
      numero_atomico: 98,
      simbolo: "Cf",
      punto_de_ebullicion: 1173,
      punto_de_fusion: 900,
      peso_atomico: 251,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Einstenio",
      numero_atomico: 99,
      simbolo: "Es",
      punto_de_ebullicion: 1130,
      punto_de_fusion: 860,
      peso_atomico: 252,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Fermio",
      numero_atomico: 100,
      simbolo: "Fm",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 257,
      valencia: null,
      categoria: "actínidos"
    },
    {
      nombre: "Mendelevio",
      numero_atomico: 101,
      simbolo: "Md",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 258,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Nobelio",
      numero_atomico: 102,
      simbolo: "No",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 259,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Lawrencio",
      numero_atomico: 103,
      simbolo: "Lr",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 266,
      valencia: 3,
      categoria: "actínidos"
    },
    {
      nombre: "Rutherfordio",
      numero_atomico: 104,
      simbolo: "Rf",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 267,
      valencia: 4,
      categoria: "metales de transición"
    },
    {
      nombre: "Dubnio",
      numero_atomico: 105,
      simbolo: "Db",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 268,
      valencia: 5,
      categoria: "metales de transición"
    },
    {
      nombre: "Seaborgio",
      numero_atomico: 106,
      simbolo: "Sg",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 269,
      valencia: 6,
      categoria: "metales de transición"
    },
    {
      nombre: "Bohrio",
      numero_atomico: 107,
      simbolo: "Bh",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 270,
      valencia: 7,
      categoria: "metales de transición"
    },
    {
      nombre: "Hassio",
      numero_atomico: 108,
      simbolo: "Hs",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 269,
      valencia: 8,
      categoria: "metales de transición"
    },
    {
      nombre: "Meitnerio",
      numero_atomico: 109,
      simbolo: "Mt",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 278,
      valencia: 9,
      categoria: "metales de transición"
    },
    {
      nombre: "Darmstadtio",
      numero_atomico: 110,
      simbolo: "Ds",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 281,
      valencia: 10,
      categoria: "metales de transición"
    },
    {
      nombre: "Roentgenio",
      numero_atomico: 111,
      simbolo: "Rg",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 282,
      valencia: 11,
      categoria: "metales de transición"
    },
    {
      nombre: "Copernicio",
      numero_atomico: 112,
      simbolo: "Cn",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 285,
      valencia: 12,
      categoria: "metales de transición"
    },
    {
      nombre: "Nihonio",
      numero_atomico: 113,
      simbolo: "Nh",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 286,
      valencia: 13,
      categoria: "metales"
    },
    {
      nombre: "Flerovio",
      numero_atomico: 114,
      simbolo: "Fl",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 289,
      valencia: 14,
      categoria: "metales"
    },
    {
      nombre: "Moscovio",
      numero_atomico: 115,
      simbolo: "Mc",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 290,
      valencia: 15,
      categoria: "metales"
    },
    {
      nombre: "Livermorio",
      numero_atomico: 116,
      simbolo: "Lv",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 293,
      valencia: 16,
      categoria: "metales"
    },
    {
      nombre: "Tenesino",
      numero_atomico: 117,
      simbolo: "Ts",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 294,
      valencia: 17,
      categoria: "halógenos"
    },
    {
      nombre: "Oganesón",
      numero_atomico: 118,
      simbolo: "Og",
      punto_de_ebullicion: null,
      punto_de_fusion: null,
      peso_atomico: 294,
      valencia: 18,
      categoria: "gases nobles"
    }
];

export { tabla_periodica }