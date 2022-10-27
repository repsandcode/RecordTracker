document.querySelector("#hamburger-menu").addEventListener("click", dropdown);

function dropdown() {
  if(document.querySelector("#menu-open").classList.contains('block')){
    // hamburger menu
    document.querySelector("#menu-open").classList.remove('block');
    document.querySelector("#menu-open").classList.toggle('hidden');

    // x mark
    document.querySelector("#menu-close").classList.remove('hidden');
    document.querySelector("#menu-close").classList.toggle('block');
  }else{
    // if x-mark contains block

    // hamburger menu
    document.querySelector("#menu-open").classList.remove('hidden');
    document.querySelector("#menu-open").classList.toggle('block');

    // x mark
    document.querySelector("#menu-close").classList.remove('block');
    document.querySelector("#menu-close").classList.toggle('hidden');
  }
}