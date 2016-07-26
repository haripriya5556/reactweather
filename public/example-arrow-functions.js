var names=['hari','priya','leela'];
names.forEach(function (name) {
  console.log('forEach',name);
});
names.forEach((name)=> {
  console.log('arrowFunc',name);
});
