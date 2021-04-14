-- After successfully imported, alter foreign keys
ALTER TABLE [dbo].[Casts]
ADD FOREIGN KEY (actorId) REFERENCES Actor(id),
FOREIGN KEY (movieId) REFERENCES Movie(id);

ALTER TABLE [dbo].[MovieDirectors]
ADD FOREIGN KEY (movieId) REFERENCES Movie(id),
FOREIGN KEY (directorId) REFERENCES Directors(id);

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

-- Temp
/*
CREATE [ OR ALTER ] { PROC | PROCEDURE }
    [schema_name.] procedure_name [ ; number ]
    [ { @parameter [ type_schema_name. ] data_type }
        [ VARYING ] [ = default ] [ OUT | OUTPUT | [READONLY]
    ] [ ,...n ]
[ WITH <procedure_option> [ ,...n ] ]
[ FOR REPLICATION ]
AS { [ BEGIN ] sql_statement [;] [ ...n ] [ END ] }
[;]

<procedure_option> ::=
    [ ENCRYPTION ]
    [ RECOMPILE ]
    [ EXECUTE AS Clause ]

CREATE PROCEDURE findHigherRatingMovies
    @year NVARCHAR(50),
    @standardValue NVARCHAR(50)
AS

    SET NOCOUNT ON;
    print @LastName + @FirstName
GO

EXECUTE higherRatingMovies N'Ackerman', N'Pilar';
*/