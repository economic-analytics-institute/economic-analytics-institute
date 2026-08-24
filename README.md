# Economic Analytics Institute — V3
## Bolivia Economic Research Terminal

Esta versión convierte la portada en un producto editorial/data-first.

### Estructura
1. Barra superior tipo terminal con indicadores.
2. Hero con "qué está pasando ahora".
3. Latest Research Intelligence.
4. EAI Economic Pulse en 60 segundos.
5. Research Agenda.
6. Research Output (papers, briefs, methods, data notes).
7. Dashboards.
8. Credibilidad institucional.
9. Research Assistant RAG.

### Datos usados en la demo de portada
- TCO 24-08-2026: Bs 11,50/USD — BCB.
- IPC julio 2026: -2,79% mensual; 4,93% a 12 meses — INE.
- RIN incluyendo obligaciones relativas al oro, 31-07-2026: USD 3.361,3 MM — BCB estadísticas semanales.
- Base monetaria MN/UFV, 19-08-2026: Bs 126.822 MM; +11,0% a 12 meses — BCB.
- TRe MN agosto 2026: 3,57% — BCB.
- Oro 24-08-2026: USD 4.624,20/O.T.F. — BCB.

En producción, NO conviene mantener cifras hard-coded. Deben venir de una API/JSON/base y preservar:
- fecha de corte;
- fuente;
- definición;
- frecuencia;
- enlace oficial;
- fecha/hora de actualización del portal.

### Conectar dashboards
Editar `EAI_CONFIG.dashboards` en `app.js`:

```js
macro: {
  titleES: "Bolivia Macro Monitor",
  titleEN: "Bolivia Macro Monitor",
  url: "https://..."
}
```

### Chatbot / RAG
`POST /api/chat`

```json
{
  "message": "Pregunta",
  "language": "es",
  "source_scope": "eai_repository"
}
```

El backend ideal:
PDF -> storage -> text extraction -> chunking -> embeddings -> vector DB -> retrieval -> LLM -> citas.

### Recomendación de producción
- Next.js / Astro
- FastAPI o Next.js API
- PostgreSQL + pgvector / Supabase
- Object storage para papers
- cron jobs para indicadores
- panel admin privado
- URLs permanentes por publicación
- metadata OpenGraph / Schema.org
- sitemap / robots / analytics
