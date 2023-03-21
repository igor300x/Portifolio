export default function animaDev() {
  const dev = ['EDVOLNVSDOEER', 'EOVOLEDSNDREV', 'DSEROOVVLEDNE', 'DOERLSENOVEDV', 'OREESNLVVODDE', 'LEROOVESDVDEN', 'VODOLEENDSREV','DDOEVSEELNRVO', 'EOVOLEDSNDREV', 'ERVENSEODLDVO','DODNESORVEVLE', 'DOERLSENOVEDV','RDVELNOOSEVDE', 'DSEROOVVLEDNE',  'OREESNLVVODDE', 'DDOEVSEELNRVO', 'EDVOLNVSDOEER','VODOLEENDSREV', 'DESENVOLVEDOR']
  const front = ['CTFULSLAK','TKLCFALSU', 'ULLCAFTKS', 'AUSCLTFLK', 'CUKFTLALS','SALLFUKCT','KSFAUCLLT', 'SUCFLKTLA', 'TLASFUKLC','UTSLCKLFA', 'LAKUSTLCF', 'TAUSKLFLC', 'ULCFLTSKA', 'FSLKALUTC', 'TSKALFULC', 'ALUFSCKLT', 'KLUCLSATF','LULTACKFS','LKTCALSFU','AFKTCSLUL','ALUCKSTFL','KTCSLLUAF', 'UCKSLALFT','LCKUFSTLA','UTKALFCLS','CLALSKTUF', 'FULLSTACK']
  const devText = document.querySelector('.dev')
  const frontText = document.querySelector('.front')

  dev.forEach((item, index) => {
    const timer = setTimeout(() => {
      devText.innerText = item;
      clearTimeout(timer);
    }, 40 * index)
  })
  
  front.forEach((item, index) => {
    const timer2 = setTimeout(() => {
      frontText.innerText = item;
      clearTimeout(timer2);
    }, 40 * index)
  })
}