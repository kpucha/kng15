export class POST {
  public static FIRESTORE_COLLECTION = 'posts';
  public static FIRESTORE_DRAFT_COLLECTION = 'draft-posts';

  public static EDITOR_BUTTON = {
    TABLE: {
      name: 'groupMisc',
      data: [
        {
          name: 'cmdTable',
          toggle: false,
          title: 'Table',
          icon: {
            fa: 'fa fa-table',
          },
          callback: (e: any) => {
            // Replace selection with some drinks
            let chunk;
            let cursor;
            const selected = e.getSelection();
            chunk =
              '\n| Tables        | Are           | Cool  | \n' +
              '| ------------- |:-------------:| -----:| \n' +
              '| col 3 is      | right-aligned | $1600 | \n' +
              '| col 2 is      | centered      |   $12 | \n' +
              '| zebra stripes | are neat      |    $1 |';

            // transform selection and set the cursor into chunked text
            e.replaceSelection(chunk);
            cursor = selected.start;

            // Set the cursor
            e.setSelection(cursor, cursor + chunk.length);
          },
        },
      ],
    },
    TERMINAL: {
      name: 'cmdTerminal',
      data: [
        {
          name: 'cmdTerminal',
          toggle: false,
          title: 'Terminal',
          icon: {
            fa: 'fa fa-terminal',
          },
          callback: (e: any) => {
            // Give/remove ~~ surround the selection
            let chunk;
            let cursor;
            const selected = e.getSelection();
            const content = e.getContent();

            if (selected.length === 0) {
              // Give extra word
              chunk = e.__localize('terminal');
            } else {
              chunk = selected.text;
            }

            // transform selection and set the cursor into chunked text
            if (
              content.substr(selected.start - 1, 1) === '`' &&
              content.substr(selected.end, 1) === '`'
            ) {
              e.setSelection(selected.start - 1, selected.end + 1);
              e.replaceSelection(chunk);
              cursor = selected.start - 1;
            } else {
              e.replaceSelection('`' + chunk + '`');
              cursor = selected.start + 1;
            }

            // Set the cursor
            e.setSelection(cursor, cursor + chunk.length);
          },
        },
      ],
    },
  };
}
