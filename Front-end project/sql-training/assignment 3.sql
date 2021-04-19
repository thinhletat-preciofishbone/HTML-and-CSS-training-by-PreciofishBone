-- After successfully imported, alter foreign keys
ALTER TABLE Casts
	ADD CONSTRAINT casts_actor_ForeignKey
		FOREIGN KEY(actorId)
		REFERENCES Actor (id)

ALTER TABLE Casts
	ADD CONSTRAINT casts_movie_ForeignKey
		FOREIGN KEY(movieId)
		REFERENCES Movie(id)

ALTER TABLE MovieDirectors
	ADD CONSTRAINT movieDirectors_movie_ForeignKey
		FOREIGN KEY(movieId)
		REFERENCES Movie (id)

ALTER TABLE MovieDirectors
	ADD CONSTRAINT movieDirectors_director_ForeignKey
		FOREIGN KEY(directorId)
		REFERENCES Director(id)

-- Question 1: List the first and last names of all the actors who played in the movie 'Officer 444'. [~13 rows expected]
SELECT (IsNull(actor.firstName, '') + ' ' + IsNull(actor.lastName, '')) AS 'Actor name'
FROM Actor actor
INNER JOIN Casts casts ON casts.actorId = actor.id
INNER JOIN Movie movie ON movie.id = casts.movieId
WHERE movie.name = 'Officer 444';

-- Question 2: List all directors who directed 500 movies or more, in descending order of the number of movies they directed. 
-- Return the directors' names and the number of movies each of them directed. [~47 rows]
SELECT (IsNull(director.firstName, '') + ' ' + IsNull(director.lastName, '')) AS 'Director name', COUNT(movieDirectors.movieId) AS 'Movie directed'
FROM Director director
INNER JOIN MovieDirectors movieDirectors ON movieDirectors.directorId = director.id
INNER JOIN Movie movie ON movie.id = movieDirectors.movieId
GROUP BY director.firstName, director.lastName
HAVING COUNT(movieDirectors.movieId) >= 500
ORDER BY COUNT(movieDirectors.movieId) desc

-- Question 3: We want to find actors that played five or more roles in the same movie during the year 2010. 
-- Notice that CASTS may have occasional duplicates, but we are not interested in these: 
-- we want actors that had five or more distinct roles in the same movie in the year 2010. 
-- Write a query that returns the actors' names, the movie name, and the number of distinct roles that they played in that movie 
-- (which will be ≥ 5). [~24 rows]
SELECT (IsNull(actor.firstName, '') + ' ' + IsNull(actor.lastName, '')) AS 'Actor name', movie."name",
COUNT(DISTINCT casts."role") AS 'Number of distinct roles'
FROM Actor actor
INNER JOIN Casts casts ON casts.actorId = actor.id
INNER JOIN Movie movie ON movie.id = casts.movieId
WHERE movie.year = 2010
GROUP BY actor.firstName, actor.lastName, movie."name"
HAVING COUNT(DISTINCT casts."role") >= 5;


-- Question 4: Create Index to improve performance of these queries
-- (!) We have to optimized some tables, therefore, some foreign keys will be removed.
-- (!) Create these foreign keys again after finish optimizing and indexing the tables.

-- From question 1, the index should be hash table index for movie.name (because it uses = or <> operator):
SELECT (IsNull(actor.firstName, '') + ' ' + IsNull(actor.lastName, '')) AS 'Actor name'
FROM Actor actor
INNER JOIN Casts casts ON casts.actorId = actor.id
INNER JOIN Movie movie ON movie.id = casts.movieId
WHERE movie.name = 'Officer 444';
-- (!) New Movie table is created and the old one is renamed to Movie_old
ALTER TABLE Movie ADD INDEX movieNameIndex HASH (name) WITH (BUCKET_COUNT = 2000000);
ALTER TABLE Casts ADD INDEX castsActorIndex NONCLUSTERED (actorId);
ALTER TABLE Casts ADD INDEX castsMovieIndex NONCLUSTERED (movieId);

-- From question 2, the index should be b-tree index for movieDirectors.movieId (because it uses range operator (<, >, between) and order by count):
SELECT (IsNull(director.firstName, '') + ' ' + IsNull(director.lastName, '')) AS 'Director name', COUNT(movieDirectors.movieId) AS 'Movie directed'
FROM Director director
INNER JOIN MovieDirectors movieDirectors ON movieDirectors.directorId = director.id
INNER JOIN Movie movie ON movie.id = movieDirectors.movieId
GROUP BY director.firstName, director.lastName
HAVING COUNT(movieDirectors.movieId) >= 500
ORDER BY COUNT(movieDirectors.movieId) desc

ALTER TABLE movieDirectors ADD INDEX movieDirectorsMovieIndex NONCLUSTERED (movieId)
ALTER TABLE movieDirectors ADD INDEX movieDirectorsDirectorIndex NONCLUSTERED (directorId)

-- From question 3, we will add two index types (b-tree and hash)
SELECT (IsNull(actor.firstName, '') + ' ' + IsNull(actor.lastName, '')) AS 'Actor name', movie."name",
COUNT(DISTINCT casts."role") AS 'Number of distinct roles'
FROM Actor actor
INNER JOIN Casts casts ON casts.actorId = actor.id
INNER JOIN Movie movie ON movie.id = casts.movieId
WHERE movie.year = 2010
GROUP BY actor.firstName, actor.lastName, movie."name"
HAVING COUNT(DISTINCT casts."role") >= 5;

-- (!) The table movieDirectors contains some duplicate rows
-- Check for duplicate rows from Casts
SELECT actorId, movieId, "role", COUNT(*)
FROM Casts
group by actorId, movieId, "role"
having COUNT(*) > 1
-- or
WITH CTE([actorId], 
    [movieId], 
    ["role"], 
    duplicateCount)
AS (SELECT actorId, movieId, "role", ROW_NUMBER() OVER (
	PARTITION BY actorId, movieId, "role" ORDER BY "role") AS DuplicateCount
    FROM Casts)
SELECT *
FROM CTE where duplicateCount > 1;

-- Delete duplicate rows from Casts
WITH CTE([actorId], 
    [movieId], 
    ["role"], 
    duplicateCount)
AS (SELECT actorId, movieId, "role", ROW_NUMBER() OVER (
	PARTITION BY actorId, movieId, "role" ORDER BY "role") AS DuplicateCount
    FROM Casts)
DELETE FROM CTE WHERE DuplicateCount > 1;

-- Add index
ALTER TABLE Movie ADD INDEX movieYearIndex HASH (year) WITH (BUCKET_COUNT = 1600000);
ALTER TABLE Casts ADD INDEX castsRoleIndex NONCLUSTERED ("role")