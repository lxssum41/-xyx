import './style/index.less'
import Food from './modules/food'
import ScorePanel from './modules/scorePanel'

const food = new Food()
const score = new ScorePanel()
score.addScore()
score.addLevel()
for(let i = 0; i < 199; i++){
    score.addScore()
}