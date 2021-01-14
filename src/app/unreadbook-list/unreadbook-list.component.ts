import {Component, OnInit} from '@angular/core';
import {Booklist} from '../booklist';
import {BookserviceService} from '../services/bookservice.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unreadbook-list',
  templateUrl: './unreadbook-list.component.html',
  styleUrls: ['./unreadbook-list.component.css']
})
export class UnreadbookListComponent implements OnInit {
  addBookForm: any;
  books: Booklist[] = [];
  book;

  constructor(
    private bookService: BookserviceService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      name: ['']
    });
    this.getAll();

  }

  getAll() {
    this.bookService.getAll().subscribe(data => {
      for (const book of data) {
        if (book.read === true) {
          this.books.push(book);
        }
      }
    });
  }

  update(id) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;

      this.bookService.update(this.book).subscribe(data => {
        this.book = data;
        this.router.navigate(['/book-list']);
      });
    });
  }

}
