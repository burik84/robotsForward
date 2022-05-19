const SHOWWARNING = true;
const SHOWALARM = true;
const URL = {
  ru: 'https://роботывперед.рф/',
  eng: 'https://xn--90acgda4cbjegs2i.xn--p1ai/',
};

const DATA = {
  source: 'data.json',
  table2019: 'win2019.json',
};

const SOURCE = {
  info: 'data for site robots forward',
  isWarning: true,
  warning_2020:
    'В связи с введением ограничительных мер, направленных на предотвращение распространения новой коронавирусной инфекции в регионе, соревнования в 2020 году проводится не будут!!!',
  warning: 'В 2022 году проведение соревнований не запланировано!',
  isTableNew: false,
  data: '[Осень] 2022',
};

const WINNER2019 = [
  {
    type: 'sumo',
    first: ['Лицов Денис'],
    second: ['Андрещук Егор, Усов Андрей'],
    third: ['Филиппов Давид, Журавлева Мария'],
  },
  {
    type: 'truck',
    first: ['Васильев Данил'],
    second: ['Антоненко Иван', 'Феофанов Кирилл'],
    third: ['Тарасов Роман'],
  },
  {
    type: 'king',
    first: ['Сырников Станислав, Федорова Дарья'],
    second: ['Ершов Тимофей'],
    third: ['Емельянова Екатерина, Алферов Даниил'],
  },
];

export {
  SHOWWARNING, SHOWALARM, URL, DATA, SOURCE, WINNER2019,
};
