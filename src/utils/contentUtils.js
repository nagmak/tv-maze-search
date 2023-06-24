export const convertArrayToString = (array, option) => {
       let str = option == 'pipe' ? ' | ' : (option == 'comma' ? ', ' : ' ');
       let items = ''
        array.forEach((item, i) => {
          if (i < array.length - 1) {
            items = items + item + str
          } else {
            items = items + item
          }
        })
        return items;
}