(function(){

    function createAppTitle(title){
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm(){
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = "Introduceti ceea ce aveti de facut";
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = "Adauga lucrul";

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return{
            form, 
            input, 
            button,
        };
    }

    function createTodoList(){
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItemName(name){
        let item = document.createElement('li');
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = "Gata";
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = "Sterge";

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return{
            item, 
            doneButton, 
            deleteButton,
        };
    }

    function createTodoApp(container, title = 'Lista de lucru'){
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        window.addEventListener('load', function(){
            if(todoItemForm.input.value === ""){
                todoItemForm.button.disabled = true;
            }
        })
        todoItemForm.input.addEventListener('input', function(){
            if(todoItemForm.input.value === ""){
                todoItemForm.button.disabled = true;
            }else{
                todoItemForm.button.disabled = false;
            }
        });

        todoItemForm.form.addEventListener('submit', function(e){
            e.preventDefault();

            let todoItem = createTodoItemName(todoItemForm.input.value);

            todoItem.doneButton.addEventListener('click', function(){
                todoItem.item.classList.toggle('list-group-item-success');
            });

            todoItem.deleteButton.addEventListener('click', function(){
                if(confirm('Sunteti sigur?')){
                    todoItem.item.remove();
                }
            });

            todoList.append(todoItem.item);
            
            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
        })
    }

    window.createTodoApp = createTodoApp;
})();