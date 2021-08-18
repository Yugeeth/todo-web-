const addButton = document.queryselector('.addbutton');
var input = document.queryselector('.input');
const container = document.queryselector('.container');

class item{
    constructor(itemname){
        //create the item dev
        this.createDiv.(itemname);
    }

    createDiv(itemname){
        let input = document.createElement('.input');
        input.value =itemname;
        input.disabled = true;
        input.classList.add('.item_input');
        input.type ="Text";

        let input = document.createElement('.div');
        itembox.classList.add('item');
        item
        let editButton = document.createElement('.Button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('.editButton');

        let removeButton = document.createElement('.button');
        removeButton.innerHTML = "REMOVE"
        removeButton.classList.add('removeButton');

        container.appendchild(input);

        itembox.appendchild(input);
        itembox.appendchild(editButton);     
        itembox.appendchild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itembox));

    }

    edit(input){
        input.disabled = !input.disabled;


    remove(item){
        container.removechild('item');
    }

}
    
function check(){
    if(input.value is""){
        new item(input.value);
        input.value = "";
    }  
}



addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
}