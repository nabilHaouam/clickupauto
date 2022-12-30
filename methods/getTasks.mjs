import fetch from 'node-fetch';
//this script gets the id's of the all the tasks and cutom field ToDo! of a given list

export async function getTasks(list_id) {
  const query = new URLSearchParams({
    archived: 'false',
    page: '0',
    order_by: 'string',
    reverse: 'true',
    subtasks: 'true',
    statuses: [],
    include_closed: 'true',
    assignees: 'string',
    tags: 'string',
    due_date_gt: '0',
    due_date_lt: '0',
    date_created_gt: '0',
    date_created_lt: '0',
    date_updated_gt: '0',
    date_updated_lt: '0',
    custom_fields: 'string'
  }).toString();

  const listId = list_id;
  const resp = await fetch(
    `https://api.clickup.com/api/v2/list/${listId}/task?`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'pk_32269681_RJ2F8VIB8UQVVOKBQUH6TIVY92Y0D4RV'
      }
    }
  );

  const data = await resp.json();
  const tasks = await data.tasks.map((task) => (
    {
    id: task.id,
    fieldId: task.custom_fields.find((field)=> field.name == "ToDo!").id,
    value : task.custom_fields.find((field)=> field.name == "ToDo!").value,
    upNextDate: Number(task.custom_fields.find((field)=> field.name == "Date-Added-to-Up-Next [ToDay! Dependent Field]").value),
    upNextFieldId:task.custom_fields.find((field)=> field.name == "Date-Added-to-Up-Next [ToDay! Dependent Field]").id,
    dueDate : task.due_date
  }
  ))
  
  
  return tasks
}

