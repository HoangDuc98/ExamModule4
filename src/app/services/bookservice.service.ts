import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Booklist} from '../booklist';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  url = ' http://[::]:8081/books';

  constructor(private http: HttpClient, private router: Router) {
  }

  getAll(): Observable<Booklist[]> {
    return this.http.get<Booklist[]>(this.url);
  }

  addBook(book: Booklist): Observable<Booklist> {
    return this.http.post<Booklist>(this.url, book);
  }

  destroy(id: number) {
    return this.http.delete<Booklist>(this.url + '/delete' + id);
  }

  getBookById(id: number) {
    return this.http.get<Booklist>(this.url + '/' + id);
  }

  update(book: Booklist) {
    book.read = !book.read;
    return this.http.put<Booklist>(this.url, book);
  }
}
