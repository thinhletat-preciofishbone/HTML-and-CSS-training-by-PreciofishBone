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

*/

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-root', 'root', '2021/04/16 15:50:00', 'Thinh Le', '', '', 'folder-root');
INSERT INTO Folder (id) VALUES
('folder-root');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000001', 'Study materials', '2021/04/19 09:28:00', 'Thinh Le', '', '', 'folder-root');
INSERT INTO Folder (id) VALUES
('folder-000001');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('folder-000002', 'Games', '2021/04/19 09:28:33', 'Thinh Le', '', '', 'folder-root');
INSERT INTO Folder (id) VALUES
('folder-000002');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000001', 'README', '2021/04/19 09:30:03', 'Thinh Le', '', '', 'folder-000002');
INSERT INTO "File" (id, extension) VALUES
('file-000001', 'txt');

INSERT INTO Item (id, "name", createdTime, createdBy, modifiedTime, modifiedBy, parentFolderId) VALUES
('file-000002', 'League of Legends', '2021/04/19 09:30:55', 'Thinh Le', '', '', 'folder-000002');
INSERT INTO "File" (id, extension) VALUES
('file-000002', 'exe');

SELECT * FROM Folder WHERE parentFolderId = 'folder-root';
SELECT * FROM "File" WHERE parentFolderId = 'folder-000002';

DELETE FROM "File"

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