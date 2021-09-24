export function config() {
    return {
        img: [
            // List all file names from the folder ./assets/ that you want to use
            'cat.png',
            'dog.png',
            'mouse.png',
            'lion.png',
        ]
    };
}

export function app(draw) {
    let buttons = []
    function drawButton(label, x, y){
        draw.rect(x, y,  200, 25, "green")
        draw.text(label, x + 5, y + 20, "red")
    }
    // This function is executed when the application starts
    function start() {
        draw.grid()
        buttons.push({label: "Hello Canvas!", x: 100, y: 200})
        buttons.push({label: "Click Me!", x: 500, y: 300})
        buttons.push({label: "Hello there!", x: 200, y: 400})


        drawScene()
    }
    function drawScene(){
        for (const button of buttons) {
            drawButton(button.label, button.x, button.y)
        }
    }
    // This function is executed when you click on the page
    function onClick(x, y) {
        console.log(x, y);
        for (const button of buttons) {
            if(x >=  button.x && x <= button.x + 200){
                if(y >= button.y && y <= button.y + 25){
                    alert(`You clicked the button ${button.label}`)
                }
            }
        }
        
    }

    // This function is executed when you press a key on the keyboard
    function onKey(key, pressed) {
        console.log(key, pressed);

    }

    return {
        start,
        onClick,
        onKey
    };
}
