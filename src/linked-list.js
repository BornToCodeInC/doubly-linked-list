const Node = require('./node');

class LinkedList {
    constructor() {
        this.length=0;
        this._head=new Node();
        this._tail=this._head;
    }

    append(data) {
        let node = new Node(data);
        if(this.length!=0){
            this._tail.next=node;
            node.prev=this._tail;
            this._tail=node;
        }
        else{
			this._head.data=node.data;
			node=null;
        }
        this.length++;
		
		return this;
    }

    head() {
		return this._head.data;
    }

    tail() {
		return this._tail.data;
    }

    at(index) {
        let currNode=this._head;
        let currLength= this.length;
        let currIndex=0;
        if(currLength===0 || index>=currLength || index<currIndex){
            return -1;
        }
        else{
            while(currIndex<index){
                currIndex++;
                currNode=currNode.next;
            }
            return currNode.data;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);
        let currNode=this._head;
		let currLength= this.length;
        let prevNode;
        let currIndex=0;
		if(currLength===0 || index>=currLength || index<currIndex){
            return -1;
        }
        if(index === currIndex){
            node.next=currNode;
			currNode.prev=node;
            this._head=node;
        }
        else if(index===this._length-1){
			this._tail.next=node;
			node.prev=this._tail;
			this._tail=node;
		}
		else{
            while(currIndex<index){
                currIndex++;
                currNode=currNode.next;
            }
			prevNode=currNode.prev;
            node.next=currNode;
            prevNode.next=node;
			currNode.prev=node;
			node.prev=prevNode;
        }
        this.length++;
		return this;
    }

    isEmpty() {
        if(this.length==0){
            return true;
        }
        else{
            return false;
        }
    }

    clear() {
        if(this.length!=0){
            while (this._head.data!==null){
				this.deleteAt(0);
			}
        }
		return this;
    }

    deleteAt(index) {
        let currNode=this._head;
        let currLength= this.length;
        let currIndex=0;
        let prevNode;
		let delNode;
		let nextNode;
        if(currLength===0 || index>=currLength || index<0){
            return -1;
        }
        if(index===currIndex){
			if (currNode.next===null){
				this._head.data=null;
			}
			else{
				this._head=currNode.next;
				this._head.prev=null;
			}
        }
        else if(index===this._length-1){
            this._tail=this._tail.prev;
			this._tail.next=null;
        }
        else{
            while(currIndex<index){
                currIndex++;
                currNode=currNode.next;
            }
            prevNode=currNode.prev;
			delNode=currNode;
			nextNode=currNode.next;
			
			prevNode.next=nextNode;
			nextNode.prev=prevNode;
			delNode=null;
        }
        this.length--;
		
		return this;
    }

    reverse() {
        if(!(this.length<=1)){
			let currNode=this._head;
			for(let i=0; i<this.length;i++){
				let tmp=currNode.next;
				currNode.next=currNode.prev;
				currNode.prev=tmp;
				currNode=currNode.prev;
			}
			let tmp=this._head;
			this._head=this._tail;
			this._tail=tmp;
        }
		return this;
    }

    indexOf(data) {
        let currNode=this._head;
        let currLength= this.length;
        let currIndex= -1;
        while(currNode){
            currIndex++;
            if(currNode.data===data){
                return currIndex;
            }
            currNode=currNode.next;
        }
        return -1;
    }
}

module.exports = LinkedList;

