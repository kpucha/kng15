import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { LayoutService } from '../../../modules/layout/layout.service';
import { MarkdownService } from 'ngx-markdown';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'kng-edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {
  constructor(
    private markdownService: MarkdownService,
    private layout: LayoutService,
    private sanitizer: DomSanitizer,
    private cd: ChangeDetectorRef
  ) {}

  embedGithub = '<kng-embed-github></kng-embed-github>';
  markdown = '```java \n System.out.println(aaaa) \n```';
  keywords = [] as string[];
  tagControl = new FormControl(['']);
  titleControl = new FormControl('');
  contentControl = new FormControl('');
  editorOptions: EditorOption = {};
  editPostForm = new FormGroup({
    title: this.titleControl,
    tags: this.tagControl,
    content: this.contentControl,
  });
  public previewContent: string = '';

  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
    this.layout.setLoading(false);

    this.editorOptions = {
      onChange: (e) => {
        this.previewContent = e.getContent();
        console.log('PVC', this.previewContent);
        this.cd.detectChanges();
      },
      hiddenButtons: ['cmdPreview', 'cmdCode'],
      additionalButtons: [
        [
          {
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
          {
            name: 'groupMisc',
            data: [
              {
                name: 'cmdGithub',
                toggle: false,
                title: 'Table',
                icon: {
                  fa: 'fa fa-ok',
                },
                callback: (e: any) => {
                  // Replace selection with some drinks
                  let chunk;
                  let cursor;
                  const selected = e.getSelection();

                  chunk = '<iframe src="www.google.com"></iframe>';

                  // transform selection and set the cursor into chunked text
                  e.replaceSelection(chunk);
                  cursor = selected.start;

                  // Set the cursor
                  e.setSelection(cursor, cursor + chunk.length);
                },
              },
            ],
          },
          {
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
          {
            name: 'cmdBlockOfCode',
            data: [
              {
                name: 'cmdBlockOfCode',
                toggle: false,
                title: 'Codeblock',
                icon: {
                  fa: 'fa fa-code',
                },
                callback: (e: any) => {
                  // Give/remove ~~ surround the selection
                  let chunk;
                  let cursor;
                  const selected = e.getSelection();
                  const content = e.getContent();

                  if (selected.length === 0) {
                    // Give extra word
                    chunk = e.__localize('codeblock');
                  } else {
                    chunk = selected.text;
                  }

                  // transform selection and set the cursor into chunked text
                  if (
                    content.substr(selected.start - 4, 4) === '```\n' &&
                    content.substr(selected.end, 4) === '\n```'
                  ) {
                    e.setSelection(selected.start - 4, selected.end + 4);
                    e.replaceSelection(chunk);
                    cursor = selected.start - 4;
                  } else {
                    e.replaceSelection('```\n' + chunk + '\n```');
                    cursor = selected.start + 4;
                  }

                  // Set the cursor
                  e.setSelection(cursor, cursor + chunk.length);
                  this.cd.detectChanges();
                },
              },
            ],
          },
        ],
      ],
      parser: (val: any) => this.markdownService.parse(val.trim()),
    };
  }
  hidePreview() {
    console.log('HIDE PREVIEW');
  }

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: any): void {
    const value = (event.value || '').trim();
    if (value) {
      this.keywords.push(value);
    }
    event.chipInput!.clear();
  }

  getSlug(title: string | null): string {
    if (title == null) return '';
    return title.replaceAll(' ', '-').toLowerCase().trim();
  }

  submit() {
    console.log('form', this.editPostForm.value);
    console.log('title', this.editPostForm.value.title);
    console.log('tags', this.editPostForm.value.tags);
    console.log('content', this.editPostForm.value.content);
  }
}
