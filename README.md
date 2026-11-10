# Portafolio Académico Digital
## Metodología y Práctica de la Enseñanza en el Campo de la Seguridad

Sitio web desarrollado con **React**, **Tailwind CSS** y **Lucide Icons** basado fielmente en el diseño de referencia (`IMAGEN01.jpeg`).

---

### 🚀 Características Implementadas

1. **Fidelidad al Diseño:**
   - Barra superior con navegación, selector de secciones y menú desplegable para Observaciones.
   - Banner Hero con estilo institucional, insignia de período (*Segundo cuatrimestre – 2026*), integrantes (*Javier Dirie y Darío Pérez*) y la composición gráfica de textos y birrete de Gendarmería Nacional.
   - Barra de accesos rápidos (*Planificación didáctica*, *Observación de clases*, *Práctica de enseñanza*, *Reflexión y mejora*) con scroll e interactividad.
   - Columna lateral con información institucional, síntesis pedagógica (Modelo 4MAT, Caso *La firma dudosa*) y fotografía del aula.
   - Sección principal de **Producciones y evidencias** con las 6 tarjetas interactivas del portafolio.
   - Pie de página institucional con escudo de la **Escuela Superior de Gendarmería Nacional**, materia, cuatrimestre e integrantes.

2. **Centro de Descargas Interactivo:**
   - Al pulsar en cualquier botón **Descargar** (en tarjetas, menú superior o botón flotante), se abre una ventana modal donde el usuario puede **elegir exactamente qué archivo descargar**.
   - Integra todos los activos reales de la carpeta:
     - 📄 **Word (.docx):**
       - `PLAN_DE_CLASE1_Coercion y Medios_Prueba - Caligrafo (1).docx`
       - `Transcriptcion Caso caligrafo.docx`
       - `Biografia escolar.docx`
     - 📕 **PDF (.pdf):**
       - `Observaciones y analisis.pdf`
       - `Medidas de coerción y Medios de pruebas - Detalles - Kahoot!.pdf`
       - `Acta constancia Practica docente.pdf`
     - 📊 **PowerPoint (.pptx):**
       - `Presentacion_final_v_1_kahoot + video.pptx`
   - Incluye filtros rápidos por formato (`Todos`, `PDF`, `Word`, `PowerPoint`), buscador en tiempo real, tamaños de archivo e indicación del archivo recomendado según la tarjeta de origen.

3. **Efectos Hover y Microinteracciones:**
   - Todos los botones cuentan con transiciones suaves (`hover:scale-105`, `hover:shadow-md`, `active:scale-95`).
   - Botón **Ver** con vista previa de documentos e visor embebido para PDFs.

4. **100% Responsivo:**
   - Adaptado para dispositivos móviles, tablets y computadoras de escritorio.
   - Menú hamburguesa desplegable en smartphones y barras con desplazamiento táctil horizontal.

---

### 💻 Cómo ejecutar el proyecto

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Para compilar para producción:
```bash
npm run build
```

Para previsualizar la versión compilada:
```bash
npm run preview
```

