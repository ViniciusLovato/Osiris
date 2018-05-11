

export default {
  tickets() {
    return {
      getAll: () =>  fetch(`/api/tickets`)
      .then( response => response.json())
      .then( data => data.tickets),
      getOne: ({ id }) => fetch(`/api/tickets/${id}`)
      .then( response => response.json())
      .then( data => data.tickets)
    }
  }
}


