# ReactCourse-MoviesAPI

> ## Stack
- Express JS
- Mongo DB

> ## Models

1. **Movie**
    - `title` (string, required)
    - `img` (string, required)
    - `description` (string)
    - `durationMinutes` (number)
    - `characters` [Character]
    - `timestamps`
2. **Character**
    - `name` (string, required)
    - `img` (string, required)
    - `biography` (string)
    - `timestamps`

> ## Endpoints

- `/movies/ (GET)` -> Get all the movies availables
- `/movies/:id (GET)` -> Get movies (including characters)
- `/movies/ (POST)` -> Create new movie
- `/movies/:id (PUT)` -> Update movie
- `/movies/:id (DELETE)`-> Delete movie
 - `/movies/:id/characters/ (POST)`
 - `/movies/:id/characters/:characterId (PUT)` -> Update character in movie
 - `/movies/:id/characters/:characterId (DELETE)` -> Delete character in movie

> ## Folder structure
- src
    - `controllers`
    - `services`
    - `repositories`
    - `routes`
    - `validators`
    - `utils`
    - `models`
    - `seeds`
    - `constants`
    - `connections`
- index.js

> ## Notes
- The env variable DB_URL needs to be encode in base64.

