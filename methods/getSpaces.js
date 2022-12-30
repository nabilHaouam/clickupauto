import fetch from 'node-fetch';

async function run() {
  const query = new URLSearchParams({archived: 'false'}).toString();

  const teamId = '14333809';
  const resp = await fetch(
    `https://api.clickup.com/api/v2/team/${teamId}/space?${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'pk_32269681_RJ2F8VIB8UQVVOKBQUH6TIVY92Y0D4RV'
      }
    }
  );

  const data = await resp.json();
  console.log(data);
}

run();