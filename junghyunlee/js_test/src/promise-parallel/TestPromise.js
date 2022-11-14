

const TestPromise = () => {
    //let sum = 0

    // 오늘 학습한 Promise를 사용해서
    // 현재 20초가량 소요되는 이 코드의 속도를 높여보자!
    // (아무런 의미 없이 그냥 오래 걸리는 녀석임)

    // 이 코드가 안돌아가는 컴퓨터의 경우
    // 스레드를 자동으로 분할해주는 코드가 돌게 되는데
    // 그 부분에서 먹통이 될 가능성이 높음
    // for(var i = 1; i <= 100000000; i++) {
    //     sum += (i * 0.000000001) * Math.sin(i * Math.PI / 180.0)
    //     sum += (i * 0.00000001) * Math.cos(i * Math.PI / 90.0)
    //     sum += (i * 0.0000001) * Math.sin(i * Math.PI / 270.0)
    //     sum += (i * 0.000001) * Math.cos(i * Math.PI / 240.0)
    //     //sum += (i * 0.00001) * Math.sin(i * Math.PI / 360.0)
    // }

    console.log("PromiseTest Start")

    const promise = new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log("Hello ")
                let sum = 0

                for(var i = 1; i <= 100000000; i++) {
                    sum += (i * 0.000000001) * Math.sin(i * Math.PI / 180.0)
                    sum += (i * 0.00000001) * Math.cos(i * Math.PI / 90.0)
                    sum += (i * 0.0000001) * Math.sin(i * Math.PI / 270.0)
                    sum += (i * 0.000001) * Math.cos(i * Math.PI / 240.0)
                    //sum += (i * 0.00001) * Math.sin(i * Math.PI / 360.0)
                }
                console.log(sum)
            }, 2000)
        }
        // then 은 체인(chain)처럼 원하는 만큼 연결이 가능하다.
    ).then(function () {
        console.log("World!!!")
    }).then(function () {
        console.log("빠세!!!!")
    }).then(function () {
        console.log("훠우!!!")
    })



    return (
        <div className="TestPromise">
            <p>TestPromise</p>
        </div>
    )
}

export default TestPromise