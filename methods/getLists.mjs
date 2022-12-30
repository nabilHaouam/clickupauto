import fetch from 'node-fetch';
//this script gets the names and ids of the lists of a particular space 
export async function getLists() {
  const query = new URLSearchParams({archived: 'false'}).toString();

  const spaceId = '26382436';
  const resp = await fetch(
    `https://api.clickup.com/api/v2/space/${spaceId}/list?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'pk_32269681_RJ2F8VIB8UQVVOKBQUH6TIVY92Y0D4RV'
      }
    }
  );

  const data = await resp.json();
  const lists = await data.lists.map((list)=> {
    return {
      listName : list.name,
      listId : list.id
    }
  })
  return lists;
}
