import {getLists} from './methods/getLists.mjs';
import {getTasks} from './methods/getTasks.mjs'
import { setCustomFieldValue } from './methods/setCustomFieldValue.js';


function toDoAutomation (){
    const lists = getLists();
    const currentDate = new Date();
    const today = currentDate.getTime()
    lists.then( ()=>{
        lists.forEach(list => {
            const tasks = getTasks(list.listId);
            tasks.then(()=>{
                tasks.forEach(task=> {
                    if (!task.due_date){ //if the task doesn't have a due date 
                        if (task.value == 4){
                            setCustomFieldValue(task.id, task.fieldId, 3)
                        }
                        else if (task.value == 3){
                            setCustomFieldValue(task.id, task.fieldId, 2)
                        }
                        else if (task.value == 2){
                            setCustomFieldValue(task.id, task.fieldId, 0)
                        }
                        else if (task.value == 0){
                            setCustomFieldValue(task.id, task.fieldId, 9)
                        }
                        else if (task.value == 9){
                            setCustomFieldValue(task.id, task.fieldId, 10)
                        }
                        else if (task.value == 10){
                            setCustomFieldValue(task.id, task.fieldId, 11)
                        }
                        else if (task.value == 11){
                            setCustomFieldValue(task.id, task.fieldId, 12)
                        }
                        else if (task.value == 12){
                            setCustomFieldValue(task.id, task.fieldId, 13)
                        }
                        else if (task.value == 13){
                            setCustomFieldValue(task.id, task.fieldId, 14)
                        }
                        else if (task.value == 14){
                            setCustomFieldValue(task.id, task.fieldId, 15)
                        }
                        else if (task.value == 15){
                            setCustomFieldValue(task.id, task.fieldId, 16)
                        }
                    }
                    
                    else if (task.dueDate) { //if the task has a due date 
        
                        const dueDate = new Date(task.dueDate);
                        const diffTime = today - dueDate;
                        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
                        
                        if (diffDays== -3){
                            setCustomFieldValue(task.id, task.fieldId, 19)
                        }
                        if (diffDays== -2){
                            setCustomFieldValue(task.id, task.fieldId, 20)
                        }
                        if (diffDays== -1){
                            setCustomFieldValue(task.id, task.fieldId, 23)
                        }
                        if (diffDays== 0){
                            setCustomFieldValue(task.id, task.fieldId, 18)
                        }
                        if (diffDays== 1){
                            setCustomFieldValue(task.id, task.fieldId, 21)
                        }
                        if (diffDays== 2){
                            setCustomFieldValue(task.id, task.fieldId, 22)
                        }
                        if (diffDays== 3){
                            setCustomFieldValue(task.id, task.fieldId, 24)
                        }
                        if (diffDays== 4){
                            setCustomFieldValue(task.id, task.fieldId, 25)
                        }
                        if (diffDays== 5){
                            setCustomFieldValue(task.id, task.fieldId, 26)
                        }
                        if (diffDays== 6){
                            setCustomFieldValue(task.id, task.fieldId, 27)
                        }
                        if (diffDays== 7){
                            setCustomFieldValue(task.id, task.fieldId, 28)
                        }
                        if (diffDays>7 ){
                            setCustomFieldValue(task.id, task.fieldId, 17)
                        }
                    }
                    //handling the done-->tomorrow and done-->tomorrow--auto situation
                    if(task.value == 5){
                        setCustomFieldValue(task.id, task.fieldId, 0)
                    }
                    if(task.value == 6){
                        setCustomFieldValue(task.id, task.fieldId, 18)
                    }

                    //handling the UP NEXT situations :
                    const diffTodayAndUpNextDate = today - task.upNextDate
                    if (task.value == 1 && !task.upNextDate ){
                        setCustomFieldValue(task.id, task.upNextFieldId, today.toString())
                    }
                    else if (diffTodayAndUpNextDate == 7){
                        setCustomFieldValue(task.id, task.upNextFieldId, 29)
                    }
                    else if (diffTodayAndUpNextDate == 14){
                        setCustomFieldValue(task.id, task.upNextFieldId, 30)
                    }
                    else if (diffTodayAndUpNextDate == 21){
                        setCustomFieldValue(task.id, task.upNextFieldId, 31)
                    }
                })
            })
        })
    })
}
toDoAutomation();