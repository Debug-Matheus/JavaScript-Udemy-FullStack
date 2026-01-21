function* geradora5(){
    yield function(){
        console.log('Primeira execução')
    }
    return function(){
        console.log('Executando return')
    }
    yield function(){
        console.log('Segunda execução')
    }
}
const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value

func1()
func2()
func3()