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
*/

-- (!) We will add a new index for Gerne table on genre column (hash)
ALTER TABLE Genre ADD INDEX genreGenreIndex HASH (genre) WITH (BUCKET_COUNT = 1000000);

CREATE PROCEDURE getMovieDetails
    @year NVARCHAR(50),
    @movieGenre NVARCHAR(50)
AS
	SELECT movie.name, movie.year, gerne.genre, (IsNull(actor.firstName, '') + ' ' + IsNull(actor.lastName, '')) AS 'Actor name'
	FROM Actor actor
	INNER JOIN Casts casts ON casts.actorId = actor.id
	INNER JOIN Movie movie ON movie.id = casts.movieId
	INNER JOIN Genre gerne ON gerne.movieId = movie.id
	WHERE movie.year = @year AND gerne.genre = @movieGenre AND role like '%self'
GO

EXECUTE getMovieDetails 2007, 'Short';
