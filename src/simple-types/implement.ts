type Book = {
  id: number;
  name: string;
  price: number;
  lokasi?: string; // optional
};

interface BookService {
  getBook(id: number): Book;
}

class BookServiceImpl implements BookService {
  getBook(id: number): Book {
    const res: Book = {
      id: 12,
      name: "Madilog",
      price: 100000,
    };

    return res;
  }
}

const buku = new BookServiceImpl();
console.log(buku.getBook(12));
