import fetch from 'node-fetch';
//this script sets the field of the task to the value we want . 
export async function setCustomFieldValue(taskId, fieldId, fieldValue) {
  const query = new URLSearchParams({
    custom_task_ids: 'true'
  }).toString();

  const resp = await fetch(
    `https://api.clickup.com/api/v2/task/${taskId}/field/${fieldId}?${query}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'pk_32269681_RJ2F8VIB8UQVVOKBQUH6TIVY92Y0D4RV'
      },
      body: JSON.stringify({
        value: fieldValue
      })
    }
  );
    
 
}

