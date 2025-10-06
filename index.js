function search(){
   let movieTag = document.getElementById("movieTag")
   let movie = movieTag.value
   console.log(movie)
   let apiKey="f61442c3"
   let url = "https://www.omdbapi.com/?apikey="+apiKey+"&t="+movie
   let httpRequest = new XMLHttpRequest()
   httpRequest.open("GET",url)
   httpRequest.responseType = "json"
   httpRequest.send()

   httpRequest.onload = function(){
        console.log(httpRequest.response)
        let posterTag = document.getElementById("poster")
        let titleTag = document.getElementById("title")
        let plotTag = document.getElementById("plot")
        let tagLineTag = document.getElementById("tagLine")
        let ratingTag = document.getElementById("rating")
        let awardsTag = document.getElementById("Awards")
       

        posterTag.src = httpRequest.response.Poster
        titleTag.innerHTML = httpRequest.response.Title
        plotTag.innerHTML = httpRequest.response.Plot
        tagLineTag.innerHTML = httpRequest.response.Writer
        ratingTag.innerHTML = httpRequest.response.imdbRating
        awardsTag.innerHTML = httpRequest.response.Awards
        
        


    }

}



