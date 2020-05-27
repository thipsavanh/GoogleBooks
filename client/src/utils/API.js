import axios from "axios";

export default {
  searchBooks: function(query) {
    return axios.get("/https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};