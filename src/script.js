const nombres = [];
document.getElementById('btn-agregar').addEventListener('click', () => {
  const input = document.getElementById('nuevo-nombre');
  const nombre = input.value.trim();
  if (!nombre) {
    alert('Ingresa un nombre válido');
    return;
  }
  nombres.push(nombre);
  input.value = '';
  actualizarLista();
});
function actualizarLista() {
  const ul = document.getElementById('participantes');
  ul.innerHTML = '';
  nombres.forEach(n => {
    const li = document.createElement('li');
    li.textContent = n;
    ul.appendChild(li);
  });
}
document.getElementById('btn-sortear').addEventListener('click', () => {
  if (nombres.length === 0) {
    alert('Agrega al menos un participante');
    return;
  }
  const index = Math.floor(Math.random() * nombres.length);
  document.getElementById('resultado').textContent = `Tu amigo misterioso es: ${nombres[index]}`;
});
