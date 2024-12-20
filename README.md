# API de Partidos de Fútbol

## Rutas

### 1. Obtener información de partidos específicos

- **Endpoint:** `/api_match`
- **Método:** `GET`
- **Descripción:** Devuelve información detallada sobre partidos entre las fechas especificadas, incluyendo probabilidades si están disponibles.
- **Parámetros:**
  - `from` (Date, obligatorio): Fecha de inicio.
  - `to` (Date, obligatorio): Fecha de finalización.
  - `league` (número, opcional): Identificador de la liga (league_id).
  - `match_id` (número, opcional): Identificador del partido (match_id).

---

### 2. Obtener todos los partidos de una fecha específica

- **Endpoint:** `/api_AllMatch`
- **Método:** `GET`
- **Descripción:** Devuelve todos los partidos del día elegido, incluyendo escudos de los equipos.
- **Parámetros:**
  - `from` (Date, obligatorio): Fecha de inicio.
  - `to` (Date, obligatorio): Fecha de finalización.
  - `league` (número, opcional): Identificador de la liga (league_id).
  - `match_id` (número, opcional): Identificador del partido (match_id).

---

### 3. Obtener los últimos partidos entre dos equipos

- **Endpoint:** `/api_record`
- **Método:** `GET`
- **Descripción:** Devuelve los últimos 4 partidos jugados entre dos equipos específicos.
- **Parámetros:**
  - `to` (Date, obligatorio): Fecha límite para buscar partidos.
  - `league` (número, obligatorio): Identificador de la liga (league_id).
  - `team_a` (string, obligatorio): Nombre del primer equipo.
  - `team_b` (string, obligatorio): Nombre del segundo equipo.
- **Nota:** Es importante escribir correctamente los nombres de los equipos para obtener resultados.

---

### 4. Obtener todos los países

- **Endpoint:** `/api_country`
- **Método:** `GET`
- **Descripción:** Devuelve una lista con todos los países disponibles.

---

### 5. Obtener ligas de un país específico

- **Endpoint:** `/api_league`
- **Método:** `GET`
- **Descripción:** Devuelve todas las ligas de un país específico.
- **Parámetros:**
  - `id` (número, obligatorio): Identificador del país (country_id).

---

### 6. Obtener equipos de una liga específica

- **Endpoint:** `/api_team`
- **Método:** `GET`
- **Descripción:** Devuelve todos los equipos de una liga específica.
- **Parámetros:**
  - `id` (número, obligatorio): Identificador de la liga (league_id).

---

### 7. Obtener jugadores de un equipo en una liga específica

- **Endpoint:** `/api_players`
- **Método:** `GET`
- **Descripción:** Devuelve todos los jugadores de un equipo en una liga específica.
- **Parámetros:**
  - `id` (número, obligatorio): Identificador de la liga (league_id).
  - `tid` (número, obligatorio): Identificador del equipo (team_id).

---

### 8. Buscar jugador por nombre

- **Endpoint:** `/api_Oneplayers`
- **Método:** `GET`
- **Descripción:** Devuelve todos los jugadores con un nombre específico.
- **Parámetros:**
  - `name` (string, obligatorio): Nombre del jugador.

### 9. Buscar la clasificación de una liga

- **Endpoint:** `/api_standings`
- **Método:** `GET`
- **Descripción:** Devuelve la clasificación de una liga en una temprada específica.
- **Parámetros:**
  - `id` (number, obligatorio): Id de la liga.
  - `season` (number, obligatorio): Temporada que se busca.

### 10. Buscar los partidos de una liga en una fecha dada

- **Endpoint:** `/api_fixture`
- **Método:** `GET`
- **Descripción:** Devuelve los partidos en una fecha dada.
- **Parámetros:**
  - `league` (number, obligatorio): Id de la liga.
  - `season` (number, obligatorio): Temporada que se busca.
  - `from` (string, obligatorio): Fecha en formato YYYY-MM-DD.
  - `to` (string, obligatorio): Fecha en formato YYYY-MM-DD.

### 11. Buscar las probabilidades un partido de una liga.

- **Endpoint:** `/api_odds`
- **Método:** `GET`
- **Descripción:** Devuelve las probabilidades de un partido específico.
- **Parámetros:**
  - `league` (number, obligatorio): Id de la liga.
  - `season` (number, obligatorio): Temporada que se busca.
  - `fixture` (string, obligatorio): Id del partido, se obtiene del endpoint anterior.

### 12. Buscar las probabilidades un partido de una liga.

- **Endpoint:** `/api_NewTeam`
- **Método:** `GET`
- **Descripción:** Devuelve los jugadores de un equipo.
- **Parámetros:**
  - `team` (number, obligatorio): Id del equipo.
  - `season` (number, obligatorio): Temporada que se busca.
  - `page` (number, obligatorio): La informacion esta paginada.

### 13. Buscar las ligas y copas de un pais.

- **Endpoint:** `/api_NewLeague`
- **Método:** `GET`
- **Descripción:** Devuelve las competencias del país especificado.
- **Parámetros:**
  - `search` (string, obligatorio): Nombre del país buscado, World es para las internacionales.

### 14. Buscar la estadistica de los jugadores de un partido terminado.

- **Endpoint:** `/api_NewMatchEndad`
- **Método:** `GET`
- **Descripción:** Devuelve el rendimiento de cada jugador (goles, asisitencias, tarjetas, puntuación).
- **Parámetros:**
  - `fixtureId` (number, obligatorio): El id del partido, se obtiene en fixture.

## Ejemplos de Uso

1. **Obtener información de partidos entre dos fechas:**

   ```bash
   GET /api_match?from=2023-10-01&to=2023-10-15&league=666
   ```
