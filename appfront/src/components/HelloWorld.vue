// appfront/src/components/HelloWorld.vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- show books list -->
    <ul>
      <li v-for="(book, index) in books" :key="index" style="display:block">
        {{index}}-{{book.title}}-{{book.author}}--{{book.description}}
      </li>
    </ul>
    <!-- form to add a book -->
    <form action="">
      输入书名：<input type="text" placeholder="book title" v-model="inputBook.title"><br>
      输入作者：<input type="text" placeholder="book author" v-model="inputBook.author"><br>
      输入描述：<input type="text" placeholder="book description" v-model="inputBook.description"><br>
    </form>
    <button type="submit" @click="bookSubmit()">submit</button>
  </div>
</template>

<script>
import {getBooks, postBook} from "../api/api.js"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'It\'s a book list!',
      // books list data
      books: [],
      // book data in the form
      inputBook: {
        "title": "",
        "author": "",
        "description": "",
      }
    }
  },
  methods: {
    loadBooks () {
      getBooks().then(res => {
        this.books = res.data
      })
    }, // load books list when visit the page
    bookSubmit () {
      postBook(this.inputBook.title, this.inputBook.author, this.inputBook.description).then(res => {
        console.log(res)
        this.loadBooks()
      })
    } // add a book to backend when click the button
  },
  created: function () {
    this.loadBooks()
  }
}
</script>
