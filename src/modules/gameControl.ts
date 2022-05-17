import Food from './food'
import ScorePanel from './scorePanel'
import Snake from './snake'

class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    direction: string = ''
    isLive: boolean = true

    constructor() {
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.snake = new Snake()

        this.init()

    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    run() {
        let X = this.snake.getX()
        let Y = this.snake.getY()
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break
            case "ArrowDown":
                Y += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowRight":
                X += 10
                break
        }

        this.checkEat(X,Y)

        try {
            this.snake.setX(X)
            this.snake.setY(Y)
        } catch (error) {
            this.isLive = false
            alert(error)
        }
        

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }

    checkEat(X: number,Y: number){
        if(X === this.food.getX() && Y === this.food.getY()){
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl