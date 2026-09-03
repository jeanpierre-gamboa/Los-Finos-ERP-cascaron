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
    "Catalogo": [
      "Clase Almacen",
      "Grupo Almacen",
      "Item Almacen"
    ],
    "Ingresos": [
      "Almacenamiento",
      "Parte de Ingreso",
      "Recepcion Picking"
    ],
    "Inventario": [
      "Actualizacion de inventario",
      "Ajuste Inventario",
      "Almacen",
      "Consulta Kardex",
      "Consultar Stocks",
      "Ejecucion de Inventario",
      "Gestión de Inventario",
      "Importar Inventario Fisico",
      "Inventario Fisico",
      "Inventario por Grupo",
      "Saldos Iniciales"
    ],
    "Procesos": [
      "Gestion Almacenes",
      "Gestion Aplic. Fracción",
      "Gestion de sublotes",
      "Migrar Ingresos Lolfar",
      "Proceso de importacion Kardex",
      "Restricciones",
      "Valorizar Kardex Lolfar"
    ],
    "Reportes": [
      "Catalogo Materiales",
      "Formato Toma Inventario",
      "KARDEX",
      "Listado Ingresos",
      "Listado Salidas",
      "Reporte - Etiquetas de Embalaje",
      "Reporte - Faltante excedente",
      "Reporte - Formatos Logisticos",
      "Reporte - Picking - Bultos",
      "Reporte - Tiempo Picking",
      "Reposicion Por Stock Minimo",
      "Saldos Almacen",
      "Stock Materiales"
    ],
    "Salidas": [
      "Crear Pedido Distribucion",
      "Distribución",
      "Lista de Picking",
      "Parte de Salida",
      "Sincroni. Picking - mov"
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
  "Activo Fijo": {
    "Movimientos": [
      "Depreciacion Activo Fijo",
      "Registro Activo Fijo"
    ],
    "Reportes": [
      "Activos Fijos Depreciados",
      "Activos por Ubicacion",
      "Altas Bajas Activos Fijos",
      "Depreciacion Mensual",
      "Etiqueta Para Inventario",
      "Formato de Inventario",
      "Listado Activos Fijos"
    ],
    "Tablas": [
      "Adquisiciones",
      "Catalogo Compra Activo",
      "Grupo Activo Fijo",
      "Status",
      "SubGrupo Activo Fijo",
      "Tipo Activo"
    ]
  },
  "Bancos": {
    "Consultas": [
      "Estado comprobante"
    ],
    "Movimientos": [
      "Banco",
      "Bancos - Conciliacion Izipay",
      "Bancos - Cuenta Bancaria",
      "Cierre Mensual",
      "Cobranza Tarjetas",
      "Conciliacion",
      "Gestión de Aprobacion",
      "Pagos - Solicitudes de Pago",
      "Productos",
      "Recepcion de Productos",
      "Registro Productos por orden",
      "Restricciones",
      "Tiempo Recepcion"
    ],
    "Reportes": [
      "Cheques Emitidos",
      "Conciliacion",
      "Documentos por pagar",
      "Facturas Registradas",
      "Impresion Movimiento",
      "Letras Cambio",
      "Libro Banco",
      "Notas Credito",
      "Reportes",
      "Resumen bancos",
      "Saldo posicion bancos"
    ],
    "Tablas": [
      "Concepto Caja",
      "Cuentas Bancarias"
    ]
  },
  "Cuentas por Pagar": {
    "Consultas": [
      "Estado de Letras",
      "Estado de comprobantes",
      "Facturacion de Proveedores",
      "Historial de saldos"
    ],
    "Movimientos": [
      "Pagos - Aprobacion de Pago",
      "Pagos - Letras",
      "Pagos - Propuesta de Pago",
      "Pagos - Registrar Haberes",
      "Registro de Letras"
    ],
    "Reportes": [
      "Comprobantes por Vencer",
      "Cuentas a Proveedores",
      "Documentos por Canje",
      "Movimiento de Comprobantes",
      "Resumen de Letras",
      "Resumen de Proveedores"
    ],
    "Tablas": [
      "Entidad Financiera",
      "Estado Documento",
      "Tipo Comprobante",
      "Tipo Moneda"
    ]
  },
  "Control de Asistencia": {
    "Consultas": [
      "Asistencia por Trabajador"
    ],
    "Movimientos": [
      "Asignar Horario",
      "Asignar Terminales",
      "Gestión de Programación Día/Hora",
      "Gestión de Programación Mensual/Día",
      "Orden de Trabajo",
      "Permisos Laborales",
      "Procesar Asistencia",
      "Programa Laboral",
      "Programación Mensual",
      "Registro por Marcas"
    ],
    "Reportes": [
      "Asistencia Diaria",
      "Asistencia por Trabajador",
      "Control de Asistencia",
      "Horas Programadas Vs Ejecutadas"
    ],
    "Tablas": [
      "Alcance Salida Laboral",
      "Gestión de Horarios",
      "Gestión de Turnos",
      "Horario Laboral",
      "Motivo Salida Laboral",
      "Puntos de Control",
      "Terminal Punto Control"
    ]
  },
  "Planilla": {
    "Asistencia": [
      "Partes de Apuntacion"
    ],
    "Consultas": [
      "Record de Asistencia"
    ],
    "Contratacion": [
      "Contrato Laboral",
      "Legajo del Personal",
      "Periodo Laboral - 4ta Categoria",
      "Registro de Trabajadores"
    ],
    "Movimientos": [
      "Adelanto Sueldo",
      "Adelantos de Participacion",
      "Archivos de PDT",
      "Asiento Contable de Planilla",
      "Asiento de Cancelacion de Planilla",
      "Comisión por AFP",
      "Descanso Vacacional",
      "Distribucion de Participacion",
      "Distribución de Costos",
      "Exportaciones a Excel",
      "Montos Fijos",
      "Montos Variables",
      "Prestamo Personal",
      "Programa Vacacional",
      "Remuneración del Trabajador",
      "T-Registro y PLAME",
      "Tasa Regimen Pension"
    ],
    "Reportes": [
      "Adelanto Quincenal",
      "Boletas de Remuneraciones",
      "Carta Reparto Utilidad",
      "Certificado 5° Categoria",
      "Conceptos Tributarios",
      "Inconsistencia de Costos",
      "Liquidacion de utilidades",
      "Padron de Trabajadores",
      "Participacion en utilidades",
      "Periodos Vacacionales",
      "Planilla Neta",
      "Relacion de Trabajadores",
      "Reportes",
      "Resumen Essalud",
      "Resumen de AFP",
      "Resumen por Conceptos",
      "Vacaciones Pendientes Anual"
    ],
    "Tablas": [
      "APORTE EMPLEADOR",
      "Asignar Concepto",
      "CONCEPTOS AFECTOS",
      "Cargos Funcionales",
      "Categorias",
      "Cese Laboral",
      "Conceptos Planilla",
      "Conceptos Sunat",
      "Cta Bco y Costos",
      "Cuenta Contable",
      "Dias no laborables",
      "Estado Civil",
      "Estado del Trabajador",
      "Generador de Costos",
      "Gestión de Tablas Maestras",
      "Grado de Instrucción",
      "Nacionalidad",
      "Ocupacion",
      "Prestador de Salud",
      "Regimen de Pensión",
      "Sexo",
      "Tipo Comisión AFP",
      "Tipo Concepto Planilla",
      "Tipo Concepto Sunat",
      "Tipo Contrato Laboral",
      "Tipo Documento Identidad",
      "Tipo Suspensión Laboral",
      "Tipo de Pago",
      "Tipo de Planilla",
      "Tipo de Trabajador"
    ]
  },
  "Clínica": {
    "Procesos": [
      "Asociación Diagnóstico - Genérico",
      "Asociación Genérico - Producto",
      "Kairos Cargar Archivos",
      "Petitorio Por Especialidad",
      "Replicar Genérico en Diagnósicos",
      "Replicar Terapeutica a otros Diagnósticos",
      "Seguimiento Receta"
    ],
    "Reportes": [
      "Kairos Listado de Equivalencia",
      "Listado Genericos Preescritos",
      "Listado Precios Catalogos (RESULTADO)",
      "Ranking de Morbilidad",
      "Reporte - Petitorio HT",
      "Reporte - Tabla CIE-10",
      "Reporte - Tabla de Morbilidad"
    ],
    "Tablas": [
      "Cargar Otros Catalogos",
      "Kairos Asignar Equivalencia",
      "Kairos Productos",
      "Lista de Clasificacion",
      "Listar Otros Catalogos",
      "Mantenimiento Tipo Catalogos"
    ]
  }
};
const icons={"Compras": "🛒", "Almacenes": "📦", "Ventas": "📊", "Contabilidad": "📒", "Caja": "💵", "Costos": "🧮", "Activo Fijo": "🏢", "Bancos": "🏦", "Cuentas por Pagar": "🧾", "Control de Asistencia": "🕘", "Planilla": "👥", "Clínica": "⚕️"};
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
