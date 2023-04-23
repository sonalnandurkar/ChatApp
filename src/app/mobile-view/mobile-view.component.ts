import { Component, OnInit, Input  } from '@angular/core';
import * as $ from 'jquery'
import { UsersdataService } from '../usersdata.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {
users:any;

constructor(private userdata:UsersdataService) {
  console.log(userdata.users());
   this.users = this.userdata.users();
 }

// @Input()
// users:any= [];



searchToken = '';
userlist:boolean = true;
selectedUser:any
public innerWidth:any;


ngOnInit(): void {
   $(document).ready(function(){
     
    //For redirect to user list
     $(document).on('click', '.glyphicon-arrow-left', function() { 
         
          this.userlist = true
           document.getElementById('mobileview')!.style.display="block";
           $(".msg-box").remove();
          
      });
  
     //For open the chatbox 
     $(document).on('click', '#sidebar-user-box', function() {
           this.userlist = false
           console.log(this.userlist);

           console.log("---------------");

           // var userID = $(this).attr("class");
       
          var username = $(this).children().text() ;
          var userID =$(this).attr('data-id');
          console.log(userID);
          


          //  var chatPopup =  '<div class="msg_box" rel="'+ userID +'">'+
          //   '<div class="msg_head"><span class="glyphicon glyphicon-arrow-left"></span>'+username +'</div>'+
          //   '<div class="msg_wrap"> <div class="msg_body"> <div class="msg_push"></div> </div>'+
          //   '<div class="msg_footer"><button type="button" class="btn btn-primary btn-xs send">Send</button><textarea class="msg_input" rows="4"></textarea></div></div></div>' ;     
           var chatPopup = '<div  rel="'+userID+'" class="panel panel-chat msg-box">'+'<div class="panel-heading"><a href="#" class="chatMinimize" onclick="return false"><span><span class="glyphicon glyphicon-arrow-left"></span>'+ username +'</span></a><div class="clearFix"></div></div>'+
          '<div class="panel-body"><div class="clearFix"></div></div>'+'<div class="panel-footer"><button type="button" class="btn btn-primary btn-xs send">Send</button><textarea name="textMessage" cols="0" rows="0"></textarea></div></div>';
            $("#chat").append(  chatPopup  );
            document.getElementById('mobileview')!.style.display="none";
            
           
            
     });
        
   });

}

//for search the user
Search() {
  if (this.searchToken == '') {
    this.ngOnInit();
  } else {
    this.users =
      this.users.filter((res:any) => {
        return res.searchToken.toLocaleLowerCase().match(
          this.searchToken.toLocaleLowerCase()
        );
      });
  }
}



// showDiv(user:any){
  
//   this.so = false
//   console.log(user);
//   this.selectedUser = user; 
  

//     var chatPopup =  '<div class="msg_box" rel="'+ this.selectedUser.id+'">'+
//       '<div class="msg_head"><span  class="glyphicon glyphicon-arrow-left"></span>'+this.selectedUser.firstName +'</div>'+
//       '<div class="msg_wrap"> <div class="msg_body"> <div class="msg_push"></div> </div>'+
//       '<div class="msg_footer"><button type="button" class="btn btn-primary btn-xs send">Send</button><textarea class="msg_input" rows="4"></textarea></div></div></div>' ;     
    
//       $("#chat").append(  chatPopup  );
    
//       document.getElementById('mobileview')!.style.display="none";
//       //this.displayChatBox();
    
// };
  


 
}

