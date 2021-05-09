//Ссылка в задании не работала, я взял другую API
const state = document.querySelector('#state')
const covid = document.querySelector('#covid')

fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "af7856b94cmsh949a7d83254001cp12970bjsn2b5126bda95a",
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com"
	}})
.then(response => 
	response.json()
)
.then(data=>{
   new Corona(data).show()
    console.log(data)
})

class Corona{

    constructor(data){
        this.data = data
    }

show(){
        state.innerHTML += `
        <h1>${this.data[0].Continent}</h1>
        <h5>COVID-19</h5>
        `
        covid.innerHTML+=`
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">New cases</th>
                <th scope="col">New deaths</th>
              </tr>
            </thead>
            <tbody id = "cases">
            </tbody>
        </table>
        `
        state.style.cssText =  `text-align: center; background: url(https://thumbs.dreamstime.com/b/%D1%82%D0%BA%D0%B0%D0%BD%D1%8C-%D0%B1%D0%B0%D1%80%D1%85%D0%B0%D1%82%D0%B0-%D1%84%D0%BB%D0%B0%D0%B3%D0%B0-%D1%81%D1%88%D0%B0-%D1%84%D0%BB%D0%B0%D0%B3-%D1%81%D0%BE%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D1%85-%D1%88%D1%82%D0%B0%D1%82%D0%BE%D0%B2-%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8-%D0%B2-%D0%B7%D0%B0%D0%BC%D1%88%D0%B5-e-103354711.jpg) no-repeat;
        background-size: 100%; padding:5vh; color:white; text-shadow:1px 1px 2px red, 0 0 3em red, 0 0 0.9em black;
        `
        const cases = document.querySelector('#cases')

        for(let i = 0; i<this.data.length; i++){
            cases.innerHTML +=  `
            <tr>
            <th>${this.data[i].date}</th>
            <th>${this.data[i].new_cases}</th>
            <th>${this.data[i].new_deaths}</th>
            </tr>
            `
    }

    }
}
