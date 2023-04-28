import { CreatePostForm, Post } from '../post.interface';
import { EditorOption } from 'angular-markdown-editor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LayoutService } from '../../../../modules/layout/layout.service';
import { MarkdownService } from 'ngx-markdown';
import { POST } from '../post.constants';
import { PostService } from '../post.service';
import { PostType } from '../post.enums';
import { Renderer2 } from '@angular/core';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'kng-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit, AfterViewInit {
  //TODO REVIEW
  typeKeys = [] as string[];
  tagsList = [] as string[];
  editorOptions: EditorOption = {};
  public previewContent: string = '';

  constructor(
    private markdownService: MarkdownService,
    private cd: ChangeDetectorRef,
    private elem: ElementRef,
    private renderer: Renderer2,
    private layout: LayoutService,
    private postService: PostService
  ) {
    this.typeKeys = Object.keys(PostType);
  }

  _type = new FormControl('', [Validators.required]);
  _title = new FormControl('', [Validators.required, Validators.minLength(10)]);
  _slug = new FormControl('', [Validators.required]);
  _tags = new FormControl([], [Validators.required]);
  _content = new FormControl('', [Validators.required]);

  createPostForm = new FormGroup({
    type: this._type,
    title: this._title,
    slug: this._slug,
    tags: this._tags,
    content: this._content,
  });

  tryRedirect() {
    this.postService.goToPost();
  }

  ngOnInit(): void {
    this.layout.setActiveLink('/blog');
    this.setEditoprOptions();
    this._title.valueChanges.subscribe((tit: any) => {
      this._slug.patchValue(this.postService.getSlug(tit));
    });
  }

  ngAfterViewInit(): void {
    this.fixEditorClasses();
    this.createPostForm.markAllAsTouched();
    this.layout.setLoading(false);
  }

  submit(isDraft?: boolean): void {
    if (this.createPostForm.valid) {
      let rawForm: CreatePostForm =
        this.createPostForm.getRawValue() as CreatePostForm;
      if (isDraft) {
        this.postService.submitDraft(rawForm);
      } else {
        this.postService.submitPost(rawForm);
      }
    }
  }

  removeTag(tag: string) {
    const index = this.tagsList.indexOf(tag);
    if (index >= 0) {
      this.tagsList.splice(index, 1);
    }
  }

  addTag(event: any): void {
    const value = (event.value || '').trim();
    if (value && this.tagsList.indexOf(value) == -1) {
      this.tagsList.push(value);
    }
    event.chipInput!.clear();
  }

  private setEditoprOptions() {
    this.editorOptions = {
      onChange: (e) => {
        this.previewContent = e.getContent();
        this.cd.detectChanges();
      },
      hiddenButtons: ['cmdPreview'],
      fullscreen: { enable: false, icons: {} },
      language: localStorage.getItem('lang') || 'es',
      additionalButtons: [
        [POST.EDITOR_BUTTON.TERMINAL, POST.EDITOR_BUTTON.TABLE],
      ],
      parser: (val: any) => this.markdownService.parse(val.trim()),
    };
  }

  private fixEditorClasses() {
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
    let txtArea = this.elem.nativeElement.querySelector('#editor1');
    this.renderer.setAttribute(
      txtArea,
      'class',
      'mat-mdc-form-field w100 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-hide-placeholder mat-accent'
    );
  }
}
