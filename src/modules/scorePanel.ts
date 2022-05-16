class ScorePanel {
    score = 0
    level = 1

    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxLevel: number
    count: number

    constructor(maxLevel:number = 10,count: number = 10) {
        this.scoreEle = document.querySelector('#score span')!
        this.levelEle = document.querySelector('#level span')!
        this.maxLevel = maxLevel
        this.count = count
    }

    addScore() {
        this.score += 1
        this.scoreEle.innerHTML = this.score + ''

        if (this.score % this.count === 0) {
            this.addLevel()
        }
    }

    addLevel() {
        if (this.level < this.maxLevel) {
            this.level += 1
            this.levelEle.innerHTML = this.level + ''
        }
    }
}


export default ScorePanel