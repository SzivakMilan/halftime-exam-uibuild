document.querySelector("#root").insertAdjacentHTML("beforeend",`
<form>
            <h1>Visszajelzes</h1>

            <input type="text" placeholder="Targy">

            <textarea placeholder="Megjegyzes"></textarea>
            
            <div>
                <input type="checkbox">
                <p>Elolvastam es elfogadom az adatkezelesi tajekoztatot.</p>
            </div>

            <div>
                <input type="checkbox">
                <p>Szeretnek hirlevelet kapni.</p>
            </div>

            <button>Mentes</button>
        </form>
        
`)