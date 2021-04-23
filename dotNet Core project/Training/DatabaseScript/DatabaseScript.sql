CREATE TABLE Item
(
	id							nvarchar(20),
	"name"						nvarchar(100),
	createdTime					datetime,
	createdBy					nvarchar(50),
	modifiedTime				datetime,
	modifiedBy					nvarchar(50),
	parentFolderId				nvarchar(20),
	PRIMARY KEY (id),
	FOREIGN KEY (parentFolderId) REFERENCES Item (id),
)

CREATE TABLE "File"
(
	id							nvarchar(20),
	extension					nvarchar(20),
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES Item (id),
)

CREATE TABLE Folder
(
	id							nvarchar(20),
	PRIMARY KEY (id),
	FOREIGN KEY (id) REFERENCES Item (id),
)

-- Sample data
/* 1/ 
	
root/
├─ Study materials/
├─ Games/
│  ├─ README.txt
│  ├─ League of Legends.exe
│  ├─ Setting/
│  │  ├─ Config.json
│  │  ├─ Crack.exe
│  Log.txt

*/
Delete from Folder
Delete from "File"
Delete from Item

drop table Folder
drop table "File"
drop table Item

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-root', 'root', '2021/04/16 15:50:00', 'Thinh Le', '', '', 'folder-root');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000001', 'Study materials', '2021/04/19 09:28:00', 'Thinh Le', '', '', 'folder-root');
INSERT INTO Folder (id) VALUES
('folder-000001');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000002', 'Games', '2021/04/19 09:28:33', 'Thinh Le', '', '', 'folder-root');
INSERT INTO Folder (id) VALUES
('folder-000002');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000003', 'Setting', '2021/04/19 20:01:45', 'Thinh Le', '', '', 'folder-000002');
INSERT INTO Folder (id) VALUES
('folder-000003');

------------------------------------------------------------------------------------------------------
INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000001', 'README', '2021/04/19 09:30:03', 'Thinh Le', '', '', 'folder-000002');
INSERT INTO "File" (id, extension) VALUES
('file-000001', 'txt');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000002', 'League of Legends', '2021/04/19 09:30:55', 'Thinh Le', '', '', 'folder-000002');
INSERT INTO "File" (id, extension) VALUES
('file-000002', 'exe');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000003', 'Log', '2021/04/20 10:04:00', 'Thinh Le', '', '', 'folder-root');
INSERT INTO "File" (id, extension) VALUES
('file-000003', 'txt');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000004', 'Trash file', '2021/04/20 10:32:00', 'Thinh Le', '', 'Thinh Le', 'folder-root');
INSERT INTO "File" (id, extension) VALUES
('file-000004', '');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000005', 'Config', '2021/04/20 15:02:00', 'Thinh Le', '', 'Thinh Le', 'folder-000003');
INSERT INTO "File" (id, extension) VALUES
('file-000005', 'json');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000006', 'Crack', '2021/04/20 15:02:00', 'Thinh Le', '', 'Thinh Le', 'folder-000003');
INSERT INTO "File" (id, extension) VALUES
('file-000006', 'exe');


SELECT * FROM Item
SELECT * FROM Folder WHERE parentFolderId = 'folder-root';
SELECT * FROM "File" WHERE parentFolderId = 'folder-000002';


INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('filetest-0', 'test', '2021/04/20 15:02:00', 'Thinh Le', '', 'Thinh Le', 'folder-root');


DELETE FROM Folder where id like '%test%';
DELETE FROM "File" where id like '%test%';
DELETE FROM Item where id like '%tes%';



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

CREATE PROCEDURE InsertNewItem
    @itemId NVARCHAR(20),
    @itemName NVARCHAR(100),
    @createdTime datetime,
    @createdBy NVARCHAR(50),
    @parentFolderId NVARCHAR(20),
    @extension NVARCHAR(20)
AS
	BEGIN TRANSACTION;  
       INSERT INTO ValueTable VALUES(1);  
       INSERT INTO ValueTable VALUES(2);  
	ROLLBACK;
GO

CREATE PROCEDURE InsertNjewItem (@id            INTEGER,  
                                          @first_name    VARCHAR(10),  
                                          @last_name     VARCHAR(10),  
                                          @salary        DECIMAL(10, 2),  
                                          @city          VARCHAR(20),  
                                          @StatementType NVARCHAR(20) = '')  
AS  
  BEGIN  
      IF @StatementType = 'Insert'  
        BEGIN  
            INSERT INTO employee  
                        (id,  
                         first_name,  
                         last_name,  
                         salary,  
                         city)  
            VALUES     ( @id,  
                         @first_name,  
                         @last_name,  
                         @salary,  
                         @city)  
        END  
  
      IF @StatementType = 'Select'  
        BEGIN  
            SELECT *  
            FROM   employee  
        END  
  
      IF @StatementType = 'Update'  
        BEGIN  
            UPDATE employee  
            SET    first_name = @first_name,  
                   last_name = @last_name,  
                   salary = @salary,  
                   city = @city  
            WHERE  id = @id  
        END  
      ELSE IF @StatementType = 'Delete'  
        BEGIN  
            DELETE FROM employee  
            WHERE  id = @id  
        END  
  END   
  IF @@ERROR = 0  
BEGIN
COMMIT
PRINT 'GOOD'
END
ELSE
BEGIN
ROLLBACK
PRINT 'BAD'
END

/*
CREATE TABLE Folder
(
	id							nvarchar(20),
	"name"						nvarchar(100),
	createdTime					datetime,
	createdBy					nvarchar(50),
	modifiedTime				datetime,
	modifiedBy					nvarchar(50),
	parentFolderId				nvarchar(20),
	PRIMARY KEY (id)
)

CREATE TABLE "File"
(
	id							nvarchar(20),
	"name"						nvarchar(100),
	createdTime					datetime,
	createdBy					nvarchar(50),
	modifiedTime				datetime,
	modifiedBy					nvarchar(50),
	extension					nvarchar(20),
	parentFolderId				nvarchar(20),
	PRIMARY KEY (id),
	FOREIGN KEY (parentFolderId) REFERENCES Folder (id),
)


-- Sample data
/* 1/ 
	
root/
├─ Study materials/
├─ Games/
│  ├─ README.txt
│  ├─ League of Legends.exe

*/

INSERT INTO Folder (id, "name", createdTime, createdBy, modifiedTime, modifiedBy) VALUES
('folder-root', 'root', '2021/04/16 15:50:00', 'Thinh Le', '', '');

ALTER TABLE Folder ADD FOREIGN KEY (parentFolderId) REFERENCES Folder(id);

INSERT INTO Folder (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000001', 'Study materials', '2021/04/16 15:55:00', 'Thinh Le', '', '', 'folder-root');
INSERT INTO Folder (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000002', 'Games', '2021/04/16 15:56:00', 'Thinh Le', '', '', 'folder-root');

INSERT INTO "File" (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, extension, parentFolderId) VALUES
('file-000001', 'README', '2021/04/16 15:55:00', 'Thinh Le', '', '', 'txt', 'folder-000002');
INSERT INTO "File" (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, extension, parentFolderId) VALUES
('file-000002', 'League of Legends', '2021/04/16 15:56:00', 'Thinh Le', '', '', 'exe', 'folder-000002');

SELECT * FROM Folder WHERE parentFolderId = 'folder-root';
SELECT * FROM "File" WHERE parentFolderId = 'folder-000002';

DELETE FROM "File"
*/