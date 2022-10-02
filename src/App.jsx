import {
  listPaddockManagerIds,
  listPaddockManagersByName,
  sortPaddockTypeByTotalArea,
  sortFarmManagerByAdminArea,
  farmManagerNames,
  biggestAvocadoFarms,
  biggestCherriesManagers,
  farmManagerPaddocks,
  paddocksManagers,
  newManagerRanking,
} from "../src/functions/challenge";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Javascript Challenge</h1>
      <hr />
      <section>
        <h3>Pregunta N0 - listPaddockManagerIds</h3>
        <code>{JSON.stringify(listPaddockManagerIds())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N1 - listPaddockManagersByName</h3>
        <code>{JSON.stringify(listPaddockManagersByName())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N2 - sortPaddockTypeByTotalArea</h3>
        <code>{JSON.stringify(sortPaddockTypeByTotalArea())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N3 - sortFarmManagerByAdminArea</h3>
        <code>{JSON.stringify(sortFarmManagerByAdminArea())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N4 - farmManagerNames</h3>
        <code>{JSON.stringify(farmManagerNames())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N5 - biggestAvocadoFarms</h3>
        <code>{JSON.stringify(biggestAvocadoFarms())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N6 - biggestCherriesManagers</h3>
        <code>{JSON.stringify(biggestCherriesManagers())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N7 - farmManagerPaddocks</h3>
        <code>{JSON.stringify(farmManagerPaddocks())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N8 - paddocksManagers</h3>
        <code>{JSON.stringify(paddocksManagers())}</code>
        <hr />
      </section>
      <section>
        <h3>Pregunta N9 - newManagerRanking</h3>
        <code>{JSON.stringify(newManagerRanking())}</code>
        <hr />
      </section>
    </div>
  );
}

export default App;
