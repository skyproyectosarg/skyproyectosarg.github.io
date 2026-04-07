const toolRepo = {
    calc3d: `
        <h2>SkyScale 3D</h2>
        <p>Calculadora de costo bruto por pieza.</p>
        <div class="tool-form">
            <label>Peso de la pieza (gramos):</label>
            <input type="number" id="peso" placeholder="Ej: 120">
            <label>Precio del filamento (por Kg):</label>
            <input type="number" id="precio" placeholder="Ej: 19000">
            <button class="btn-run" onclick="ejecutarCalc3D()">Calcular</button>
        </div>
        <div id="res-3d" class="result-box hidden"></div>
    `,
    diametro: `
        <h2>Cálculo de Diámetro Técnico</h2>
        <p>Precisión basada en el perímetro (Circunferencia).</p>
        <div class="tool-form">
            <label>Perímetro medido (mm):</label>
            <input type="number" id="peri" placeholder="Ej: 450">
            <button class="btn-run" onclick="ejecutarDiametro()">Obtener Diámetro</button>
        </div>
        <div id="res-dia" class="result-box hidden"></div>
    `
};

function showTool(id) {
    const home = document.getElementById('home-view');
    const toolView = document.getElementById('tool-view');
    const render = document.getElementById('tool-render');

    home.classList.add('hidden');
    toolView.classList.remove('hidden');
    render.innerHTML = toolRepo[id];
}

function goHome() {
    document.getElementById('tool-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
}

function ejecutarCalc3D() {
    const p = parseFloat(document.getElementById('peso').value);
    const pr = parseFloat(document.getElementById('precio').value);
    const out = document.getElementById('res-3d');
    
    if(p > 0 && pr > 0) {
        const total = (pr / 1000) * p;
        out.innerHTML = `<h3>Costo Material: $${total.toFixed(2)}</h3>`;
        out.classList.remove('hidden');
    }
}

function ejecutarDiametro() {
    const p = parseFloat(document.getElementById('peri').value);
    const out = document.getElementById('res-dia');
    
    if(p > 0) {
        const diam = p / Math.PI;
        out.innerHTML = `<h3>Diámetro: ${diam.toFixed(2)} mm</h3>`;
        out.classList.remove('hidden');
    }
}
