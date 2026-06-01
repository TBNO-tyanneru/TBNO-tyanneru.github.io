function startBattle() {

    const unitA = {
        name: "ゴジラ",
        hp: 500,
        attack: 40
    };

    const unitB = {
        name: "メカゴジラ",
        hp: 450,
        attack: 50
    };

    while (unitA.hp > 0 && unitB.hp > 0) {

        unitB.hp -= unitA.attack;

        if (unitB.hp <= 0) {
            break;
        }

        unitA.hp -= unitB.attack;
    }

    let winner;

    if (unitA.hp > 0) {
        winner = unitA.name;
    } else {
        winner = unitB.name;
    }

    document.getElementById("result").textContent =
        winner + " の勝利！";
}