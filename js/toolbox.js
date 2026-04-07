const toolRepo = {
    calc3d: `
        <h2>Sky 3D Scale</h2>
        <div class="tool-help">
            <strong>Instrucciones de Uso:</strong><br>
            1. Obtené el peso de la pieza desde tu Slicer (Cura, Orca, PrusaSlicer).<br>
            2. Ingresá el precio que pagaste por el rollo completo (1kg).<br>
            3. El sistema calculará automáticamente el costo neto basado en el consumo real de material.
        </div>
        <div class="tool-form">
            <label>Peso de la pieza (gramos):</label>
            <input type="number" id="peso" placeholder="Ej: 85">
            <label>Precio del filamento por Kg ($):</label>
            <input type="number" id="precio" placeholder="Ej: 22000">
            <button class="btn-run" onclick="ejecutarCalc3D()">Calcular Costo</button>
        </div>
        <div id="res-3d" class="result-box hidden"></div>
    `,
    diametro: `
        <h2>Cálculo de Diámetro</h2>
        <div class="tool-help">
            <strong>Fundamento Técnico:</strong><br>
            Esta herramienta utiliza la relación geométrica entre la longitud de la circunferencia y su diámetro ($D = C / \pi$). Es fundamental para piezas técnicas donde solo podés medir el contorno exterior con precisión.
        </div>
        <div class="tool-form">
            <label>Perímetro medido (mm):</label>
            <input type="number" id="peri" placeholder="Ej: 157.08">
            <button class="btn-run" onclick="ejecutarDiametro()">Obtener mm</button>
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
    window.scrollTo(0,0);
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
        out.innerHTML = `<h3>Costo estimado: $${total.toFixed(2)}</h3>
                         <p style="font-size: 0.8rem; color: #8b949e;">* Cálculo basado exclusivamente en el peso del material consumido.</p>`;
        out.classList.remove('hidden');
    }
}

function ejecutarDiametro() {
    const p = parseFloat(document.getElementById('peri').value);
    const out = document.getElementById('res-dia');
    
    if(p > 0) {
        const diam = p / Math.PI;
        out.innerHTML = `<h3>Diámetro Resultante: ${diam.toFixed(3)} mm</h3>
                         <p style="font-size: 0.8rem; color: #8b949e;">* Resultado calculado con alta precisión decimal para diseño CAD.</p>`;
        out.classList.remove('hidden');
    }
}
