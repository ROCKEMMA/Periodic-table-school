const tabla_periodica = [
    {
        nombre:'Hidrógeno',
        electrones: 1,
        serie:'no metales',
        simbolo:'H',
        masa: '1,00797',
        descubridor:'Boyle en 1671'
    },
    {
        nombre:'Helio',
        electrones: 2,
        serie:'gases nobles',
        simbolo:'He',
        masa: '4,0026',
        descubridor:'Sir Ramsey en 1895'
    },
    {
        nombre:'Litio',
        electrones: 3,
        serie:'metales alcalinos',
        simbolo:'Li',
        masa: '6,941',
        descubridor:'George Urbain en 1907'
    },
    {
        nombre:'Berilio',
        electrones: 4,
        serie:'metales alcalinoterreos',
        simbolo:'Be',
        masa: '9,0122',
        descubridor:'Fredrich Wohler en 1798'
    },
    {
        nombre:'Boro',
        electrones: 5,
        serie:'metaloides',
        simbolo:'B',
        masa: '10,811',
        descubridor:'Sir Humphry Davy y J.L Gay-Lussac en 1808'
    },
    {
        nombre:'Carbono',
        electrones: 6,
        serie:'no metales',
        simbolo:'C',
        masa: '12,0107 u',
        descubridor:'Los antiguos'
    },
    {
        nombre:'Nitrogeno',
        electrones: 7,
        serie:'no metales',
        simbolo:'N',
        masa: '12,0107 u',
        descubridor:'1772 Daniel Rutherford'
    },
    {
        nombre:'Oxigeno',
        electrones: 8,
        serie:'no metales',
        simbolo:'0',
        masa: '12,0107 u',
        descubridor:'1773 Carl Wilhelm Scheele'
    },
    {
        nombre:'Fluor',
        electrones: 9,
        serie:'halogenos',
        simbolo:'F',
        masa: '12,0107 u',
        descubridor:'1780 Carlos Sabéele'
    },
    {
        nombre:'Neon',
        electrones: 10,
        serie:'gases nobles',
        simbolo:'Ne',
        masa: '12,0107 u',
        descubridor:'1898 William Ramsay y Morris Travers en Londres'
    },
    {
        nombre:'Sodio',
        electrones: 11,
        serie:'metales alcalinos',
        simbolo:'Na',
        masa: '22.98976928 u',
        descubridor:'Conocido desde la epoca medieval'
    },
    {
        nombre:'Magnesio',
        electrones: 12,
        serie:'metales alcalinoterreos',
        simbolo:'Mg',
        masa: '24,312 u',
        descubridor:'1755 Joseph Black'
    },
    {
        nombre:'Aluminio',
        electrones: 13,
        serie:'metales del bloque p',
        simbolo:'Al',
        masa: '26,9815386(8) u',
        descubridor:'1825 H. C. Orsted.'
    },
    {
        nombre:'Silicio',
        electrones: 14,
        serie:'metaloides',
        simbolo:'Si',
        masa: '28,085 u',
        descubridor:'--'
    },
    {
        nombre:'Fosforo',
        electrones: 15,
        serie:'no metales',
        simbolo:'P',
        masa: '30,9737620 u',
        descubridor:'1669 Hennig Brand'
    },
    {
        nombre:'Azufre',
        electrones: 16,
        serie:'no metales',
        simbolo:'S',
        masa: '32,065(5) u',
        descubridor:'Conocido desde la antiguedad'
    },
    {
        nombre:'Cloro',
        electrones: 17,
        serie:'halogenos',
        simbolo:'Cl',
        masa: '12,0107 u',
        descubridor:'Los antiguos'
    },
    {
        nombre:'Argon',
        electrones: 18,
        serie:'gases nobles',
        simbolo:'Ar',
        masa: '39,948 u',
        descubridor:'1892 Rayleigh y Sir William Ramsay'
    },
    {
        nombre:'Potasio',
        electrones: 19,
        serie:'metales alcalinos',
        simbolo:'K',
        masa: '39,0983 u',
        descubridor:'1807 Humphry Davy'
    },
    {
        nombre:'Calcio',
        electrones: 20,
        serie:'metales alcalinoterreos',
        simbolo:'Ca',
        masa: '40,078 u',
        descubridor:'1808 Humphry Davy'
    },
    {
        nombre:'Escandio',
        electrones: 21,
        serie:'metales de transicion',
        simbolo:'Sc',
        masa: '44,955910 u',
        descubridor:'1879 Escandinavia'
    },
    {
        nombre:'Titanio',
        electrones: 22,
        serie:'metales de transicion',
        simbolo:'Ti',
        masa: '47,867(1) u',
        descubridor:'1791 William Gregor en una mina de Cornualles, Gran Bretaña, y en 1795 por Martin Heinrich Klaproth'
    },
    {
        nombre:'Vanadio',
        electrones: 23,
        serie:'metales de transicion',
        simbolo:'V',
        masa: '50,9415 u',
        descubridor:'1801  Andrés Manuel del Río -  redescubierto en 1831 por el químico sueco Nils Gabriel Sefstrom'
    },
    {
        nombre:'Cromo',
        electrones: 24,
        serie:'metales de transicion',
        simbolo:'Cr',
        masa: '51,9961 u',
        descubridor:'1766 Johann Gottlob Lehmann'
    },
    {
        nombre:'Manganeso',
        electrones: 25,
        serie:'metales de transicion',
        simbolo:'Mn',
        masa: '54,938049 u',
        descubridor:'Desde la antiguedad'
    },
    {
        nombre:'Hierro',
        electrones: 26,
        serie:'metales de transicion',
        simbolo:'Fe',
        masa: '55,847 u',
        descubridor:'Desde la antiguedad 4000 a.C'
    },
    {
        nombre:'Cobalto',
        electrones: 27,
        serie:'metales de transicion',
        simbolo:'Co',
        masa: '58,933200 u',
        descubridor:'Usado desde la antiguedad, 1730/1737  George Brandt '
    },
    {
        nombre:'Niquel',
        electrones: 28,
        serie:'metales de transicion',
        simbolo:'Ni',
        masa: '58,6934 u',
        descubridor:'Usado desde la antiguedad siglo IV a.C'
    },
    {
        nombre:'Cobre',
        electrones: 29,
        serie:'metales de transicion',
        simbolo:'Cu',
        masa: '63,546 u',
        descubridor:'Usado desde la antiguedad 7000 a.C'
    },
    {
        nombre:'Zinc',
        electrones: 30,
        serie:'metales de transicion',
        simbolo:'Zn',
        masa: '65,38 u',
        descubridor:'Desde la antiguedad 1500-1000 a.C'
    },
    {
        nombre:'Galio',
        electrones: 31,
        serie:'metales del bloque p',
        simbolo:'Ga',
        masa: '69,723 u',
        descubridor:'1875 Lecoq de Boisbaudran'
    },
    {
        nombre:'Germanio',
        electrones: 32,
        serie:'metaloides',
        simbolo:'Ge',
        masa: '72,64 u',
        descubridor:'1886 Clemens Winkler'
    },
    {
        nombre:'Arsenico',
        electrones: 33,
        serie:'metaloides',
        simbolo:'As',
        masa: '74,92160 u',
        descubridor:'Desde la antiguedad'
    },
    {
        nombre:'Selenio',
        electrones: 34,
        serie:'no metales',
        simbolo:'Se',
        masa: '78,96 u',
        descubridor:'1817 Jöns Jacob Berzelius'
    },
    {
        nombre:'Bromo',
        electrones: 35,
        serie:'halogenos',
        simbolo:'Br',
        masa: '79,909 u',
        descubridor:'1826 Antoine-Jérôme Balard'
    },
    {
        nombre:'Krypton',
        electrones: 36,
        serie:'gases nobles',
        simbolo:'Kr',
        masa: '83,80 u',
        descubridor:'1898 por Sir William Ramsay y Morris W. Travers'
    },
    {
        nombre:'Rubidio',
        electrones: 37,
        serie:'metales alcalinos',
        simbolo:'Rb',
        masa: '85,4678 u',
        descubridor:' 1861 por Robert Bunsen y Gustav Kirchhoff '
    },
    {
        nombre:'Estroncio',
        electrones: 38,
        serie:'metales alcalinoterreos',
        simbolo:'Sr',
        masa: '87,62 u',
        descubridor:'1790 por Adair Crawford'
    },
    {
        nombre:'Itrio',
        electrones: 39,
        serie:'metales de transicion',
        simbolo:'Y',
        masa: '88,90585 u',
        descubridor:'1794 Johan Gadolin'
    },
    {
        nombre:'Zirconio',
        electrones: 40,
        serie:'metales de transicion',
        simbolo:'Zr',
        masa: '91,224 u',
        descubridor:'1789 Martin Heinrich Klaproth'
    },
    {
        nombre:'Niobio',
        electrones: 41,
        serie:'metales de transicion',
        simbolo:'Nb',
        masa: '92,90638 u',
        descubridor:'1949 Charles Hatchett '
    },
    {
        nombre:'Molibdeno',
        electrones: 42,
        serie:'metales de transicion',
        simbolo:'Mo',
        masa: '95,94 u',
        descubridor:'1778 Carl Wilhelm Scheele'
    },
    {
        nombre:'Tecnecio',
        electrones: 43,
        serie:'metales de transicion',
        simbolo:'Tc',
        masa: '98,90631 u',
        descubridor:'1952'
    },
    {
        nombre:'Rutenio',
        electrones: 44,
        serie:'metales de transicion',
        simbolo:'Ru',
        masa: '101,07 u',
        descubridor:'1844 Karl Ernst Claus'
    },
    {
        nombre:'Rodio',
        electrones: 45,
        serie:'metales de transicion',
        simbolo:'Rh',
        masa: '102,90550 u',
        descubridor:'Sin info'
    },
    {
        nombre:'Paladio',
        electrones: 46,
        serie:'metales de transicion',
        simbolo:'Pd',
        masa: '106,42 u',
        descubridor:'Conocido desde la  antiguedad'
    },
    {
        nombre:'Plata',
        electrones: 47,
        serie:'metales de transicion',
        simbolo:'Ag',
        masa: '107,8683 u',
        descubridor:'Conocido desde la  antiguedad'
    },
    {
        nombre:'Cadmio',
        electrones: 48,
        serie:'metales de transicion',
        simbolo:'Cd',
        masa: '112,411 u',
        descubridor:'1817 Friedrich Strohmeyer.'
    },
    {
        nombre:'Indio',
        electrones: 49,
        serie:'metales del bloque p',
        simbolo:'Ag',
        masa: '114,818 u',
        descubridor:'1863 Ferdinand Reich y Theodor Richter'
    },
    {
        nombre:'Estanio',
        electrones: 50,
        serie:'metales del bloque p',
        simbolo:'Sn',
        masa: '118,710 u',
        descubridor:'Conocido desde la  antiguedad 2000 a.C'
    },
    {
        nombre:'Antimonio',
        electrones: 51,
        serie:'metaloides',
        simbolo:'Sb',
        masa: '121,760 u',
        descubridor:'Conocido desde la  antiguedad 6000 a.C'
    },
    {
        nombre:'Telurio',
        electrones: 52,
        serie:'metaloides',
        simbolo:'Te',
        masa: '127,6 u',
        descubridor:'1798 Martin Heinrich Klaproth'
    },
    {
        nombre:'Iodo',
        electrones: 53,
        serie:'halogenos',
        simbolo:'I',
        masa: '126,90447 u',
        descubridor:'1811 Bernard Courtois'
    },
    {
        nombre:'Xenon',
        electrones: 54,
        serie:'gases nobles',
        simbolo:'Xe',
        masa: '131,293 u',
        descubridor:'1989 William Ramsay y Morris Travers'
    },
    {
        nombre:'Cesio',
        electrones: 55,
        serie:'metales alcalinos',
        simbolo:'Cs',
        masa: '132,90545 u',
        descubridor:' 1860 Robert Bunsen y por Gustav Kirchhoff'
    },
    {
        nombre:'Bario',
        electrones: 56,
        serie:'metales alcalinoterreos',
        simbolo:'Ba',
        masa: '137,327 u',
        descubridor:'Edad media'
    },
    {
        nombre:'Lantano',
        electrones: 57,
        serie:'metales de transicion',
        simbolo:'La',
        masa: '138,9055 u',
        descubridor:'1839 Carl Gustaf Mosander'
    },
    {
        nombre:'Cerio',
        electrones: 58,
        serie:'lantanidos',
        simbolo:'Ce',
        masa: '140,116 u',
        descubridor:'1803 por Martin Heinrich Klaproth y Jons Jacob Berzelius'
    },
    {
        nombre:'Praseodimio',
        electrones: 59,
        serie:'lantanidos',
        simbolo:'Pr',
        masa: '140,90765 u',
        descubridor:'Entre 1841 y 1874 varias quimicos'
    },
    {
        nombre:'Neodimio',
        electrones: 60,
        serie:'lantanidos',
        simbolo:'Nd',
        masa: '144,24 u',
        descubridor:'1885  Carl Auer von Welsbach,'
    },
    {
        nombre:'Prometio',
        electrones: 61,
        serie:'lantanidos',
        simbolo:'Pm',
        masa: '145 u',
        descubridor:'1944  Jacob A. Marinsky, Lawrence E. Glendenin y Charles D. Coryell '
    },
    {
        nombre:'Samario',
        electrones: 62,
        serie:'lantanidos',
        simbolo:'Sm',
        masa: '150,35 u',
        descubridor:'1853 por el químico suizo Jean Charles Galissard de Marignac y aislado en 1879 por el químico francés Paul Emile Lecoq de Boisbaudran'
    },
    {
        nombre:'Europio',
        electrones: 63,
        serie:'lantanidos',
        simbolo:'Eu',
        masa: '151,964 u',
        descubridor:' 1890 por Paul Emile Lecoq de Boisbaudran y aislado por primera vez por Eugène Demarcay'
    },
    {
        nombre:'Gadolinio',
        electrones: 64,
        serie:'lantanidos',
        simbolo:'Gd',
        masa: '157,25 u',
        descubridor:'1880 Jean Charles Galissard de Marignac'
    },
    {
        nombre:'Terbio',
        electrones: 65,
        serie:'lantanidos',
        simbolo:'Tb',
        masa: '158,92534 u',
        descubridor:'1843 Carl Gustaf Mosander,'
    },
    {
        nombre:'Disprosio',
        electrones: 66,
        serie:'lantanidos',
        simbolo:'Dy',
        masa: '158,924 u',
        descubridor:'1886 Paul Émile Lecoq de Boisbaudran'
    },
    {
        nombre:'Holmio',
        electrones: 67,
        serie:'lantanidos',
        simbolo:'Ho',
        masa: '164,9304 u',
        descubridor:'1878 Marc Delafontaine y Jacques-Louis Soret'
    },
    {
        nombre:'Erbio',
        electrones: 68,
        serie:'lantanidos',
        simbolo:'Er',
        masa: '167,259 u',
        descubridor:'19843 Carl Gustaf Mosander'
    },
    {
        nombre:'Tulio',
        electrones: 69,
        serie:'lantanidos',
        simbolo:'Tm',
        masa: '12,0107 u',
        descubridor:'1879 Per Teodor Cleve'
    },
    {
        nombre:'Iterbio',
        electrones: 70,
        serie:'lantanidos',
        simbolo:'Yb',
        masa: '12,0107 u',
        descubridor:'1878 Jean Charles Galissard de Marignac'
    },
    {
        nombre:'Lutecio',
        electrones: 71,
        serie:'lantanidos',
        simbolo:'Lu',
        masa: '12,0107 u',
        descubridor:' 1907 Georges Urbain y Carol Auer von Welsbach.'
    },
    {
        nombre:'Hafnio',
        electrones: 72,
        serie:'metales de transicion',
        simbolo:'Hf',
        masa: '12,0107 u',
        descubridor:'1923 Dirk Coster y George Hevesy'
    },
    {
        nombre:'Tantalio',
        electrones: 73,
        serie:'metales de transicion',
        simbolo:'Ta',
        masa: '12,0107 u',
        descubridor:'1802 Anders Gustaf Ekeberg '
    },
    {
        nombre:'Wolframio',
        electrones: 74,
        serie:'metales de transicion',
        simbolo:'W',
        masa: '12,0107 u',
        descubridor:'1779 Peter Woulfe'
    },
    {
        nombre:'Renio',
        electrones: 75,
        serie:'metales de transicion',
        simbolo:'Re',
        masa: '12,0107 u',
        descubridor:'1925 Ida Eva Tacke, Walter Karl Friedich Noddack y Otto Carl Berg'
    },
    {
        nombre:'Osmio',
        electrones: 76,
        serie:'metales de transicion',
        simbolo:'Os',
        masa: '12,0107 u',
        descubridor:'1803 Smithson Tennant,'
    },
    {
        nombre:'Iridio',
        electrones: 77,
        serie:'metales de transicion',
        simbolo:'Ir',
        masa: '12,0107 u',
        descubridor:'1803 Smithson Tennant,'
    },
    {
        nombre:'Platino',
        electrones: 78,
        serie:'metales de transicion',
        simbolo:'Pt',
        masa: '12,0107 u',
        descubridor:'Conocido desde la antiguedad'
    },
    {
        nombre:'Oro',
        electrones: 79,
        serie:'metales de transicion',
        simbolo:'Au',
        masa: '12,0107 u',
        descubridor:'Conocido desde la antiguedad'
    },
    {
        nombre:'Mercurio',
        electrones: 80,
        serie:'metales de transicion',
        simbolo:'Hg',
        masa: '12,0107 u',
        descubridor:'Conocido desde la antiguedad'
    },
    {
        nombre:'Talio',
        electrones: 81,
        serie:'metales del bloque p',
        simbolo:'Tl',
        masa: '12,0107 u',
        descubridor:'1861'
    },
    {
        nombre:'Plomo',
        electrones: 82,
        serie:'metales del bloque p',
        simbolo:'Pb',
        masa: '12,0107 u',
        descubridor:'Conocido desde la antiguedad'
    },
    {
        nombre:'Bismuto',
        electrones: 83,
        serie:'metales del bloque p',
        simbolo:'Bi',
        masa: '12,0107 u',
        descubridor:'Conocido desde la antiguedad'
    },
    {
        nombre:'Polonio',
        electrones: 84,
        serie:'metaloides',
        simbolo:'Po',
        masa: '12,0107 u',
        descubridor:'1898 Marie Curie-Skłodowska y Pierre Curie'
    },
    {
        nombre:'Astato',
        electrones: 85,
        serie:'halogenos',
        simbolo:'At',
        masa: '12,0107 u',
        descubridor:'1940 Dale R. Corson, K. R. MacKenzie y Emilio Segrè en la Universidad de Berkeley (California)'
    },
    {
        nombre:'Radon',
        electrones: 86,
        serie:'gases nobles',
        simbolo:'Rn',
        masa: '12,0107 u',
        descubridor:'1900 Friedrich Ernst Dorn'
    },
    {
        nombre:'Francio',
        electrones: 87,
        serie:'metales alcalinos',
        simbolo:'Fr',
        masa: '12,0107 u',
        descubridor:'1939 Marguerite Perey'
    },
    {
        nombre:'Radio',
        electrones: 88,
        serie:'metales alcalinoterreos',
        simbolo:'Ra',
        masa: '12,0107 u',
        descubridor:'1898 Marie Skłodowska-Curie y su marido Pierre Curie'
    },
    {
        nombre:'Actinio',
        electrones: 89,
        serie:'actinidos',
        simbolo:'Ac',
        masa: '12,0107 u',
        descubridor:'1899 André-Louis Debierne '
    },
    {
        nombre:'Torio',
        electrones: 90,
        serie:'actinidos',
        simbolo:'Th',
        masa: '12,0107 u',
        descubridor:'Jöns Jakob Berzelius lo aisló por primera vez en 1828'
    },
    {
        nombre:'Protactinio',
        electrones: 91,
        serie:'actinidos',
        simbolo:'Pa',
        masa: '12,0107 u',
        descubridor:'1913 Kasimir Fajans y O.H. Göhring'
    },
    {
        nombre:'Uranio',
        electrones: 92,
        serie:'actinidos',
        simbolo:'Pa',
        masa: '12,0107 u',
        descubridor:'1789 por M. H. Klaproth'
    },
    {
        nombre:'Neptunio',
        electrones: 93,
        serie:'actinidos',
        simbolo:'Np',
        masa: '12,0107 u',
        descubridor:'1940 por Edwin Mattison McMillan y Philip Hauge Abelson '
    },
    {
        nombre:'Plutonio',
        electrones: 94,
        serie:'actinidos',
        simbolo:'Pu',
        masa: '12,0107 u',
        descubridor:'1940 por un equipo dirigido por Glenn T. Seaborg y Edwin McMillan en el laboratorio de la Universidad de California, Berkeley'
    },
    {
        nombre:'Americio',
        electrones: 95,
        serie:'actinidos',
        simbolo:'Am',
        masa: '12,0107 u',
        descubridor:'1944 Glenn T. Seaborg, Leon O. Morgan, Ralph A. James, y Albert Ghiorso '
    },
    {
        nombre:'Curio',
        electrones: 96,
        serie:'actinidos',
        simbolo:'Cm',
        masa: '12,0107 u',
        descubridor:'El curio fue sintetizado por primera vez en la Universidad de California, Berkeley, también por Glenn T. Seaborg, Ralph A. James y Albert Ghiorso en 1944'
    },
    {
        nombre:'Berkelio',
        electrones: 97,
        serie:'actinidos',
        simbolo:'Bk',
        masa: '12,0107 u',
        descubridor:'1949 S. G. Thompson, A. Ghiorso y G. T. Seaborg en la Universidad de California en Berkeley.'
    },
    {
        nombre:'Californio',
        electrones: 98,
        serie:'actinidos',
        simbolo:'Cf',
        masa: '12,0107 u',
        descubridor:'1950  Stanley G. Thompson, Kenneth Street, Jr., Albert Ghiorso y Glenn T. Seaborg '
    },
    {
        nombre:'Einstenio',
        electrones: 99,
        serie:'actinidos',
        simbolo:'Es',
        masa: '12,0107 u',
        descubridor:'1952'
    },
    {
        nombre:'Fermio',
        electrones: 100,
        serie:'actinidos',
        simbolo:'Fm',
        masa: '12,0107 u',
        descubridor:'1952  Albert Ghiorso y sus colegas'
    },
    {
        nombre:'Mendelevio',
        electrones: 101,
        serie:'actinidos',
        simbolo:'Md',
        masa: '12,0107 u',
        descubridor:'1955 Albert Ghiorso, Bernard G. Harvey, Gregory R. Choppin, Stanley G. Thompson y Glenn T. Seaborg '
    },
    {
        nombre:'Nobelio',
        electrones: 102,
        serie:'actinidos',
        simbolo:'No',
        masa: '12,0107 u',
        descubridor:'1966 por científicos del Laboratorio Fliórov de Reacciones Nucleares en Dubná'
    },
    {
        nombre:'Lawrencio',
        electrones: 103,
        serie:'metales de transicion',
        simbolo:'Lr',
        masa: '12,0107 u',
        descubridor:'1961 por el equipo de física nuclear integrado por Albert Ghiorso, Torbjørn Sikkeland, Almon Larsh, Robert M. Latimer'
    },
    {
        nombre:'Rutherfordio',
        electrones: 104,
        serie:'metales de transicion',
        simbolo:'Rf',
        masa: '12,0107 u',
        descubridor:' 1964 en el Instituto Conjunto para la Investigación Nuclear en Dubna (Rusia)'
    },
    {
        nombre:'Dubnio',
        electrones: 105,
        serie:'metales de transicion',
        simbolo:'Db',
        masa: '12,0107 u',
        descubridor:'1968 por científicos rusos del Instituto Central de Investigaciones Nucleares'
    },
    {
        nombre:'Seaborgio',
        electrones: 106,
        serie:'metales de transicion',
        simbolo:'Sg',
        masa: '12,0107 u',
        descubridor:'1974 por sovieticos y estadounidenses'
    },
    {
        nombre:'Bohrio',
        electrones: 107,
        serie:'metales de transicion',
        simbolo:'Bh',
        masa: '12,0107 u',
        descubridor:'1981 por un equipo de Darmstadt, Alemania, equipo dirigido por P. Armbruster y G. Müzenberg'
    },
    {
        nombre:'Hasio',
        electrones: 108,
        serie:'metales de transicion',
        simbolo:'Hs',
        masa: '12,0107 u',
        descubridor:'1984 por el grupo de investigación alemán Gesellschaft für Schwerionenforschung localizado en Darmstadt'
    },
    {
        nombre:'Meitnerio',
        electrones: 109,
        serie:'metales de transicion',
        simbolo:'Mt',
        masa: '12,0107 u',
        descubridor:'1982 por Peter Armbruster y Gottfried Münzenberg '
    },
    {
        nombre:'Darmstatio',
        electrones: 110,
        serie:'metales de transicion',
        simbolo:'Ds',
        masa: '12,0107 u',
        descubridor:'1994 en la Gesellschaft für Schwerionenforschung en Darmstadt, Alemania, por P. Armbruster, S. Hofmann, G. Münzenberg y otros'
    },
    {
        nombre:'Roentgenio',
        electrones: 111,
        serie:'metales de transicion',
        simbolo:'Rg',
        masa: '12,0107 u',
        descubridor:'1994 por científicos alemanes en Darmstadt'
    },
    {
        nombre:'Copernicio',
        electrones: 112,
        serie:'metales de transicion',
        simbolo:'Cn',
        masa: '12,0107 u',
        descubridor:'Los antiguos'
    },
    {
        nombre:'Nihonio',
        electrones: 113,
        serie:'metales del bloque p',
        simbolo:'Nh',
        masa: '12,0107 u',
        descubridor:'Descubrimiento del nihonio se ha atribuido oficialmente al RIKEN Nishina Center for Accelerator-Based Science de Japón'
    },
    {
        nombre:'Flerovio',
        electrones: 114,
        serie:'metales del bloque p',
        simbolo:'Fl',
        masa: '12,0107 u',
        descubridor:'Científicos del Instituto Conjunto para la Investigación Nuclear de Dubná en Rusia'
    },
    {
        nombre:'Moscovio',
        electrones: 115,
        serie:'metales del bloque p',
        simbolo:'Mc',
        masa: '12,0107 u',
        descubridor:'Investigadores rusos y estadounidenses '
    },
    {
        nombre:'Livermorium',
        electrones: 116,
        serie:'metales del bloque p',
        simbolo:'Lv',
        masa: '12,0107 u',
        descubridor:'Investigadores del Laboratorio Nacional Lawrence Berkeley '
    },
    {
        nombre:'Teneso',
        electrones: 117,
        serie:'halogenos',
        simbolo:'Ts',
        masa: '12,0107 u',
        descubridor:'Equipo de científicos'
    },
    {
        nombre:'Organesson',
        electrones: 118,
        serie:'gases nobles',
        simbolo:'Og',
        masa: '293 u',
        descubridor:'Equipo de científicos de Berkeley, 1999'
    },
];

export { tabla_periodica }