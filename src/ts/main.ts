import { Movie } from './models/movie'

window.onload = function () {
  let main = new Main()
  main.start()
}

class Main {
  start() {
    let p = new Movie()
    p.title = 'Sara'
    p.poster =
      'https://png.pngtree.com/png-clipart/20191120/original/pngtree-pink-watercolor-brushes-png-image_5054156.jpg'
  }
}
