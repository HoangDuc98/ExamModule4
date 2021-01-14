import {Component, OnInit} from '@angular/core';
import {Booklist} from '../booklist';
import {BookserviceService} from '../services/bookservice.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  addBookForm: any;
  editBookForm: any;
  books: Booklist[] = [];
  book: Booklist | undefined;


  constructor(
    private bookService: BookserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      name: ['', [Validators.required]],
    });
    this.getAll();
  }

  getAll() {
    this.bookService.getAll().subscribe(data => {
      for (const book of data) {
        if (book.read === false) {
          this.books.push(book);
        }
      }
    });
  }

  onSubmit(data: { name: any; }) {
    if (data.name) {
      const book: Booklist = {
        name: data.name,
        read: false
      };
      this.bookService.addBook(book).subscribe(next => {
        this.books.push(book);
        alert('Đã thêm thành công');
      });
      this.addBookForm.patchValue({name: ''});
    }
  }

  update(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
      this.bookService.update(this.book).subscribe(data => {
        console.log(data);

        this.router.navigate(['/unreadbook-list']);
      });
    });
  }

}
