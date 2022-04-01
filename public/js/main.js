const getInfo = async (e)=>{
    e.preventDefault();
    // alert("Hi");
    if(document.getElementById("cityName").value===""){
        document.getElementById("city_name").innerText="Plz write the city name before searching";
    }else{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("cityName").value}&appid=e379da5a242774d868da1dbc1e25b6a9&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            document.getElementById("city_name").innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            document.querySelector(".middle_layer").classList.remove("data_hide");
            document.getElementById("main-temp").innerText=arrData[0].main.temp;
            const tempStatus = arrData[0].weather[0].main;
            const weathericon = document.getElementById("temp_status")
            console.log(arrData[0].weather[0]);
            if (tempStatus == "Sunny") {
                weathericon.innerHTML =
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                weathericon.innerHTML =
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempStatus == "Rainy") {
                weathericon.innerHTML =
                "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                weathericon.innerHTML =
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
        } catch (error) {
            document.getElementById("city_name").innerText="Plz write the city name properly";
        }
    }
}
document.getElementById("submitBtn").addEventListener("click",getInfo);