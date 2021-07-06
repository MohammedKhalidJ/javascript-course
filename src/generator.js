let responseValue;


function* generatorFunction() {
    console.log("Exec 1");
    yield 'result of Exec 1';
    console.log("Exec 2");
    yield 'result of exec 2';
    console.log("Exec 3");
    yield 'result of exec 3';
    console.log("Exec 4");
    yield 'result of exec 4';
}

const generatorObj = generatorFunction();

    for (const val of generatorObj){
        console.log(val)
    }

