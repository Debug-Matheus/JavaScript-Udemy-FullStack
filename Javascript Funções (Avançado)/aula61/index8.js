function* geradora5(){
    yield function(){
        console.log('Primeira execução')
    }
    yield function(){
        console.log('Segunda execução')
    }
}
const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()