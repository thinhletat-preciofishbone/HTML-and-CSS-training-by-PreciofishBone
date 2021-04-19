/*
  root/
  ├─ assignment/
  │  ├─ assignment 1.ts
  │  ├─ assignment 2.ts
  │  ├─ records/
  │  │  ├─ record 1.mp4
  │  │  ├─ record 2.mp4
  ├─ readme.txt
  ├─ note.txt
*/

const root: any = {
  id: 'folder-root',
  name: 'root',
  createdTime: '2021/04/12 08:54:00',
  createdBy: 'Administrator',
  modifiedTime: '2021/04/12 08:54:00',
  modifiedBy: 'Administrator',
  subFolderItems: [
    {
      id: 'folder-000002',
      name: 'assignment',
      createdTime: '2021/04/12 09:07:00',
      createdBy: 'Thinh Le',
      modifiedTime: '2021/04/12 09:07:00',
      modifiedBy: 'Thinh Le',
      subFolderItems: [
        {
          id: 'folder-000003',
          name: 'record',
          createdTime: '2021/04/12 09:10:00',
          createdBy: 'Thinh Le',
          modifiedTime: '',
          modifiedBy: '',
          subFolderItems: [],
          fileItems: [
            {
              id: 'file-000005',
              name: 'record 1',
              extension: 'ts',
              createdTime: '2021/04/12 09:16:17',
              createdBy: 'Thinh Le',
              modifiedTime: '',
              modifiedBy: '',
            },
            {
              id: 'file-000006',
              name: 'record 2',
              extension: 'ts',
              createdTime: '2021/04/12 09:16:24',
              createdBy: 'Thinh Le',
              modifiedTime: '',
              modifiedBy: '',
            },
          ],
        },
        {
          id: 'folder-000005',
          name: 'd4ng3r0Us f0ld3r',
          createdTime: '2021/04/13 14:49:00',
          createdBy: 'Thinh Le',
          modifiedTime: '',
          modifiedBy: '',
          subFolderItems: [],
          fileItems: [
            {
              id: 'file-000007',
              name: 's4fe pr0gram',
              extension: 'exe',
              createdTime: 'A few second ago',
              createdBy: 'Thinh Le',
              modifiedTime: '',
              modifiedBy: '',
            },
          ],
        },
      ],
      fileItems: [
        {
          id: 'file-000003',
          name: 'assignment 1',
          extension: 'ts',
          createdTime: '2021/04/12 09:14:10',
          createdBy: 'Thinh Le',
          modifiedTime: '',
          modifiedBy: '',
        },
        {
          id: 'file-000004',
          name: 'assignment 2',
          extension: 'ts',
          createdTime: '2021/04/12 09:14:38',
          createdBy: 'Thinh Le',
          modifiedTime: '',
          modifiedBy: '',
        },
      ],
    },
  ],
  fileItems: [
    {
      id: 'file-000001',
      name: 'readme',
      extension: 'txt',
      createdTime: '2021/04/12 08:56:00',
      createdBy: 'Thinh Le',
      modifiedTime: '2021/04/12 08:56:00',
      modifiedBy: 'Thinh Le',
    },
    {
      id: 'file-000002',
      name: 'note',
      extension: 'docx',
      createdTime: '2021/04/12 08:59:00',
      createdBy: 'Thinh Le',
      modifiedTime: '2021/04/12 08:59:00',
      modifiedBy: 'Thinh Le',
    },
  ],
};

export default root;