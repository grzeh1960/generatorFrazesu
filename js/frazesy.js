// window.onload = initPage;
// var words1 = new Array();
// var words2 = new Array();
// var words3 = new Array();
// var lastRand1 = new Array();
// lastRand1[0] = 'coś1';
// var lastRand2 = new Array();
// lastRand2[0] = 'coś2';
// var lastRand3 = new Array();
// lastRand3[0] = 'coś3';
var btnGeneruj = document.getElementById('generuj');
var btnGeneryj2 = document.getElementById('generuj2');
var lastRand1 = ['coś1'];
var lastRand2 = ['cos2'];
var lastRand3 = ['cos3'];
var flaga = 0;





var panelFrazesu = document.getElementById('frazesyStrona');
var btnAdd1 = document.getElementById('submit1');
var btnAdd2 = document.getElementById('submit2');
var btnAdd3 = document.getElementById('submit3');
var form1 = document.getElementById('firstForm');
var form2 = document.getElementById('secondForm');
var form3 = document.getElementById('thirdForm');
var btnTranslate = document.getElementById('translate');
var btnCloseTranslate = document.getElementById('closeTranslate');
var btnAddWord = document.getElementById('add');
var btnCloseNewWord = document.getElementById('closenewword');
var przyslona = document.getElementById('przyslona');
var dodawacz = document.getElementById('dodawacz');
var btnOpenPost = document.getElementById('openpost');
var poczta = document.getElementById('poczta');
var btnSendPost = document.getElementById('sendpost');
var btnClosePost = document.getElementById('closepost');
var closedIcon = document.getElementById('svg8');
var translate = document.querySelector('.translate');
var dymek = document.getElementById('dymek');
var kulka = document.getElementById('kulka');
var textFrazesu = document.getElementById('textFrazesu');
var wow = document.getElementById('wow');


var words1 = [
    ['atawistycznie', 'atawizm: pojawienie się u&nbsp;danego organizmu nietypowych dla niego cech bądź zachowań, charakterystycznych dla jego odległych przodków.'],
    ['autotelicznie', 'autoteliczny: będący celem samym w&nbsp;sobie'],
    ['antynomicznie', 'antynomia: 1.sprzeczność między dwoma wykluczającymi się twierdzeniami, z&nbsp;których każde wydaje się prawdziwe i&nbsp;uzasadnione, 2. rozumowanie pozornie poprawne, lecz prowadzące do sprzeczności'],
    ['arbitralnie', 'arbitralny: narzucany komuś w sposób niedopuszczający sprzeciwu'],
    ['bifurkacyjnie', 'bifurkacje: skokowa zmiana własności modelu matematycznego'],
    ['bilateralnie', 'bilateralny: dwustronny, obustronny'],
    ['biwalentnie', 'biwalentny: dwuwartościowy'],
    ['dychotomicznie', 'dychotomia: dwudzielność; podział na dwie części, wzajemnie się wykluczające i uzupełniające do całości'],
    ['dyslekcyjnie', 'dyslekcja: zaburzenie manifestujące się trudnościami w&nbsp;nauce czytania i&nbsp;pisania'],
    ['dystynktywnie', 'dystynktywny: odróżniający się, wyróżniający'],
    ['epistemologicznie', 'epistemologia: teoria poznania'],
    ['eschatologicznie', 'eschatologia: doktryna dotycząca ostatecznego przeznaczenia świata, ludzkości i człowieka'],
    ['heurystycznie', 'heurystyki: uproszczone metody wnioskowania, które są powszechne oraz przydatne, jednak niestety bywają zawodne'],
    ['kazuistycznie', 'kazuistyka: 1. Skomplikowana i&nbsp;niejasna argumentacja, polegająca na naginaniu argumentów w&nbsp;celu uzasadnienia jakiejś tezy, 2. Drobiazgowe rozstrzyganie szczegółowych problemów przez stosowanie do nich odpowiednio dobranych zasad ogólnych'],
    ['kognitywnie', 'kognitywistyka:  dziedzina nauki zajmująca się obserwacją i analizą działania zmysłów, mózgu i umysłu, w szczególności ich modelowaniem'],
    ['manicheistycznie', 'manicheizm: rodzaj religii. Podstawą owej religii jest przekonanie o&nbsp;dualizmie przenikającym wszelkie aspekty istnienia. Dualizm ten to oczywiście opozycja światła i&nbsp;ciemności, dobra i&nbsp;zła, porządku i&nbsp;chaosu. Przeciwieństwa te cały czas walczą o&nbsp;dominację jednego nad drugim.'],
    ['paralentnie', 'paralelizm: jednoczesność, równoległość'],
    ['permanentnie', 'permanentny: nieprzerwanie trwający'],
    ['purystycznie', 'puryzm: postawa językowa charakteryzująca się rygorystyczną dbałością o&nbsp;język i&nbsp;zatroskaniem o&nbsp;jego czystość, wynikającym z pobudek emocjonalnych, związanych z&nbsp;poczuciem, że język jest wartością wymagającą ścisłej ochrony'],
    ['probabilistycznie', 'probabilistyka: dział matematyki zajmujący się badaniem prawidłowości występujących w&nbsp;zdarzeniach losowych'],
    ['sofizmatycznie', 'sofizmat:  rozumowanie pozornie poprawne, ale tak naprawdę zawierające utajone błędy logiczne'],
    ['sodomicznie', 'sodomia: w języku polskim termin określający zoofilię, niekiedy również homoseksualizm'],
    ['symultanicznie', 'symultaniczny: odbywający się jednocześnie'],
    ['ultymatywnie', 'ultymatywny: mający charakter ultimatum, zagrażający sankcją.'],
    ['walencyjnie', 'walencja: 1. wartość 2. łączący się, w określony gramatyką sposób, z innymi leksemami '],
    ['wegetatywnie', 'wegetatywny: związany z podstawowymi procesami fizjologicznymi organizmu']
];
var words2 = [
    ['antropomorficzne', 'antropomorfizm: przypisywanie cech ludzkich zjawiskom przyrody, zwierzętom i przedmiotom'],
    ['apofatyczne', 'apofatyczny: nie dający się wyrazić słowami'],
    ['binarne', 'binarny: pozycyjny system liczbowy, w którym podstawą jest liczba 2, a do zapisu liczb potrzebne są tylko dwie cyfry: 0 i 1.'],
    ['cyzelowane', 'cyzelować: drobiazgowo, perfekcyjnie coś wykańczać, opracowywać'],
    ['deprecjonowane', 'deprecjonowanie: 1. bagatelizowanie, 2. obniżanie, zaniżanie wartości'],
    ['eremickie', 'eremita; pustelnik, zakonnik żyjący w&nbsp;odosobnieniu, ale zachowujący wspólną regułę zakonną'],
    ['eudajmonistyczne', 'eudajmonizm: pogląd etyczny, według którego szczęście jest najwyższym dobrem i&nbsp;celem człowieka'],
    ['epigońskie', 'epigon: bierny naśladowca wielkich poprzedników lub kontynuator nieaktualnych idei'],
    ['eufoniczne', 'eufonia: harmonijne brzmienie'],
    ['eugeniczne', 'eugenika:  system poglądów zakładający możliwość doskonalenia cech dziedzicznych gatunku'],
    ['fenomenologiczne', 'fenomenologia: filozofia naukowa, traktująca o&nbsp;faktach oczywistych. Poznanie bezzałożeniowe'],
    ['haszowane', 'haszowanie: jedna z&nbsp;technik szybkiego dostępu do obiektów zapisanych w&nbsp;bazie danych'],
    ['hedonistyczne', 'hedonizm: doktryna, uznająca przyjemność, rozkosz za najwyższe dobro i cel życia, główny motyw ludzkiego postępowania'],
    ['hermeneutyczne', 'hermeneutyka: podstawowa metoda rozumienia wytworów kultury przez duchowe zbliżenie się do nich'],
    ['hipertekstowe', 'hipertekst: sposób organizacji informacji w&nbsp;tekście komputerowym'],
    ['hipsterskie', 'hipster: przedstawiciel współczesnej subkultury. Wyznacznikiem stylu hipsterów jest deklarowana niezależność wobec głównego nurtu kultury masowej (tzw. „mainstreamu”) i ironiczny stosunek do niego oraz akcentowanie swojej oryginalności i indywidualności'],
    ['holistyczne', 'holizm: pogląd, według którego wszelkie zjawiska tworzą układy całościowe'],
    ['kakofoniczne', 'kakofonia: 1. mieszanina form, kolorów, treści, 2. nieprzyjemnie brzmiąca mieszanina dźwięków'],
    ['katońskie', 'katoński: surowy, prawy i nieugięty'],
    ['katafatyczne', '1. katafatyczny: dający się wyrazić słowami, 2.katafatyczna: określenie dotyczące teologii, opartej na założeniu, że człowiek jest w stanie pozytywnie wypowiadać się "jaki Bóg jest"'],
    ['koherentne', 'koherencja: 1. teoria filozoficzna, w&nbsp;myśl której prawdziwość sądu polega na jego niesprzeczności względem sądów uprzednio przyjętych, 2. wewnętrzna spójność tekstu, wypowiedzi, poglądów itp.'],
    ['kompulsywne', 'kompulsywny: wykonywany pod wpływem nie dającego się opanować wewnętrznego przymusu'],
    ['ksenofobiczne', 'ksenofobia: lęk przed obcymi, lęk wobec obcych'],
    ['mizantropiczne', 'mizantropia: pojęcie ogólnie określające niechęć do gatunku ludzkiego. Nie jest to uczucie skierowane do poszczególnych jednostek, ale do ogółu populacji (z własną osobą włącznie)'],
    ['ontologiczne', 'ontologia: teoria bytu'],
    ['paradygmatyczne', 'paradygmat: przyjęty sposób widzenia rzeczywistości w danej dziedzinie, doktrynie itp.'],
    ['paliatywne', 'paliatywny:  mający charakter półśrodka; mało skuteczny'],
    ['parsowane', 'parsowanie: analizowanie ciągu znaków w&nbsp;celu ustalenia jego struktury'],
    ['proksemiczne', 'proksemika:  nauka zajmująca się badaniem wzajemnego wpływu relacji przestrzennych między osobami na relacje psychologiczne'],
    ['rekurencyjne', 'rekurencja: metoda konstruowania i&nbsp;rozwiązywania algorytmów. Funkcja wywołująca sama siebie. Synonim: rekurencja'],
    ['rekursyjne', 'rekursja: metoda konstruowania i&nbsp;rozwiązywania algorytmów. Funkcja wywołująca sama siebie. Synonim: rekursja'],
    ['relewentne', 'relewentne: ważne, istotne z pewnego punktu widzenia'],
    ['semantyczne', 'semantyczny: dotyczący znaczenia wyrazów; znaczeniowy'],
    ['tangencjalne', 'tangencjalny: brak tłumaczenia'],
    ['transhumanistyczne', 'transhumanizm:  ruch intelektualny, kulturowy oraz polityczny postulujący możliwość i potrzebę wykorzystania nauki i techniki do przezwyciężenia ludzkich ograniczeń i poprawy kondycji ludzkiej.'],
    ['uzurpacyjne','uzurpacja: 1. zagarnięcie władzy lub praw do czegoś, 2. roszczenie niesłusznych pretensji do czegoś']
];
var words3 = [
    ['abolicjonizmy', '1. abolicja: zniesienie, umorzenie 2. abolicjonizm:  w XVIII i XIX wieku ruch społeczno-polityczny i ideowy w Europie  i obu Amerykach (głównie w USA), stawiający sobie za zadanie zniesienie niewolnictwa i związanego z nim handlu ludźmi' ],
    ['antecedencje', 'antecedencja: fakt poprzedzający stan obecny'],
    ['abstrakty', 'abstrakt: 1. pojęcie oderwane, abstrakcyjne; abstrakcja 2. streszczenie dokumentu pierwotnego, mające służyć jak najszerszemu jego zobrazowaniu'],
    ['antrofobie', 'antrofobia: zaburzenie lękowe z grupy fobii oznaczające lęk przed ludźmi'],
    ['artefakty', 'artefakt: sztycznie wykonany - między innymi przedmiot, zdarzenie itp. będące sztucznym wytworem, tj. będące wynikiem działalności ludzkiej, nieistniejące w&nbsp;naturze'],
    ['abrewiacje', 'abrewiacja: wyraz książkowy oznaczający skrót wyrazu lub grupy wyrazów w&nbsp;piśmie, np. a.C. (łacińskie ante Christum).'],
    ['aberracje', 'aberracja: 1. odstępstwo od normy lub zasady, błądzenie 2. rozmycie, zniekształcenie'],
    ['akronimy', 'akronim: wyraz utworzony w&nbsp;wyniku skrócenia grupy wyrazów, skrótowiec'],
    ['bastonady', 'bastonada: bicie kijem jako kara, w farsach – jako akcent komiczny'],
    ['cezury', 'cezura: granica chronologiczna, przełomowy moment w dziejach ludzkości'],
    ['dezynwoltury', 'dezynwoltura: nadmierna swoboda w&nbsp;zachowaniu; nonszalancja'],
    ['egzegezy', 'egzegeza:  badanie, wyjaśnianie i komentowanie tekstów'],
    ['egzemplifikacje', 'egzemplifikacja: zilustrowanie czegoś przykładami'],
    ['efemerydy', 'efemeryda:  istota, rzecz lub zjawisko nietrwałe, przemijające szybko i&nbsp;bez śladu'],
    ['ekstruzje', 'ekstruzja: 1. przetwarzanie termiczno-ciśnieniowe produktów spożywczych, 2. wypływ magmy na powierzchnię Ziemi'],
    ['ekstynkcje', 'ekstynkcja: 1. osłabienie natężenia światła w wyniku jego absorpcji przez ośrodek, 2. proces zanikania gatunku wskutek zmian środowiskowych lub ewolucji; wymieranie'],
    ['ekstropie', 'ekstropia: antonim słowa entropia. wiara w technoprogres, w technoprzekształcenie torów ewolucji człowieka ku egzystencji pozbawionej jakichkolwiek znamion regresu i rozpadu '],
    ['ekwanty', 'ekwant: punkt wyrównawczy – pojęcie wprowadzone do teorii geocentrycznej przez Ptolemeusza, pozwalające na dokładniejszy opis ruchu planet.'],
    ['enkapsulacje', 'enkapsulacja: ukrywanie danych składowych, zamykanie wewnątrz, używane zamiennie z&nbsp;hermetyzacją'],
    ['dyskalkulie', 'dyskalkulia:  zaburzenie zdolności wykonywania działań arytmetycznych'],
    ['fluktuacje', 'fluktuacja:  1.odchylenia od stanu równowagi, od normy; płynność, niestałość, wahania 2. przemieszczanie się, przechodzenie'],
    ['imponderabilia', 'imponderabilia: rzeczy nieuchwytne i&nbsp;niedające się dokładnie zmierzyć lub obliczyć, mogące jednak wywierać wpływ na jakieś sprawy'],
    ['imperatywy', 'imperatyw: nakaz, reguła, zasada, która nie podlega dyskusji i którą można bezpośrednio wywieść z założeń teoretycznych'],
    ['infinityzmy', 'infinityzm: pogląd, który przyjmuje nieskończoność przyrody i świata, podzielność przestrzeni i czasu'],
    ['hermetyzacje', 'hermetyzacja: ukrywanie danych składowych, zamykanie wewnątrz, używane zamiennie z&nbsp;enkapsulacją'],
    ['hoistingi', 'hoisting: wynoszenie na górę, na wierzch, nadawanie priorytetu'],
    ['interrogacje', 'interrogacja: badanie śledcze, wypytywanie, dopytywanie się, wywiad'],
    ['kofiguracje', 'kofiguracja: kształtowanie postaw myśli i&nbsp;zachowań na poziomie rówieśniczym. Czerpanie wzorców z&nbsp;obszaru rówieśników.'],
    ['intermitencje','intermitencja: zachowanie pewnych układów złożonych, oznaczające przełączanie układu pomiędzy dwoma typami zachowań'],
    ['konfabulacje', 'konfabulacja: opowiadanie przeżyć zmyślonych, rzekomo objętych mgłą niepamięci'],
    ['konkatenacje', 'konkatenacja:1. łączenie dwóch ciągów znaków, 2. konstrukcja polegająca na zaczynaniu następnego zdania, od wyrazu, którym się kończy poprzednie zdanie'],
    ['konstatacje', 'konstatacja: ustalenie, dostrzeżenie, stwierdzenie jakiegoś faktu'],
    ['konterfekty', 'konterfekt: portret, wizerunek, obraz, malowidło'],
    ['konwolucje', 'konwolucja (mat) operacja wykonywana na dwóch funkcjach. Wykorzystywana np. w&nbspanalizie obrazów. Synonimem jest splot'],
    ['konwergencje', 'konwergencja: pojęcie oznaczające zbieżność lub powstawanie zbieżności'],
    ['koproterapie', 'koproterapia: metoda leczenia przy użyciu odchodów ludzi lub zwierząt'],
    ['kwerendy', 'kwerenda: 1. zapytanie 2. poszukiwanie 3. śledztwo'],
    ['leksemy', 'leksem: wyraz rozumiany jako abstrakcyjna jednostka systemu słownikowego języka'],
    ['literały', 'literał: jednostka leksykalna reprezentująca ustaloną wartość'],
    ['leksje', 'leksja: 1.najmniejszy fragment hipertekstu. Leksja powinna być zamkniętą całością, niezależną od innych fragmentów. Powinna również zawierać hiperłącza do innych leksji, 2. najmniejsza przestrzeń, w&nbsp;której możemy dostrzec znaczenie'],
    ['mizginie', 'mizoginia:  nienawiść albo silne uprzedzenie w stosunku do płci żeńskiej'],
    ['mizoandryzmy', 'mizoandryzm: nienawiść lub silne uprzedzenie w stosunku do mężczyzn'],
    ['prokrastynacje', 'prokrastynacja: odwlekanie, odkładanie na potem, zwlekanie'],
    ['tromtadracje', 'tromtadracja: krzykliwe i&nbsp;demonstracyjne głoszenie jakichś poglądów'],
    ['prefiguracje', 'prefiguracja: zjawisko lub zdarzenie zawierające cechy czegoś, co nastąpiło później, i&nbsp;będące jak gdyby tego zapowiedzią'],
    ['parabolizmy', 'parabolizować: wyolbrzymiać, metaforyzować, alegoryzować'],
    ['prerogatywy', 'prerogatywa: szczególne uprawnienie związane z zajmowanym stanowiskiem lub pełnioną funkcją'],
    ['paralogizmy', 'paralogizm: błędne rozumowanie prowadzące do fałszywego wniosku'],
    ['peregrynacje', 'peregrynacja: 1. pielgrzymka do miejsc świętych, 2. dłuższa podróz lub wedrówka '],
    ['postfiguracje', 'postfiguracja: zjawisko lub zdarzenie zawierające cechy czegoś, co nastąpiło w przeszłości'],
    ['prefiguracje', 'prefiguracja: zjawisko lub zdarzenie zawierające cechy czegoś, co nastąpiło później, i&nbsp;będące jak gdyby tego zapowiedzią'],
    ['propedeutyki', 'propedeutyka: wprowadzenie do jakiejś dziedziny wiedzy'],
    ['rekapitulacje', 'rekapitulacja: streszczenie wykładu, dyskusji itp.'],
    ['rudymenty', 'rudyment: 1. początek lub podstawa czegoś, 2. pozostałość, szczątek, 3. narząd uwsteczniony lub zanikły w&nbsp;rozwoju ewolucyjnym danego szczepu'],
    ['redundancje', 'redundancja: 1. nadmiarowość w stosunku do tego co konieczne, 2. zbędne powtarzanie'],
    ['rewalidacje', 'rewalidacja:całokształt podejmowanych i&nbspusystematyzowanych działań mających na celu przywrócenie człowiekowi niepełnosprawnemu (również intelektualnie) możliwie pełnej sprawności.'],
    ['sekularyzmy', 'sekularyzm: brak współzależności i integracji między religią a publicznymi sprawami społeczeństwa; świeckość'],
    ['wariacje', 'wariacje: duża różnorodność czegoś'],
    ['wiwisekcje', 'wiwisekcja: 1. zabieg operacyjny na żywym zwierzęciu w celach badawczych, 2. bardzo dokładna analiza czegoś']
//hiperomin, hipominia ??

];

function losuj() {



    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);



    var el1 = words1[rand1];
    var el2 = words2[rand2];
    var el3 = words3[rand3];


    var wynik = [el1, el2, el3];


    return wynik

}


btnGeneruj.onclick = function () {
    
    
    if(flaga == 1){
        
       
       kulka.classList.remove('kulkaIn');
       kulka.classList.add('kulkaOut');
       textFrazesu.classList.remove('textFrazesuIn');
       textFrazesu.classList.add('textFrazesuOut');
       document.getElementById('text').innerHTML = '';
       
      
       
        
    }
    
    
    setTimeout(() => {
       
       
        kulka.classList.remove('kulkaOut');
        kulka.classList.add('kulkaIn');
        kulka.style.display = 'block';

        textFrazesu.classList.remove('textFrazesuOut');
        textFrazesu.classList.add('textFrazesuIn');
        textFrazesu.display = 'block';

        
        
    }, 100);
    setTimeout(() => {
        wow.style.display = 'block';

    },1500)
    setTimeout(() => {
        wow.style.display = 'none';

    },3000)
    


    for (i = 0; i < 500; i++) {
        var wynik = losuj();
        var el1 = wynik[0];
        var el2 = wynik[1];
        var el3 = wynik[2];


        var tosamo1 = el1[0].localeCompare(lastRand1[0]);

        

        var tosamo2 = el2[0].localeCompare(lastRand2[0]);


        var tosamo3 = el3[0].localeCompare(lastRand3[0]);
        if ((tosamo1 != 0 && tosamo2 != 0) && tosamo3 != 0) {
            var phrase = wynik[0][0] + " " + wynik[1][0] + " " + wynik[2][0];

            setTimeout( function(){document.getElementById('text').innerHTML = phrase;}, 1200);
            //document.getElementById('text').innerHTML = phrase;
            lastRand1[0] = el1[0];
            lastRand2[0] = el2[0];
            lastRand3[0] = el3[0];

            break;
        }  
    }
    var translate1 = wynik[0][1];
    if (translate1 == '') {
        document.getElementById('text1').innerHTML = wynik[0][0] + ':' + ' ' + 'Brak tłumaczenia. Poszukaj w innym źródle.';
    } else {
        document.getElementById('text1').innerHTML = translate1;

    }

    var translate2 = wynik[1][1];
    document.getElementById('text2').innerHTML = translate2;
    var translate3 = wynik[2][1];
    document.getElementById('text3').innerHTML = translate3;
    btnOpenPost.style.display = 'block';

    flaga = 1;

};
btnTranslate.onclick = function(){
    translate.style.display = 'block';
    wow.style.display = 'none'; 
};
btnCloseTranslate.onclick = function(){
    translate.style.display = 'none';
};
function dymekChangeClass(dymek, flaga){
    if(flaga == 1){
        dymek.classList.remove('dymekIn');
        dymek.classList.add('dymekOut');
    } else if(flaga == 0){
        dymek.classList.remove('dymekOut');
        dymek.classList.add('dymekIn');
    }
}



