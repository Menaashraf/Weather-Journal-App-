const apiKey ="e6afe985be31f369856c26d1d1bab8ed&units=imperial"
let projectData={} ;
const buttom = document.getElementById('generate')
const temp = document.getElementById('temp')
const content = document.getElementById('content')
const d=new Date()
const dateString=d.toDateString()


eventFun = async()=> {
  
  // using api key to get data 
  const zip = document.getElementById('zip').value
  const feeling = document.getElementById('feelings').value
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`
  const res =await fetch(url).then(res=>res.json()).then(res=>{
     projectData.temp=res.main.temp
     projectData.zip=zip
     projectData.feeling=feeling
     projectData.date=dateString})

// using post to send data to server
     serverUrl='http://localhost:8000'
     const post= async (url='',data={})=> {
     const response = await fetch(url, {
          method: 'POST', 
          credentials: 'same-origin', 
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify(projectData),        
        })};

      post(serverUrl+'/add',projectData)

//fetching data from server and changing content
const getProjectData = async () => {
  const response = await fetch(serverUrl + '/all') 
  try {
    const allData = await response.json()
    temp.innerHTML = Math.round(allData.temp)+ '  degrees';
    content.innerHTML = allData.feeling;
    date.innerHTML =allData.date;
    }
    catch(error) {
      console.log("error", error);
    }
} 
  getProjectData()}

// adding event to the buttom
buttom.addEventListener( "click" , eventFun)
