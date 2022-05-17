import { Bundle } from "typescript"

class Snake{
    head: HTMLElement
    bodies: HTMLCollection
    element: HTMLElement

    constructor() {
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    getX(){
        return this.head.offsetLeft
    }
    getY(){
        return this.head.offsetTop
    }

    setX(value: number){
        if(this.getX() === value){
            return
        }

        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            if(value > this.getX()){
                value = this.getX() - 10
            }else{
                value = this.getX() + 10
            }
        }

        this.moveBody()
        
        this.head.style.left = value + 'px'
        this.eatBody()
    }
    setY(value: number){
        if(this.getY() === value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error('蛇撞墙了')
        }

        
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            if(value > this.getY()){
                value = this.getY() - 10
            }else{
                value = this.getY() + 10
            }
        }

        this.moveBody()
        
        this.head.style.top = value + 'px'
        this.eatBody()
    }

    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }

    // 吃到食物增加身体，身体跟着前一个移动
    moveBody(){
        for(let i = this.bodies.length - 1; i > 0; i--){
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    eatBody(){
        for(let i = 1; i < this.bodies.length - 1; i++){
            if((this.getX() === (this.bodies[i] as HTMLElement).offsetLeft) && (this.getY() === (this.bodies[i] as HTMLElement).offsetTop)){
                throw new Error('Game Over')
            }
        }
        return
    }

}

export default Snake