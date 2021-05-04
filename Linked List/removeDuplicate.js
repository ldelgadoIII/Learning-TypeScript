function solution(){

    this.removeDuplicates=function(head){
      //Write your code here
      if(head.next){
          if(head.data === head.next.data){
              head.next = head.next.next || null;
              this.removeDuplicates(head)
          } else {
              this.removeDuplicates(head.next)
          }
      }
      
      return head;
    }
}