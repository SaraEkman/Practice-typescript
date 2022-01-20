import { IDataService } from './models/IDataService'
import { Movie } from './models/movie'
import {MockMovieService, MovieService} from './models/MovieService'

window.onload = function () {
    let service = new MockMovieService()
    let main = new Main()
    // console.log(main.start(service));
    main.start(service)

    // let href = main.start().poster.href
    // document.body.innerHTML = `<img src=${href}>`

}

class Main {
  start(service:IDataService) {
    let p = new Movie()
    p.title = 'Sara'
    p.poster = new URL
          ('https://png.pngtree.com/png-clipart/20191120/original/pngtree-pink-watercolor-brushes-png-image_5054156.jpg')
    //   console.log(p);
    //   return p
      console.log(service.GetData());
    }
    
}
