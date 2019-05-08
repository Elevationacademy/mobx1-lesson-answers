import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = []
    @observable length
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        const newItem = new Item(name)
        this.list.push(newItem)
    }
    @action editItem = (name, newLocation) => {
        let item = this.list.find(i => i.name === name)
        item.location = newLocation
        
    }
    @action deleteItem = (name) => {
        let itemIndex = this.list.findIndex(i => i.name === name)
        this.list.splice(itemIndex, 1)
    } 
}

