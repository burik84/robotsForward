import { IWinnerTable } from '../services/interface';

const getMedal = (win: string) => {
  let text = '';
  switch (win) {
    case '1':
      text = '<i class="fa-solid fa-trophy px-sm-2 pr-1 gold"></i>';
      break;
    case '2':
      text = '<i class="fa-solid fa-trophy px-sm-2 pr-1 silver"></i>';
      break;
    case '3':
      text = '<i class="fa-solid fa-trophy px-sm-2 pr-1 bronze"></i>';
      break;
    default:
      break;
  }

  return text;
};

const tableWinner = (data: IWinnerTable[]) => {
  const result: HTMLDivElement[] = [];

  data.forEach((item: IWinnerTable) => {
    const div: HTMLDivElement = document.createElement('div');
    div.className = 'col-lg-4 col-sm-6 py-3';
    const header: HTMLElement = document.createElement('h3');
    header.className = 'h5 text-center';
    if (item.type === 'sumo') {
      header.textContent = 'Механическое сумо';
    } else if (item.type === 'truck') {
      header.textContent = 'Тягачи';
    } else if (item.type === 'king') {
      header.textContent = 'Царь-горы';
    }

    const list: HTMLUListElement = document.createElement('ul');

    item.first.forEach((person) => {
      const place = document.createElement('li');
      const medal = getMedal('1');
      place.innerHTML = `${medal} 1 место. ${person}`;
      list.appendChild(place);
    });
    item.second.forEach((person) => {
      const place = document.createElement('li');
      const medal = getMedal('2');
      place.innerHTML = `${medal} 2 место. ${person}`;
      list.appendChild(place);
    });
    item.third.forEach((person) => {
      const place = document.createElement('li');
      const medal = getMedal('3');
      place.innerHTML = `${medal} 3 место. ${person}`;
      list.appendChild(place);
    });
    div.appendChild(header);
    div.appendChild(list);
    result.push(div);
  });

  return result;
};

export default tableWinner;
