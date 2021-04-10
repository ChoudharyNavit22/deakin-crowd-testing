// dummy data to emulate the proects rest api

const dummyProject={
  author:'alessio',
  imageUrl:'https://getwallpapers.com/wallpaper/full/f/3/a/807159-download-funny-cats-wallpapers-1920x1200-meizu.jpg',
  videoUrl:'https://youtu.be/SkgTxQm9DWM',
  uniqueID:'4',
  description:'We want to create an environemntal and dogs free farm for cats',
  title:'CatsFarm'
}

let dummyData=[dummyProject,dummyProject]


const newProject=()=>{
  let name = $('#name').val()
  let title = $('#title').val()
  let video = $('#video').val()
  let image = $('#image').val()
  let description = $('#description').val()
  
  let project={name,title,video,image,description
  }
  console.log(project)

}


const testButtonFunction=()=>{
  //alert('Thank you for clicking')
}


// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    console.log('Random number: ' + msg);
})

//appensa the project row with objects of type project 
listProjects=(projects)=>{
  projects.forEach(project => {
    console.log(project)
    let item='<div class="card">'+
      '<div class="card-image waves-effect waves-block waves-light">'+
       ' <img class="activator" src="'+project.imageUrl+'">'+
      '</div>'+
      '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+project.title+'<i class="material-icons right">more_vert</i></span>'+
        '<p><a href="'+project.videoUrl+'">Youtube Video</a></p><p>'+project.author+'</p>'+
      '</div>'+
      '<div class="card-reveal">'+
       ' <span class="card-title grey-text text-darken-4">'+project.title+'<i class="material-icons right">close</i></span>'+
        '<p>'+project.description+'</p>'+
     '</div>'+
    '</div>'+
    '<div class="row" id="projectsList"></div>'          
    
    $('#listProjects').append(item)
  });

}


// INITIALIZATION 

$(document).ready(function(){
  console.log('Ready')

  // get data and build the ui component
  listProjects(dummyData)

  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })

  /// modal window initialize
  $('.modal').modal();


})
