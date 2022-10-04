const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

let getTitle = function getTitle(){
  return books.map(makeArray);
}
function makeArray(returnedTitles){
  let {title} = returnedTitles;
  return {title};
}