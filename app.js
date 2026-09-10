const systems={
  "Compras": {
  "Consultas": [
    "Órdenes de compra",
    "Deuda a proveedores"
  ],
  "Movimientos": [
    "Nueva orden de compra"
  ],
  "Procesos": [
    "Autorizar compra",
    "Programar pago a proveedor"
  ],
  "Reportes": [
    "Compras del período",
    "Cumplimiento del calendario"
  ],
  "Tablas": [
    "Proveedores",
    "Calendario de abastecimiento"
  ]
},
  "Almacenes": {
    "Movimientos": [
      "Recepción de Insumos",
      "Salida a Cocina",
      "Registro de Mermas y Descarte",
      "Ajuste Físico de Inventario"
    ],
    "Consultas": [
      "Stock Almacén Seco",
      "Stock Cámara de Frío",
      "Kardex Valorizado",
      "Lotes y Vencimientos"
    ],
    "Recetas (BOM)": [
      "Fichas Técnicas de Platos",
      "Descuento Automático por Comanda",
      "Costeo Estándar de Recetas"
    ],
    "Procesos": [
      "Toma de Inventario Físico",
      "Reconciliación Teórico vs Real",
      "Generar Requerimiento a Compras"
    ],
    "Alertas": [
      "Insumos Bajo Stock Mínimo",
      "Caducidad y Ruptura de Frío",
      "Control de Rotación PEPS"
    ],
    "Tablas": [
      "Catálogo Maestro de Insumos",
      "Unidades de Medida",
      "Zonas y Cámaras de Almacenamiento"
    ]
  },
  "Ventas": {
    "Captura de Pedidos": [
      "Atención en Salón",
      "Delivery WhatsApp",
      "Delivery App (Llamafood)"
    ],
    "Gestión de Comandas": [
      "Unificación de Pedidos",
      "Modificación (Regla 5 min)",
      "Incidencias y Devoluciones",
      "Cambio de Plato"
    ],
    "Facturación y Caja": [
      "Emisión de Boletas",
      "Cobranza Multicanal",
      "Listado de Comprobantes"
    ]
  },
  "Contabilidad": {
    "Financiera": [
      "Anticipo Proveedores",
      "Asiento Rembolso Gasto",
      "Asiento Rendicion Cuenta",
      "Consulta Comprobante",
      "Cuenta Contable",
      "Cuenta Corriente",
      "Detraccion de Facturas",
      "Diarios Manuales",
      "Divisionaria",
      "Importación diarios",
      "Mantenimiento Accionista",
      "Percepciones",
      "Plan de Cuentas",
      "Prestamo Bancarios",
      "Recibos por Honorarios",
      "Registro Gastos",
      "Registro comprobantes",
      "Rembolso Gastos",
      "Rendicion Cuenta",
      "Solicitud Rendicion Cuenta",
      "SubCuenta Contable",
      "Tipo de Cambio"
    ],
    "Procesos": [
      "Actualiza Correlativo Compras",
      "Apertura Contable",
      "Apertura libro diario",
      "Asiento Compras",
      "Asiento Detracciones Compras",
      "Asiento Percepciones Compras",
      "Asientos costo almacen",
      "Balance General",
      "Cierre Contable",
      "Cierre Operaciones",
      "Cuadre por Redondeo Ventas",
      "Generar Archivos Plano 0601",
      "Proceso Cuenta Pendiente",
      "Resumen Libros SUNAT"
    ],
    "Reportes": [
      "1.1 CyB-DETALLE MOVIMIENTO DEL EFECTIVO",
      "1.2 CyB-DETALLE MOVIMIENTOS DE LA CUENTA CORRIENTE",
      "10.1 ESTADO DE COSTO DE VENTAS ANUAL",
      "10.2 ELEMENTOS DEL COSTO MENSUAL",
      "10.3 ESTADO DE COSTO DE PROD. VALORIZADO ANUAL",
      "10.4 REGISTRO DE COSTOS - CENTRO DE COSTOS",
      "3.1 LIB- ESTADO DE SITUACION FINANCIERA",
      "3.11 IyB-DETALLE DEL SALDO CTA 41",
      "3.12 IyB-DETALLE DEL SALDO CTA 42",
      "3.13 IyB-DETALLE DEL SALDO CTA 46",
      "3.14 IyB-DETALLE DEL SALDO CTA 47",
      "3.15 LIB-SALDO CUENTA 37 Y 49",
      "3.16.1 DETALLE DEL SALDO DE LA CUENTA 50",
      "3.16.2 ESTRUCTURA DE LA PARTICIPACIÓN ACCIONARIA",
      "3.17 LIBRO DE IyB - BALANCE DE COMPROBACIÓN",
      "3.18 LIBRO DE IyB - ESTADO DE FLUJOS DE EFECTIVO",
      "3.19 LIBRO ESTADO DE CAMBIOS EN EL PATRIMONIO NETO",
      "3.2 IyB-DETALLE DEL SALDO CTA 10",
      "3.20 LIB-ESTADO DE RESULTADOS",
      "3.21 LIBRO DETALLE DEL PLAN CONTABLE UTILIZADO",
      "3.23 LIBRO NOTAS A LOS ESTADOS FINANCIEROS",
      "3.24 LIB-ESTADO DE RESULTADOS INTEGRALES",
      "3.25 LIB-ESTADO DE FLUJOS DE EFECTIVO-M.INDIRECTO",
      "3.3 IyB-DETALLE DEL SALDO CTA 12",
      "3.4 IyB-DETALLE DEL SALDO CTA 14",
      "3.5 IyB-DETALLE DEL SALDO CTA 16",
      "3.6 IyB-DETALLE DEL SALDO CTA 19",
      "3.7 IyB-DETALLE DEL SALDO CTA 20",
      "3.8 IyB-DETALLE DEL SALDO CTA 31",
      "3.9 IyB-DETALLE DEL SALDO CTA 34",
      "7.1 DETALLE DE LOS ACTIVOS FIJOS REV. Y NO REV.",
      "7.3 A.F. DETALLE DE LA DIFERENCIA DE CAMBIO",
      "7.4 ACTIVOS FIJOS BAJO LA MOD.DE ARREN. FINANCIERO",
      "Analisis Cuentas",
      "BALANCE COMP. 2 DIGITOS",
      "BALANCE COMP. 3 DIGITOS",
      "BALANCE COMP. 4 DIGITOS",
      "BALANCE DE COMPROBACION",
      "BALANCE GENERAL",
      "Balance Comprobacion SUNAT",
      "Compras por proveedor",
      "Detalle deuda proveedor",
      "Diarios Descuadrados",
      "Diferencia Clase 6 y Clase 9",
      "EE GG PP POR FUNCION",
      "EE GG PP POR NATURALEZA",
      "Gastos Por Proceso produccion",
      "Inventario Permanente Unidades",
      "Inventario Permanente Valorizado",
      "Kardex Unidades Resumen",
      "Kardex Valorizado Resumen",
      "LIB - BALANCE DE COMPROBACIÓN",
      "Libro 4ta Categoria",
      "Libro diario",
      "Libro diario Resumen",
      "Libro mayor",
      "Libro mayor Resumen",
      "Mayor auxiliar",
      "Operaciones terceros - DAOT",
      "Plan Contable Empresarial",
      "Plan de Costos",
      "RESUMEN ACTIVOS PASIVOS",
      "RESUMEN CUENTA RESULTADOS",
      "RESUMEN MENSUALIZADO",
      "Registro Compras Anterior",
      "Registro compras Resumen",
      "Registro de Ventas",
      "Registro de Ventas Resumen",
      "Registro de compras",
      "Rentabilidad Farmacias",
      "Resumen Activos Fijos",
      "Resumen deuda proveedores",
      "Solicitudes dinero por rendir"
    ],
    "Tablas": [
      "Amarre Clase 6 y 9",
      "Bienes y servicios con detraccion",
      "Catalogo Gastos",
      "Cuenta Contable AFP",
      "Cuentas Por Forma Pago",
      "Cuentas Prestamo",
      "Empresas Relacionadas",
      "Estructura EEFF Detalle",
      "Movimiento Contable",
      "Proveedores 4ta Categoria",
      "Sub Movimiento Contable",
      "Tasa AFP Recibos Honorarios",
      "Tasa detraccion",
      "Tipo Documento",
      "Tipo Moneda"
    ]
  },
   //Terminado
  "Caja": {
    "Movimientos": [
        "Apertura de Caja",
        "Registrar Ingreso",
        "Registrar Egreso",
        "Pago a Proveedores",
        "Adelanto al Personal",
        "Cierre de Caja"
    ],
    "Consultas": [
        "Estado de Caja",
        "Movimientos de Caja",
        "Cobros por Forma de Pago",
        "Historial de Cierres"
    ],
    "Procesos": [
        "Cuadre de Caja",
        "Conciliación de Medios de Pago"
    ],
    "Reportes": [
        "Resumen de Caja",
        "Cierre de Caja por Turno",
        "Ingresos y Egresos",
        "Ventas por Forma de Pago",
        "Reporte de Descuadres"
    ]
},
  "Costos": {
    "Costos": [
      "Centro de Costo"
    ],
    "Reportes": [
      "Plan de costos"
    ],
    "Tablas": [
      "Actividades",
      "Activo",
      "Proceso",
      "Producto",
      "Responsabilidad",
      "Tareas"
    ]
  },
  "Gerencia": {
    "Resumen Ejecutivo": [
      "Indicadores clave",
      "Ventas del período",
      "Utilidad y margen",
      "Flujo de caja",
      "Posición financiera"
    ],
    "Análisis y Seguimiento": [
      "Ventas por canal",
      "Rentabilidad por producto",
      "Costos versus ventas",
      "Cuentas por cobrar y pagar",
      "Inventario valorizado"
    ],
    "Planeamiento y Presupuesto": [
      "Presupuesto anual",
      "Presupuesto por centro de costo",
      "Proyección de ingresos y gastos",
      "Metas comerciales"
    ],
    "Aprobaciones": [
      "Compras pendientes",
      "Pagos pendientes",
      "Solicitudes de caja",
      "Movimientos extraordinarios"
    ],
    "Reportes Gerenciales": [
      "Estado de resultados",
      "Balance general",
      "Flujo de efectivo",
      "Dashboard gerencial",
      "Cierre mensual"
    ]
  }
};
// Cocina vuelve a utilizar su estructura original del menú.
systems["Cocina"] = {
  "Operaciones": [
    "Cola de comandas",
    "Preparación de pedidos",
    "Control de calidad",
    "Despacho de comandas"
  ],
  "Monitoreo": [
    "Pedidos recibidos",
    "Pedidos en preparación",
    "Pedidos listos",
    "Pedidos retrasados"
  ],
  "Reportes": [
    "Tiempo de preparación",
    "Comandas por hora",
    "Pedidos despachados",
    "Incidencias de cocina"
  ]
};
// Estos módulos se retiran del selector según la configuración solicitada.
delete systems["Contabilidad"];
delete systems["Costos"];
const icons={"Compras": "🛒", "Almacenes": "📦", "Ventas": "📊", "Caja": "💵", "Gerencia": "📈", "Cocina": "🍳"};
const login=document.getElementById('loginView'),mods=document.getElementById('modulesView'),erp=document.getElementById('erpView');
function view(v){[login,mods,erp].forEach(x=>x.classList.add('hidden'));v.classList.remove('hidden')}
loginBtn.onclick=()=>{if(!loginUser.value||!loginPass.value)return alert('Ingrese usuario y contraseña');view(mods)};
const grid=document.getElementById('moduleGrid');
function renderModules(filter=''){grid.innerHTML=Object.keys(systems).filter(n=>n.toLowerCase().includes(filter.toLowerCase())).map((n,x)=>`<button class="module" data-module="${n}"><span class="module-icon i${x%6}">${icons[n]||'▦'}</span><b>${n}</b><small>${Object.keys(systems[n]).length} grupos</small></button>`).join('')}
renderModules(); moduleSearch.oninput=e=>renderModules(e.target.value);
grid.onclick=e=>{const b=e.target.closest('.module');if(b)openERP(b.dataset.module)};
function makeRows(obj){return Object.entries(obj).map(([group,items])=>`<div class="menu-row has">${group}<div class="submenu">${items.map(x=>`<div class="menu-row" data-action="${x}">${x}</div>`).join('')}</div></div>`).join('')}
function openERP(name){view(erp);currentModule.textContent=name;moduleTitle.textContent=name;heroTitle.textContent='Panel de '+name;nav.innerHTML=`<div class="nav-item active" data-action="Inicio">⌂ Inicio</div><div class="nav-item">${name}<div class="dropdown">${makeRows(systems[name])}</div></div>`;renderGroups(name);show('Aplicación seleccionada: '+name)}
function renderGroups(name){const box=document.getElementById('groupCards');box.innerHTML=Object.entries(systems[name]).map(([g,items])=>`<div class="card group-card"><div class="card-title">${g}</div><div class="group-count">${items.length} opciones</div>${items.slice(0,4).map(i=>`<button data-action="${i}">${i}</button>`).join('')}${items.length>4?`<small>+ ${items.length-4} opciones en el menú</small>`:''}</div>`).join('')}
appsBtn.onclick=()=>view(mods); logoutBtn.onclick=()=>view(login);
const toast=document.getElementById('toast');function show(msg){toast.textContent=msg;toast.style.display='block';clearTimeout(window.t);window.t=setTimeout(()=>toast.style.display='none',1800)}
document.addEventListener('click', e => {
    let a = e.target.closest('[data-action]');
    if (a) {
        let accion = a.dataset.action;
        show('Abriendo: ' + accion);
        
        const cardsGenerales = document.getElementById('groupCards');
        const vistaVentas = document.getElementById('ventasDashboard');
        const heroSection = document.querySelector('.hero');

        // Lógica visual: Si hacen clic en Facturación, mostramos tu interfaz
        if (accion === 'Facturacion' || accion === 'Registro Comprobantes') {
            cardsGenerales.classList.add('hidden');
            heroSection.classList.add('hidden');
            if(vistaVentas) vistaVentas.classList.remove('hidden');
        } else {
            // Para cualquier otro botón, mantenemos la vista por defecto
            cardsGenerales.classList.remove('hidden');
            heroSection.classList.remove('hidden');
            if(vistaVentas) vistaVentas.classList.add('hidden');
        }
    }
});
document.querySelector('.search button').onclick=()=>show('Búsqueda global: '+globalSearch.value); quickBtn.onclick=()=>show('Búsqueda rápida: '+quickSearch.value);
