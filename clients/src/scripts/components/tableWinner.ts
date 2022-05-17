import { IWinnerTable } from '../services/interface';

// <h3 class="h5 text-center">Механическое сумо</h3>
//               <ol>
//                 <li>
//                   место. Лицов Денис
//                   <i class="fa-solid fa-trophy px-sm-2 pr-1 gold"></i>
//                 </li>
//                 <li>
//                   место. Андрещук Егор, Усов Андрей
//                   <i class="fa-solid fa-trophy px-sm-2 pr-1 silver"></i>
//                 </li>
//                 <li>
//                   место. Филиппов Давид, Журавлева Мария
//                   <i class="fa-solid fa-trophy px-sm-2 pr-1 bronze"></i>
//                 </li>
//               </ol>

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
  const result:HTMLDivElement[] = [];

  data.forEach((item: IWinnerTable) => {
    const div:HTMLDivElement = document.createElement('div');
    div.className = 'col-md-4 col-xs-6 py-3';
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
      place.innerHTML = `1 место. ${person} ${medal}`;
      list.appendChild(place);
    });
    item.second.forEach((person) => {
      const place = document.createElement('li');
      const medal = getMedal('2');
      place.innerHTML = `2 место. ${person} ${medal}`;
      list.appendChild(place);
    });
    item.third.forEach((person) => {
      const place = document.createElement('li');
      const medal = getMedal('3');
      place.innerHTML = `3 место. ${person} ${medal}`;
      list.appendChild(place);
    });
    div.appendChild(header);
    div.appendChild(list);
    result.push(div);
  });

  return result;
};

export default tableWinner;