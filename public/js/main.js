document.querySelector("#menu-open").addEventListener("click", dropdown);
document.querySelector("#menu-close").addEventListener("click", closeDropdown);

function dropdown() {
  document.querySelector("#menu-open").classList.toggle('hidden')
}

function closeDropdown() {
  document.querySelector("#menu-close").classList.toggle('block')
  document.querySelector("#menu-close").classList.toggle('hidden')
  document.querySelector("#menu-open").classList.toggle('block')
  document.querySelector("#menu-open").classList.toggle('hidden')
} 