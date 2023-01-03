import {getLists} from './methods/getLists.mjs';
import {getTasks} from './methods/getTasks.mjs'
import { setCustomFieldValue } from './methods/setCustomFieldValue.js';


async function toDoAutomation (){
    const objLists = await getLists();
    const lists = []
    Object.entries(objLists).forEach((entry)=>{
        const [key, value] = entry;
        lists.push(entry)
    })

    const currentDate = new Date();
    const today = currentDate.getTime()
    for (const list of lists){
        const objTasks = await getTasks(list[1].listId);
        const tasks = []
        Object.entries(objTasks).forEach((entry)=>{
            const [key, value] = entry;
            tasks.push(entry)
        })
        
        tasks.forEach(task=> {
            if (!task[1].due_date){ //if the task[1] doesn't have a due date 
                if (task[1].value == 4){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 3)
                }
                else if (task[1].value == 3){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 2)
                }
                else if (task[1].value == 2){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 0)
                }
                else if (task[1].value == 0){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 9)
                }
                else if (task[1].value == 9){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 10)
                }
                else if (task[1].value == 10){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 11)
                }
                else if (task[1].value == 11){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 12)
                }
                else if (task[1].value == 12){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 13)
                }
                else if (task[1].value == 13){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 14)
                }
                else if (task[1].value == 14){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 15)
                }
                else if (task[1].value == 15){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 16)
                }
            }
            
            else if (task[1].dueDate) { //if the task[1] has a due date 

                const dueDate = new Date(task[1].dueDate);
                const diffTime = today - dueDate;
                const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
                
                if (diffDays== -3){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 19)
                }
                if (diffDays== -2){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 20)
                }
                if (diffDays== -1){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 23)
                }
                if (diffDays== 0){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 18)
                }
                if (diffDays== 1){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 21)
                }
                if (diffDays== 2){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 22)
                }
                if (diffDays== 3){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 24)
                }
                if (diffDays== 4){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 25)
                }
                if (diffDays== 5){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 26)
                }
                if (diffDays== 6){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 27)
                }
                if (diffDays== 7){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 28)
                }
                if (diffDays>7 ){
                    setCustomFieldValue(task[1].id, task[1].fieldId, 17)
                }
            }
            //handling the done-->tomorrow and done-->tomorrow--auto situation
            if(task[1].value == 5){
                setCustomFieldValue(task[1].id, task[1].fieldId, 0)
            }
            if(task[1].value == 6){
                setCustomFieldValue(task[1].id, task[1].fieldId, 18)
            }
            //handling the UP NEXT situations :
            const diffTodayAndUpNextDate = today - task[1].upNextDate
            if (task[1].value == 1 && !task[1].upNextDate ){
                setCustomFieldValue(task[1].id, task[1].upNextFieldId, today.toString())
            }
            else if (diffTodayAndUpNextDate == 7){
                setCustomFieldValue(task[1].id, task[1].upNextFieldId, 29)
            }
            else if (diffTodayAndUpNextDate == 14){
                setCustomFieldValue(task[1].id, task[1].upNextFieldId, 30)
            }
            else if (diffTodayAndUpNextDate == 21){
                setCustomFieldValue(task[1].id, task[1].upNextFieldId, 31)
            }
        })
    }
   
   
}
toDoAutomation();