import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { EditorOption } from 'angular-markdown-editor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from '../../../../modules/layout/layout.service';
import { MarkdownService } from 'ngx-markdown';
import { Renderer2 } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'kng-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit, AfterViewInit {
  constructor(
    private markdownService: MarkdownService,
    private cd: ChangeDetectorRef,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {}

  private layout: LayoutService = inject(LayoutService);

  //TODO REVIEW
  embedGithub = '<kng-embed-github></kng-embed-github>';
  keywords = [] as string[];
  editorOptions: EditorOption = {};
  public previewContent: string = '';

  _type = new FormControl('', [Validators.required]);
  _title = new FormControl('', [Validators.required]);
  _tags = new FormControl([], [Validators.required]);
  _content = new FormControl('', [Validators.required]);

  createPostForm = new FormGroup({
    type: this._type,
    title: this._title,
    tags: this._tags,
    content: this._content,
  });

  ngAfterViewInit(): void {
    let editor = this.elem.nativeElement.querySelector('.md-editor');
    let txtArea = this.elem.nativeElement.querySelector('#editor1');
    let content = this.elem.nativeElement.querySelector('.post-content');
    let buttons = this.elem.nativeElement.querySelectorAll(
      '.btn-default.btn-sm.btn'
    );
    buttons.forEach((button: any) => {
      this.renderer.setAttribute(
        button,
        'class',
        'mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base'
      );
    });
    this.renderer.setAttribute(
      txtArea,
      'class',
      'mat-mdc-form-field w100 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-accent'
    );
    content.addEventListener('scroll', () => {
      console.log(content.scrollTop);
      if (content.scrollTop > 240) {
        console.log('editor.offsetTop', editor.offsetTop);
        console.log('algo se tapa');
        this.renderer.addClass(editor, 'sticky-post-editor');
      } else {
        console.log('es visible');
        this.renderer.removeClass(editor, 'sticky-post-editor');
      }
    });
    console.log('YA DEBERIAN TENER ASPECTO MATERIAL');
  }

  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
    this.layout.setLoading(false);

    this.editorOptions = {
      onChange: (e) => {
        this.previewContent = e.getContent();
        this.cd.detectChanges();
      },
      hiddenButtons: ['cmdPreview', 'cmdCode'],
      fullscreen: { enable: false, icons: {} },
      language: localStorage.getItem('lang') || 'es',
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
    console.log(this.createPostForm.valid);
    console.log(this._title.valid);
    console.log(this._tags.valid);
    console.log(this._content.valid);
    console.log(this.createPostForm.getError);
    console.log('form', this.createPostForm.value);
  }
}
