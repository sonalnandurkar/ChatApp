import { isNgTemplate } from '@angular/compiler';
import { Component , ViewChild ,TemplateRef  } from '@angular/core';
import * as $ from 'jquery'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
 
  //constructor(){}
//    users:any= [
//     { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
//     { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
//     { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
//     { firstName: 'riya', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
   
// ];
 public innerWidth: any;

ngOnInit(){
  
  this.innerWidth = window.innerWidth;

   
    // $(document).ready(function(){
        
    //   var arr:any = []; // List of users 
     
    // $(document).on('click', '.card_head', function() { 
    //   $('.div_wrap').slideToggle('slow');
    //   return false;
    //  });
      
    // if(innerWidth > 768){ 
    //   $(document).on('click', '.msg_head', function() { 
    //   var chatbox = $(this).parents().attr("rel") ;
    //   $('[rel="'+chatbox+'"] .msg_wrap').slideToggle('slow');
    //   return false;
    //   });
    // }
    
    //   $(document).on('click', '#close', function() { 
    //   var chatbox = $(this).parents().parents().attr("rel");
    //   $('[rel="'+chatbox+'"]').remove();
    //   arr.splice($.inArray(chatbox, arr), 1);
    //   displayChatBox();
    //   return false;
    //   });
      
    // if(innerWidth > 768 ){
    //  var count = 0;
    //   $(document).on('click', '#sidebar-user-box', function() {
     
      
      
    //   var userID = count;
    //   //var userID = $(this).attr("class");
    //   var username = $(this).children().text() ;
    

    //  if ($.inArray(userID, arr) != -1)
    //   {
    //       arr.splice($.inArray(userID , arr), 1);
               
    //   }
    
    //  arr.unshift(userID);
     
    //     var chatPopup =  '<div class="msg_box" style="left:355px" rel="'+ userID+'">'+
    //       '<div class="msg_head">'+username +'<div id="close" class="glyphicon glyphicon-remove"></div></div>'+
    //       '<div class="msg_wrap"> <div class="msg_body"> <div class="msg_push"></div> </div>'+
    //       '<div class="msg_footer"><button type="button" class="btn btn-primary btn-xs send">Send</button><textarea class="msg_input" rows="4"></textarea></div></div></div>' ;     
        
    //       $("#chat").append(  chatPopup  );
          
    //      displayChatBox();
    //      count++;
   
    //   });
    // }
 
    // function displayChatBox(){ 
    //       var i = 355 ; // start position
    //       var j = 260;  //next position
      
    //   $.each( arr, function( index:any, value ) {  
    //       if(index < 3){
    //           $('[rel="'+value+'"]').css("left",i);
    //     $('[rel="'+value+'"]').show();
    //         i = i+j;    
    //       }
    //       else{
    //     $('[rel="'+value+'"]').remove();
    //       }
    //         });  
    //   }  
      
    // });
   
  }
}



 
  // var temp:boolean = false;
      // arr.forEach((item:String) => {
      //   // if(item === username){
      //   //   temp=true;
      //   // }
      // });

     // if(!temp)

  
  




 

  


  





