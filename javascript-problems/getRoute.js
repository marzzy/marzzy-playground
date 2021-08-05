
function getRoute(tickets){
  // const srcIndex = {JPN: 0, 'BRA: 1, ...} 
  const srcIndexes = tickets.reduce((res, ticket, index) => {
    const [src, des] = ticket;
    res[src] = index;
    return res;
  }, {});

  // go trought each item in tickets
  for(let counter = 0; counter < tickets.length; counter++) {
    // let path = [item]
    const [src, dest] = tickets[counter];
    let path = [src, dest];

    // TODO: handle if there is more than 1 index for item

    function makepath(nextTicketSrc){
      // dest =  srcIndex[item];
      let nextTicketSrcIndex = srcIndexes[nextTicketSrc];
      // if find dest
      if(typeof nextTicketSrcIndex === 'number') {
        // path.push(dest)
        // src = dest
        // go to line 6
        const [ticketSrc, ticketDest] = tickets[nextTicketSrcIndex];
        path.push(ticketDest);
        makepath(ticketDest);

      }
    }
    makepath(dest);

    // if path.length === tickets+1 => return the path else go for the next item in tickets
    if (path.length === tickets.length + 1) {
      return path.join(',');
    } else {
      continue;
    }
  }
}

console.log('USA,BRA,UAE,JPN,PHL : ', getRoute([
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['USA', 'BRA'],
  ['UAE', 'JPN']]));
console.log('nothing : ', getRoute([]));