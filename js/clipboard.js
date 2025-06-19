// Скрипт для копирования адреса в один клик
document.getElementById( "address" ).addEventListener( "click",function() {
    const text = this.textContent;
    navigator.clipboard.writeText( text ).then( () => {
        alert( "Адрес скопирован" );
    } );
} );

// Скрипт для копирования номера телефона в один клик
document.getElementById( "phone-number" ).addEventListener( "click", function() {
    const text = this.textContent;
    navigator.clipboard.writeText( text ).then( () => {
        alert( "Телефон скопирован" );
    } );
} )