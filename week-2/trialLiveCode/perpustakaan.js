const fs = require('fs')
const listBook = fs.readFileSync('./listBook.txt', 'utf8')

class Library {
  constructor() {
    this.readingDays = readingDays
  }
}

class Book {
  constructor(title, author, totalPage) {
    this.title = title
    this.author = author
    this._totalPage = totalPage
    this.readingDays = null
    this.isAvail = true
  }

  readingDays() {
  }
}

class Biography extends Book {
  constructor(title, author, totalPage) {
    super(title, author, totalPage)
  }
}

class Journal extends Book {
  constructor(title, author, totalPage, figure) {
    super(title, author, totalPage)
    this.figure = figure
  }
}

class History extends Book {
  constructor(century) {
    super(title, author, totalPage)
    this.century = century
  }
}

class ListBook {
  static pharseListBook(listBook) {
    let listBookArr = []
    let pharseListBook = listBook.split('\r\n')
    for (let i = 0; i < pharseListBook.length; i++) {
      var str = ''
      for (let j = 0; j < pharseListBook[i].length; j++) {
        if (str === 'Journal') {
          let journal = new Journal ('jatuh', 'udin', 78, 'helmi')
          listBookArr.push(journal)
          str = ''
        } else if (str === 'Biography') {
          let biography = new Biography ('Soekarno', 'sayuti Malik', 87)
          listBookArr.push(biography)
        } else if (pharseListBook[i][j] === '') {
          
        } else if (pharseListBook[i][j] === ',') {
          str = ''
        } else {
          str += pharseListBook[i][j]
        }
      }
    }
    return listBookArr
  }
}
// console.log(listBook)
let pharseListook = listBook.split('\n')
console.log(pharseListook);


// console.log(ListBook.pharseListBook(listBook))

// let book = new Book()