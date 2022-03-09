window.addEventListener("load", () => {

    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-todo")
    const list_el = document.querySelector("#tasks")
    const doneTasks = document.querySelector("#done-tasks")


    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const task = input.value;

        if(!task) {
            alert("please fill out the form");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input")

        task_input_el.classList.add("text")
        task_input_el.type = "text"
        task_input_el.value = task
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.innerHTML = "Edit"
        task_edit_el.classList.add("edit")
        

        const task_delete_el = document.createElement("button")
        task_delete_el.innerHTML = "Delete"
        task_delete_el.classList.add("delete")

        
        const task_done_el = document.createElement("button")
        task_done_el.innerHTML = "Done"
        task_done_el.classList.add("done")

        
        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(task_done_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);


        input.value = "";


        task_edit_el.addEventListener("click", () => {

            if (task_edit_el.innerHTML.toLowerCase() === "edit") {

                task_input_el.removeAttribute("readonly")
                task_input_el.focus();
                task_edit_el.innerHTML = "save"

            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "Edit"
            }

        })


        task_delete_el.addEventListener("click", ()=> {

            list_el.removeChild(task_el)
    
        })

    

        task_done_el.addEventListener("click", () => {

            const doneTask = task_input_el.value
            const done_task_input_el = document.createElement("input")

            
            list_el.removeChild(task_el)
            done_task_input_el.classList.add("text")
            done_task_input_el.type = "text"
            done_task_input_el.value = doneTask
            done_task_input_el.setAttribute("readonly", "readonly");

            const task_delete_done_el = document.createElement("button")
            task_delete_done_el.innerHTML = "Delete"
            task_delete_done_el.classList.add("delete")

            const task_restore_done_el = document.createElement("button")
            task_restore_done_el.innerHTML = "Restore"
            task_restore_done_el.classList.add("restore")

            const done_task_el = document.createElement("div")
            done_task_el.classList.add("done-task-el")

            done_task_el.appendChild(done_task_input_el)
            done_task_el.appendChild(task_delete_done_el)
            done_task_el.appendChild(task_restore_done_el)
            
            doneTasks.appendChild(done_task_el)

            

            task_restore_done_el.addEventListener("click", () => {

                const restoreTask = done_task_input_el.value
                
                doneTasks.removeChild(done_task_el)
                const done_task_restore_el = document.createElement("input")
                done_task_restore_el.classList.add("text")
                done_task_restore_el.type = "text"
                done_task_restore_el.value = restoreTask
                done_task_restore_el.setAttribute("readonly", "readonly");
        
                task_actions_el.appendChild(task_edit_el);
                task_actions_el.appendChild(task_delete_el);
                task_actions_el.appendChild(task_done_el);
        
                task_el.appendChild(task_actions_el);
        
                list_el.appendChild(task_el);

            })
            
            task_delete_done_el.addEventListener("click", ()=> {

                doneTasks.removeChild(done_task_el)
               
            
            })
        })
        
    })    

});