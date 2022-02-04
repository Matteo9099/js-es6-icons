const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//rendo dinamica la creazione tutti gli elementi all'avvio della pagina
const container = document.getElementById('icons-container');


drawIcons(container, icons);


const selector = document.getElementById('type-filter');

//creo un ascoltatore di eventi che al cambio mi dica quale e l'elemento selezionato
// nel momento del cambio
selector.addEventListener('change', function(){

    let selection = this.value;

    if(selection == ""){
        drawIcons(container, icons);
    } else{
        const filtered = icons.filter(icon => {
            if(icon.type == selection){
                return true;
            }
            return false;
        });
    
        drawIcons(container, filtered);
    
    }

    
});



// 1 atr riferimento container 2 atr riferimento icone da assegnare
function drawIcons(container, icons){

    // creo una stringa vuota con il contenuto che vorro passare nel html
    let content = "";

    // scorro nel array e creo le icone nella pagina
    icons.forEach(oggetto =>{
        content += `<div class="icon">
                        <i style="color:${oggetto.color};" class="${oggetto.family} ${oggetto.prefix}${oggetto.name}"></i>
                        <div class="icon-text">${oggetto.name}</div>
                    </div> 
                     `;
    });

    container.innerHTML = content;

}